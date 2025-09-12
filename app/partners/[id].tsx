import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { partners } from '../_partnersData'; // adjust path

export default function PartnerDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const partner = partners.find(p => p.id === params.id);
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Partner Details',
    });}, [navigation]);

  if (!partner) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Partner not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={partner.image} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{partner.name}</Text>
        <Text style={styles.location}>📍 {partner.location}</Text>
        <Text style={styles.rating}>⭐ Rating: {partner.rating}</Text>
        {partner.description && (
          <Text style={styles.description}>{partner.description}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 200 },
  infoContainer: { padding: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  location: { fontSize: 16, color: '#666', marginBottom: 4 },
  rating: { fontSize: 16, color: '#666', marginBottom: 8 },
  description: { fontSize: 14, color: '#444', lineHeight: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notFound: { fontSize: 18, color: 'red' },
});