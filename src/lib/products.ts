export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'shirts' | 'gloves' | 'accessories' | 'clubs' | 'bags';
  price: number;
  images: string[];
  sizes?: string[];
  colors?: string[];
  stock: number;
  featured: boolean;
  description: string;
  details: string[];
  care: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Azure Crest Polo',
    slug: 'azure-crest-polo',
    category: 'shirts',
    price: 1890,
    images: ['/images/Blue%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azure', 'White', 'Olive'],
    stock: 15,
    featured: true,
    description: 'Moisture-wicking performance polo in a cool azure tone built for Chiang Mai heat.',
    details: ['4-way stretch fabric', 'UV protection', 'Breathable mesh panels', 'Modern slim fit'],
    care: ['Machine wash cold', 'Tumble dry low', 'Do not bleach']
  },
  {
    id: '2',
    name: 'Sandstone Polo',
    slug: 'sandstone-polo',
    category: 'shirts',
    price: 1290,
    images: ['/images/Creme%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Matcha', 'Olive'],
    stock: 20,
    featured: true,
    description: 'Cream-toned range staple with a buttery handfeel for all-day comfort.',
    details: ['100% organic cotton', 'Relaxed fit', 'Reinforced stitching'],
    care: ['Machine wash cold', 'Hang dry recommended']
  },
  {
    id: '3',
    name: 'Floral Fairway Polo',
    slug: 'floral-fairway-polo',
    category: 'shirts',
    price: 1890,
    images: ['/images/floral%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Cream', 'Olive'],
    stock: 14,
    featured: true,
    description: 'Signature floral polo inspired by Chiang Mai botanicals with a breathable knit.',
    details: ['Pattern-knit pique', 'Moisture-wicking', 'Relaxed athletic fit'],
    care: ['Machine wash cold', 'Dry flat', 'Do not bleach']
  },
  {
    id: '4',
    name: 'All-Weather Glove',
    slug: 'all-weather-glove',
    category: 'gloves',
    price: 690,
    images: ['/products/glove-3.jpg'],
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Grey'],
    stock: 18,
    featured: false,
    description: 'Synthetic glove designed for all weather conditions.',
    details: ['Water-resistant', 'Enhanced grip', 'Durable construction'],
    care: ['Machine washable', 'Air dry']
  },
  {
    id: '5',
    name: 'Limited Edition Birdie Cap',
    slug: 'limited-edition-birdie-cap',
    category: 'accessories',
    price: 990,
    images: ['/images/birdie%20limited%20edition%20cap.png'],
    sizes: ['One Size'],
    colors: ['Cream', 'Matcha'],
    stock: 18,
    featured: true,
    description: 'Collector cap with tonal embroidery and Birdiez orange underbrim.',
    details: ['Structured crown', 'Adjustable strap', 'Moisture-wicking sweatband'],
    care: ['Spot clean only', 'Air dry']
  },
  {
    id: '6',
    name: 'Golf Towel',
    slug: 'golf-towel',
    category: 'accessories',
    price: 490,
    images: ['/products/towel-1.jpg'],
    sizes: ['One Size'],
    colors: ['Olive', 'Matcha'],
    stock: 30,
    featured: false,
    description: 'Premium microfiber towel with carabiner clip.',
    details: ['Ultra-absorbent', 'Quick-dry fabric', 'Metal clip attachment'],
    care: ['Machine wash', 'Tumble dry low']
  },
  {
    id: '7',
    name: 'Titleist Driver (Used)',
    slug: 'titleist-driver-used',
    category: 'clubs',
    price: 8900,
    images: ['/products/driver-1.jpg'],
    stock: 2,
    featured: true,
    description: 'Pre-owned Titleist TSi3 driver in excellent condition. 9.5° loft.',
    details: ['9.5° loft', 'Stiff flex shaft', 'Excellent condition', 'Includes headcover'],
    care: ['Wipe clean after use', 'Store in headcover']
  },
  {
    id: '8',
    name: 'Callaway Iron Set (Used)',
    slug: 'callaway-iron-set-used',
    category: 'clubs',
    price: 12900,
    images: ['/products/irons-1.jpg'],
    stock: 1,
    featured: false,
    description: 'Pre-owned Callaway Apex 21 irons (5-PW). Great condition.',
    details: ['5-PW (6 clubs)', 'Regular flex', 'Good condition', 'Minor wear'],
    care: ['Clean grooves regularly', 'Store in dry place']
  },
  {
    id: '9',
    name: 'Stand Bag (Used)',
    slug: 'stand-bag-used',
    category: 'bags',
    price: 3900,
    images: ['/products/bag-1.jpg'],
    stock: 3,
    featured: false,
    description: 'Lightweight stand bag with 6 dividers. Gently used.',
    details: ['6-way divider', 'Multiple pockets', 'Rain hood included', 'Good condition'],
    care: ['Wipe clean', 'Store in dry area']
  },
  {
    id: '10',
    name: 'Hybrid Jacket',
    slug: 'hybrid-jacket',
    category: 'shirts',
    price: 3490,
    images: ['/products/jacket-1.jpg'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    stock: 8,
    featured: true,
    description: 'Windproof hybrid jacket for cooler days on the course.',
    details: ['Wind-resistant front panel', 'Stretch knit sleeves', 'Water-repellent finish'],
    care: ['Machine wash cold', 'Hang dry']
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
