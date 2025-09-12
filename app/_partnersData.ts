export interface Partner {
  id: string;
  name: string;
  location: string;
  rating: number;
  description?: string;
  image: any; // local image via require() or remote URL
}

export const partners: Partner[] = [
  {
    id: 'les-mains-bakehouse',
    name: 'Les Mains Bakehouse',
    location: 'Siglap',
    rating: 4.8,
    description: 'Artisanal bakery with a cozy ambiance and freshly baked breads.',
    image: require('@/assets/images/cafe-image1.jpg'),
  },
  {
    id: 'craftsmen-coffee',
    name: 'Craftsmen Coffee',
    location: 'Siglap',
    rating: 4.5,
    description: 'Specialty coffee roasters with great brunch options.',
    image: require('@/assets/images/cafe-image2.jpg'),
  },
  {
    id: 'soy-cafe',
    name: 'Soy Cafe',
    location: 'Siglap',
    rating: 4.3,
    description: 'A minimalist cafe serving soy-based drinks and snacks.',
    image: require('@/assets/images/cafe-image1.jpg'),
  },
  {
    id: 'cafe-x',
    name: 'Cafe X',
    location: 'Siglap',
    rating: 4.1,
    description: 'Local favourite with cozy corners and specialty lattes.',
    image: require('@/assets/images/cafe-image2.jpg'),
  },
  {
    id: 'cafe-y',
    name: 'Cafe Y',
    location: 'Siglap',
    rating: 4.2,
    description: 'Trendy cafe with a variety of cakes and pastries.',
    image: require('@/assets/images/cafe-image2.jpg'),
  },
  {
    id: 'bakery-x',
    name: 'Bakery X',
    location: 'Jurong',
    rating: 4.6,
    description: 'Bakery with freshly baked bread, cakes and sandwiches.',
    image: require('@/assets/images/cafe-image1.jpg'),
  },
  {
    id: 'coffee-z',
    name: 'Coffee Z',
    location: 'Jurong',
    rating: 4.4,
    description: 'Cozy coffee spot with signature espresso and cappuccino.',
    image: require('@/assets/images/cafe-image1.jpg'),
  },
  {
    id: 'cafe-a',
    name: 'Cafe A',
    location: 'Jurong',
    rating: 4.0,
    description: 'Casual cafe with a selection of brunch items and drinks.',
    image: require('@/assets/images/cafe-image2.jpg'),
  },
  {
    id: 'cafe-b',
    name: 'Cafe B',
    location: 'Jurong',
    rating: 4.1,
    description: 'Modern cafe serving coffee, teas and pastries.',
    image: require('@/assets/images/cafe-image2.jpg'),
  },
];