import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pass, passes } from '../_passesData';

export default function HomeScreen() {
  const router = useRouter();
  const activePasses = passes.filter(
    p => new Date(p.endDate).getTime() >= Date.now()
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <FontAwesome name="search" style={styles.searchIcon} />
            <TextInput placeholder="Search Food" style={styles.searchInput} />
          </View>
          <FontAwesome name="user-circle" style={styles.profileIcon} />
        </View>

        <Text style={styles.sectionTitle}>Ongoing Events</Text>

        {activePasses.map((item: Pass) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push(`/passes/${item.id}`)}
            activeOpacity={0.8}
          >
            <View style={styles.eventCard}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: item.markers[0].latitude,
                  longitude: item.markers[0].longitude,
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.02,
                }}
              >
                {item.markers.map((m, idx) => (
                  <Marker key={idx} coordinate={m} />
                ))}
              </MapView>
              <View style={styles.eventDetails}>
                <View style={styles.eventHeader}>
                  <Text style={styles.eventTitle}>{item.name}</Text>
                  <Text style={styles.eventPrice}>$20</Text>
                </View>
                <Text style={styles.eventSubtitle}>{item.location}</Text>
                <Text style={styles.eventDescription}>{item.partners}</Text>
                <Text style={styles.eventCampaign}>
                  Campaign Period: {item.startDate} - {item.endDate}
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
                  <FontAwesome name="shopping-cart" style={styles.buyButtonIcon} />
                  <Text style={styles.buyButtonText}>BUY NOW</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}

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
    fontSize: 20,
    color: '#888',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
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
    color: '#5C4033',
  },
  eventPrice: {
    fontSize: 18,
    color: '#5C4033',
  },
  eventSubtitle: {
    fontSize: 14,
    color: '#707070',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 12,
    color: '#707070',
    marginBottom: 5,
  },
  eventCampaign: {
    fontSize: 12,
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
  buyButtonIcon: {
    fontSize: 20,
    color: '#fff',
  },
  buyButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
  profileIcon: {
    fontSize: 30,
    color: '#888',
  },
});