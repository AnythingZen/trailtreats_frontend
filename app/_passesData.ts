export interface Marker {
  latitude: number;
  longitude: number;
}

export interface CafeUsage {
  name: string;
  redeemed: boolean; // true if the pass has been used at this cafe
}

export interface Pass {
  id: string;
  name: string;
  location: string;
  partners: string;
  startDate: string;
  endDate: string;
  mapImage: any; // require() or URL
  markers: Marker[];
  usage: CafeUsage[]; // track usage per cafe
}

export const passes: Pass[] = [
  {
    id: 'East Side Best Side',
    name: 'East Side Best Side (Cafes)',
    location: 'Siglap',
    partners: 'Les Mains Bakehouse, Craftsmen Coffee, Soy Cafe, Cafe X, Cafe Y',
    startDate: '2025-09-01',
    endDate: '2025-10-01',
    mapImage: require('@/assets/images/cafe-image1.jpg'),
    markers: [
      { latitude: 1.3135, longitude: 103.9505 },
      { latitude: 1.314, longitude: 103.952 },
      { latitude: 1.3125, longitude: 103.949 },
    ],
    usage: [
      { name: 'Les Mains Bakehouse', redeemed: false },
      { name: 'Craftsmen Coffee', redeemed: false },
      { name: 'Soy Cafe', redeemed: false },
      { name: 'Cafe X', redeemed: false },
      { name: 'Cafe Y', redeemed: false },
    ],
  },
  {
    id: 'West Side Best Side',
    name: 'West Side Best Side (Cafes)',
    location: 'Jurong',
    partners: 'Bakery X, Cafe Y, Coffee Z, Cafe A, Cafe B',
    startDate: '2025-09-01',
    endDate: '2025-10-06',
    mapImage: require('@/assets/images/cafe-image2.jpg'),
    markers: [
      { latitude: 1.339, longitude: 103.707 },
      { latitude: 1.341, longitude: 103.709 },
    ],
    usage: [
      { name: 'Bakery X', redeemed: false },
      { name: 'Cafe Y', redeemed: false },
      { name: 'Coffee Z', redeemed: false },
      { name: 'Cafe A', redeemed: true },
      { name: 'Cafe B', redeemed: true },
    ],
  },
  {
    id: 'Sweet Treats Galore',
    name: 'Sweet Treats Galore',
    location: 'Siglap',
    partners: 'Les Mains Bakehouse, Craftsmen Coffee, Soy Cafe, Cafe X, Cafe Y',
    startDate: '2025-09-01',
    endDate: '2025-09-10',
    mapImage: require('@/assets/images/cafe-image1.jpg'),
    markers: [
      { latitude: 1.3135, longitude: 103.9505 },
      { latitude: 1.314, longitude: 103.952 },
      { latitude: 1.3125, longitude: 103.949 },
    ],
    usage: [
      { name: 'Les Mains Bakehouse', redeemed: false },
      { name: 'Craftsmen Coffee', redeemed: false },
      { name: 'Soy Cafe', redeemed: false },
      { name: 'Cafe X', redeemed: false },
      { name: 'Cafe Y', redeemed: false },
    ],
  },
];