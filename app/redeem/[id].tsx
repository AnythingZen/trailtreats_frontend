import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// export const navigationOptions = {
//   title: 'Redemption',
// };

export default function RedeemScreen() {
  const [couponNumber, setCouponNumber] = useState('');
  const [qrValue, setQrValue] = useState('');
  const { id } = useLocalSearchParams<{ id: string }>();
  
  useEffect(() => {
    // Generate random coupon number (12 digits)
    const randomCoupon = Math.floor(1000_0000_0000 + Math.random() * 9000_0000_0000)
      .toString()
      .slice(0, 12);

    setCouponNumber(randomCoupon);
    setQrValue(`COUPON:${randomCoupon}|PASS:${id}`);
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>[{id}]</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Coupon No.</Text>
        <Text style={styles.coupon}>{couponNumber}</Text>
        <View style={{ marginTop: 10 }}>
          {qrValue ? (
            <QRCode value={qrValue} size={150} />
          ) : (
            <Text>Loading QR...</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  card: {
    backgroundColor: '#F5EFE6',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  label: { fontSize: 14, color: '#333' },
  coupon: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});