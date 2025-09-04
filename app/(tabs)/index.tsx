import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar and Profile Icon */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <FontAwesome name="search" size={20} color="#888" style={styles.searchIcon} />
            <TextInput placeholder="Search Food" style={styles.searchInput} />
          </View>
          <FontAwesome name="user-circle" size={30} color="#888" />
        </View> 

        {/* Placeholder Boxes */}
        <View style={styles.placeholderContainer}>
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
        </View> 

        {/* Ongoing Events */}
        <Text style={styles.sectionTitle}>Ongoing Events</Text> 

        {/* Event Card */}
        <View style={styles.eventCard}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 1.313,
              longitude: 103.95,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}>
            {/* Add markers for cafes */}
            <Marker coordinate={{ latitude: 1.3135, longitude: 103.9505 }} />
            <Marker coordinate={{ latitude: 1.314, longitude: 103.952 }} />
            <Marker coordinate={{ latitude: 1.3125, longitude: 103.949 }} />
          </MapView>
          <View style={styles.eventDetails}>
            <View style={styles.eventHeader}>
              <Text style={styles.eventTitle}>East Side Best Side (Cafes)</Text>
              <Text style={styles.eventPrice}>$20</Text>
            </View>
            <Text style={styles.eventSubtitle}>Siglap</Text>
            <Text style={styles.eventDescription}>
              Les Mains Bakehouse, Craftsmen Coffee, Soy...
            </Text>
            <Text style={styles.eventCampaign}>
              Campaign Period: 24 Feb 2025 - 24 Mar 2025
            </Text>
            <TouchableOpacity style={styles.buyButton}>
              <FontAwesome name="shopping-cart" size={20} color="#fff" />
              <Text style={styles.buyButtonText}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
  },
  placeholderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  placeholderBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#5C4033',
    marginBottom: 10,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  map: {
    height: 150,
  },
  eventDetails: {
    padding: 15,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#5C4033',
  },
  eventPrice: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#5C4033',
  },
  eventSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#707070',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#707070',
    marginBottom: 5,
  },
  eventCampaign: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#707070',
    marginBottom: 15,
  },
  buyButton: {
    flexDirection: 'row',
    backgroundColor: '#C7A581',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buyButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
  },
});