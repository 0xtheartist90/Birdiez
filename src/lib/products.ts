export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'shirts' | 'gloves' | 'accessories' | 'clubs' | 'bags' | 'pants' | 'training' | 'tees' | 'balls' | 'headwear' | 'secondhand';
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

const baseProducts: Product[] = [
  {
    id: 'app-azure-crest',
    name: 'Azure Crest Polo',
    slug: 'azure-crest-polo',
    category: 'shirts',
    price: 1890,
    images: ['/images/Shop/Blue%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azure', 'White', 'Olive'],
    stock: 15,
    featured: true,
    description: 'Moisture-wicking performance polo in a cool azure tone built for Chiang Mai heat.',
    details: ['4-way stretch fabric', 'UV protection', 'Breathable mesh panels', 'Modern slim fit'],
    care: ['Machine wash cold', 'Tumble dry low', 'Do not bleach']
  },
  {
    id: 'app-sandstone',
    name: 'Sandstone Polo',
    slug: 'sandstone-polo',
    category: 'shirts',
    price: 1290,
    images: ['/images/Shop/Creme%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Matcha', 'Olive'],
    stock: 20,
    featured: true,
    description: 'Cream-toned range staple with a buttery handfeel for all-day comfort.',
    details: ['100% organic cotton', 'Relaxed fit', 'Reinforced stitching'],
    care: ['Machine wash cold', 'Hang dry recommended']
  },
  {
    id: 'app-floral-fairway',
    name: 'Floral Fairway Polo',
    slug: 'floral-fairway-polo',
    category: 'shirts',
    price: 1890,
    images: ['/images/Shop/floral%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Cream', 'Olive'],
    stock: 14,
    featured: true,
    description: 'Signature floral polo inspired by Chiang Mai botanicals with a breathable knit.',
    details: ['Pattern-knit pique', 'Moisture-wicking', 'Relaxed athletic fit'],
    care: ['Machine wash cold', 'Dry flat', 'Do not bleach']
  },
  {
    id: 'app-range-shirt',
    name: 'Heritage Range Shirt',
    slug: 'heritage-range-shirt',
    category: 'shirts',
    price: 1590,
    images: ['/images/Shop/Blue%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Olive'],
    stock: 20,
    featured: false,
    description: 'Camp-collar shirt cut in breathable twill for warm afternoons.',
    details: ['Relaxed block', 'Coconut buttons', 'Side vents'],
    care: ['Machine wash cold', 'Hang dry']
  },
  {
    id: 'head-script-cap',
    name: 'Birdiez Script Cap',
    slug: 'birdiez-script-cap',
    category: 'headwear',
    price: 890,
    images: ['/images/Shop/birdie%20limited%20edition%20cap.png'],
    sizes: ['One Size'],
    colors: ['Bone', 'Matcha'],
    stock: 24,
    featured: true,
    description: 'Structured cap with Birdiez script embroidery and contrast underbrim.',
    details: ['Moisture-wicking sweatband', 'Adjustable strap', 'Raised front embroidery'],
    care: ['Spot clean only', 'Air dry']
  },
  {
    id: 'secondhand-archive-cap',
    name: 'Archive Crest Cap (Secondhand)',
    slug: 'archive-crest-cap-secondhand',
    category: 'secondhand',
    price: 650,
    images: ['/images/Shop/birdie%20limited%20edition%20cap.png'],
    sizes: ['One Size'],
    colors: ['Cream'],
    stock: 5,
    featured: false,
    description: 'Lightly worn collectible cap from the first Birdiez drop.',
    details: ['Original embroidery', 'Minor visor patina', 'Adjustable strap'],
    care: ['Spot clean only', 'Store in shade']
  },
  {
    id: 'glove-all-weather',
    name: 'All-Weather Glove',
    slug: 'all-weather-glove',
    category: 'gloves',
    price: 690,
    images: ['/images/gloves.png'],
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Grey'],
    stock: 18,
    featured: false,
    description: 'Synthetic glove designed for all weather conditions.',
    details: ['Water-resistant palm', 'Enhanced grip', 'Durable construction'],
    care: ['Machine washable', 'Air dry']
  },
  {
    id: 'acc-heritage-cover',
    name: 'Heritage Golf Cover',
    slug: 'golf-cover',
    category: 'accessories',
    price: 2290,
    images: ['/images/Shop/golf-cover.png'],
    stock: 12,
    featured: true,
    description: 'Full-grain leather golf cover with contrast Birdiez stitching.',
    details: ['Full-grain leather', 'Magnetic closure', 'Microfleece lining'],
    care: ['Spot clean only', 'Condition leather seasonally']
  },
  {
    id: 'acc-tees-bundle',
    name: 'Artisan Golf Tees Set',
    slug: 'golf-tees',
    category: 'tees',
    price: 420,
    images: ['/images/Shop/golf-tees.jpg'],
    stock: 80,
    featured: true,
    description: 'Hand-painted bamboo tees packaged with a leather tee holder.',
    details: ['100 bamboo tees', 'Three tee heights', 'Includes leather holder'],
    care: ['Keep dry between rounds']
  },
  {
    id: 'acc-leather-kit',
    name: 'Leather Tee Holder Kit',
    slug: 'leather-tee-holder-kit',
    category: 'accessories',
    price: 1590,
    images: ['/images/Shop/leather%20tee%20holder.jpg'],
    stock: 14,
    featured: false,
    description: 'Premium leather tee wallet bundled with hand-dipped tees.',
    details: ['Full-grain leather', 'Magnetic snap', 'Includes 25 tees'],
    care: ['Spot clean', 'Condition leather seasonally']
  },
  {
    id: 'train-tempo',
    name: 'Tempo Swing Trainer',
    slug: 'tempo-swing-trainer',
    category: 'training',
    price: 1890,
    images: ['/images/Shop/training-aid-swingspeed.jpg'],
    stock: 20,
    featured: true,
    description: 'Compact tempo trainer for dialing in rhythm at home.',
    details: ['Adjustable weight', 'Grip alignment guide', 'Carry sleeve included'],
    care: ['Wipe clean after sessions', 'Store indoors']
  },
  {
    id: 'balls-tour-spin',
    name: 'Tour Spin Balls (Dozen)',
    slug: 'tour-spin-balls',
    category: 'balls',
    price: 1690,
    images: ['/images/Shop/golfballsbirdiez.png'],
    stock: 36,
    featured: true,
    description: 'Urethane-covered tour ball tuned for high launch and soft feel.',
    details: ['3-piece construction', 'Urethane cover', 'Mid-high launch'],
    care: ['Wipe clean after rounds']
  },
  {
    id: 'bags-bold-cart',
    name: 'Bold Cart Bag 01',
    slug: 'bold-cart-bag-01',
    category: 'bags',
    price: 3500,
    images: ['/images/Shop/red-bag.png'],
    stock: 8,
    featured: true,
    description: 'Statement cart bag finished in Birdiez bold red with tonal branding.',
    details: ['14-way divider', 'Magnetic rangefinder pocket', 'Rain hood'],
    care: ['Spot clean only', 'Store in dry area']
  },
  {
    id: 'bags-palm-stand',
    name: 'Palm Stand Bag 01',
    slug: 'palm-stand-bag-01',
    category: 'bags',
    price: 3500,
    images: ['/images/Shop/green-bag.png'],
    stock: 10,
    featured: true,
    description: 'Forest green stand bag built for scooter commutes and compact lockers.',
    details: ['Carbon legs', 'Velvet-lined valuables pocket', 'Weight 1.8kg'],
    care: ['Spot clean only', 'Air dry']
  },
  {
    id: 'bags-heritage-carry',
    name: 'Heritage Carry Bag',
    slug: 'heritage-carry-bag',
    category: 'bags',
    price: 3200,
    images: ['/images/golfbag-black-and-white.jpg'],
    stock: 6,
    featured: false,
    description: 'Monochrome carry bag inspired by mid-century tour silhouettes.',
    details: ['Padded single strap', 'Water-resistant panels', 'Velvet-lined pocket'],
    care: ['Spot clean', 'Air dry fully']
  }
];

export const products: Product[] = baseProducts;

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
