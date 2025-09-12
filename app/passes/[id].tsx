import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { passes } from '../_passesData';

export default function PassDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  const pass = passes.find(p => p.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Pass Details' });
  }, [navigation]);

  if (!pass) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Pass not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: pass.markers[0].latitude,
          longitude: pass.markers[0].longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {pass.markers.map((m, idx) => (
          <Marker key={idx} coordinate={m} />
        ))}
      </MapView>

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{pass.name}</Text>
        <Text style={styles.location}>📍 {pass.location}</Text>
        <Text style={styles.partners}>Partners: {pass.partners}</Text>
        <Text style={styles.campaign}>
          Campaign Period: {pass.startDate} - {pass.endDate}
        </Text>

        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => {
            Alert.alert(
              'Confirm Purchase',
              'Do you want to buy this pass?',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Confirm',
                  onPress: () => Alert.alert('Success', 'Pass purchased!'),
                },
              ]
            );
          }}
        >
          <Text style={styles.buyButtonText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EFE6' },
  map: { width: '100%', height: 200 },
  detailsContainer: { padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: '#5C4033' },
  location: { fontSize: 16, marginBottom: 8, color: '#707070' },
  partners: { fontSize: 14, marginBottom: 8, color: '#707070' },
  campaign: { fontSize: 12, marginBottom: 16, color: '#707070' },
  buyButton: {
    backgroundColor: '#C7A581',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});