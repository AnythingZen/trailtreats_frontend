import { useNavigation, useRouter } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Pass, passes } from './_passesData';

export default function HistoryScreen() {
  const router = useRouter();

const navigation = useNavigation();

useLayoutEffect(() => {
    navigation.setOptions({
        title: 'History of Purchased Passes',
    });}, [navigation]);

  // expired passes only
  const expiredPasses = passes.filter(
    p => new Date(p.endDate).getTime() < Date.now()
  );

  const renderItem = ({ item }: { item: Pass }) => {
    const expiredDays =
      Math.ceil((Date.now() - new Date(item.endDate).getTime()) / (1000 * 60 * 60 * 24));

    // handle local vs remote image
    const imageSource: ImageSourcePropType =
      typeof item.mapImage === 'string' ? { uri: item.mapImage } : item.mapImage;

    return (
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.partners}>{item.partners}</Text>
          <Text style={styles.dates}>
            Campaign Period: {item.startDate} - {item.endDate}
          </Text>
          <Text style={styles.expired}>Expired {expiredDays} days ago</Text>
        </View>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() =>
            router.push({
              pathname: '/redeem/[id]',
              params: { id: item.id },
            })
          }>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>View</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={expiredPasses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <Text>No more expired passes</Text>
            <TouchableOpacity
              style={styles.getMoreButton}
              onPress={() => router.push('/(tabs)')}>
              <Text style={{ color: '#6B4F2A', fontWeight: 'bold' }}>Get More</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 50 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14, color: '#666' },
  partners: { fontSize: 12, color: '#666' },
  dates: { fontSize: 12, color: '#666' },
  expired: { fontSize: 12, color: 'gray', fontWeight: 'bold' },
  detailsButton: {
    backgroundColor: '#6B4F2A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  getMoreButton: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6B4F2A',
  },
});