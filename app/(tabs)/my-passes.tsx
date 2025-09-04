import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Pass {
  id: string;
  name: string;
  location: string;
  partners: string;
  startDate: string; // ISO format
  endDate: string; // ISO format
  mapImage: string; // url or local
}

const passes: Pass[] = [
  {
    id: 'East Side Best Side',
    name: 'East Side Best Side (Cafes)',
    location: 'Siglap',
    partners: 'Les Mains Bakehouse, Craftsmen Coffee, Soy...',
    startDate: '2025-09-01',
    endDate: '2025-10-01',
    mapImage: 'https://via.placeholder.com/80x80.png?text=Map',
  },
  {
    id: 'West Side Best Side',
    name: 'West Side Best Side (Cafes)',
    location: 'Siglap',
    partners: 'Les Mains Bakehouse, Craftsmen Coffee, Soy...',
    startDate: '2025-09-01',
    endDate: '2025-10-06',
    mapImage: 'https://via.placeholder.com/80x80.png?text=Map',
  },
];

export default function MyPassesScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Pass }) => {
    const remainingDays =
      Math.ceil((new Date(item.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.mapImage }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.partners}>{item.partners}</Text>
          <Text style={styles.dates}>
            Campaign Period: {item.startDate} - {item.endDate}
          </Text>
          {remainingDays > 0 && (
            <Text style={styles.remaining}>{remainingDays} days remaining!</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.redeemButton}
          onPress={() =>
          router.push({
            pathname: '/redeem/[id]',
            params: { id: item.id },
          })
}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Redeem</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Active Passes</Text>
        <TouchableOpacity onPress={() => router.push('../history')}>
          <Text style={styles.history}>History</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={passes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <Text>No more passes</Text>
            <TouchableOpacity
              style={styles.getMoreButton}
              onPress={() => router.push('/(tabs)')}
            >
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
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  header: { fontSize: 20, fontWeight: 'bold' },
  history: { fontSize: 16, color: '#6B4F2A' },
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
  remaining: { fontSize: 12, color: 'red', fontWeight: 'bold' },
  redeemButton: {
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