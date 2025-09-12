import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { partners } from '../_partnersData'; // adjust path
import { Pass, passes } from '../_passesData'; // adjust path

export default function RedeemScreen() {
  const [couponNumber, setCouponNumber] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [currentPass, setCurrentPass] = useState<Pass | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Redemption' });
  }, [navigation]);

  useEffect(() => {
    const pass = passes.find(p => p.id === id);
    if (!pass) return;
    setCurrentPass(pass);

    const randomCoupon = Math.floor(1000_0000_0000 + Math.random() * 9000_0000_0000)
      .toString()
      .slice(0, 12);

    setCouponNumber(randomCoupon);
    setQrValue(`COUPON:${randomCoupon}|PASS:${id}`);
  }, [id]);

  if (!currentPass) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Pass not found</Text>
      </View>
    );
  }

  const remainingCafes = currentPass.usage.filter(cafe => !cafe.redeemed);
  const usedCafes = currentPass.usage.filter(cafe => cafe.redeemed);

  // Helper to get partner id by name
  const getPartnerId = (name: string) => partners.find(p => p.name === name)?.id;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{currentPass.name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Coupon No.</Text>
        <Text style={styles.coupon}>{couponNumber}</Text>

        <View style={{ marginTop: 10, alignSelf: 'center' }}>
          {qrValue ? <QRCode value={qrValue} size={150} /> : <Text>Loading QR...</Text>}
        </View>

        <View style={{ marginTop: 20, alignSelf: 'flex-start', width: '100%' }}>
          <Text style={styles.label}>Remaining Cafes: {remainingCafes.length}</Text>
          {remainingCafes.map(cafe => {
            const partnerId = getPartnerId(cafe.name);
            return partnerId ? (
              <TouchableOpacity
                key={cafe.name}
                onPress={() => router.push(`/partners/${partnerId}`)}
              >
                <Text style={[styles.cafeName, { color: '#6B4F2A' }]}>{cafe.name}</Text>
              </TouchableOpacity>
            ) : (
              <Text key={cafe.name} style={styles.cafeName}>{cafe.name}</Text>
            );
          })}

          <Text style={[styles.label, { marginTop: 12 }]}>Used Cafes: {usedCafes.length}</Text>
          {usedCafes.map(cafe => {
            const partnerId = getPartnerId(cafe.name);
            return partnerId ? (
              <TouchableOpacity
                key={cafe.name}
                onPress={() => router.push(`/partners/${partnerId}`)}
              >
                <Text style={[styles.cafeName, { color: '#666', textDecorationLine: 'line-through' }]}>
                  {cafe.name}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text key={cafe.name} style={[styles.cafeName, { textDecorationLine: 'line-through' }]}>
                {cafe.name}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#F5EFE6',
    padding: 20,
    borderRadius: 12,
  },
  label: { fontSize: 14, color: '#333', fontWeight: '600' },
  coupon: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  cafeName: { fontSize: 14, marginTop: 4 },
});