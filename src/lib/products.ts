export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'shirts' | 'gloves' | 'accessories' | 'clubs' | 'bags' | 'pants' | 'training' | 'tees' | 'balls';
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

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const baseProducts: Product[] = [
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
  },
  {
    id: '11',
    name: 'Matcha Range Pants',
    slug: 'matcha-range-pants',
    category: 'pants',
    price: 2590,
    images: ['/images/pants.jpg'],
    sizes: ['30', '32', '34', '36'],
    colors: ['Matcha', 'Charcoal'],
    stock: 22,
    featured: true,
    description: 'Lightweight performance pants with a tapered fit for humid Chiang Mai days.',
    details: ['Moisture-wicking fabric', 'Silicone gripper waistband', 'Tapered athletic fit'],
    care: ['Machine wash cold', 'Tumble dry low']
  },
  {
    id: '12',
    name: 'Tempo Putting Gate',
    slug: 'tempo-putting-gate',
    category: 'training',
    price: 1490,
    images: ['/images/training-aid.jpg'],
    stock: 25,
    featured: true,
    description: 'Aluminum putting gate with alignment pegs for indoor tempo work.',
    details: ['Adjustable width', 'Non-slip base', 'Includes carry pouch'],
    care: ['Wipe clean', 'Store in pouch']
  },
  {
    id: '13',
    name: 'Cinnamon Tees (100 pack)',
    slug: 'cinnamon-tees',
    category: 'tees',
    price: 290,
    images: ['/images/tees.jpg'],
    stock: 60,
    featured: true,
    description: 'Bamboo tees dipped in Birdiez cinnamon orange for on-course flair.',
    details: ['Bamboo construction', 'Mixed height pack', 'Biodegradable'],
    care: ['Store dry']
  },
  {
    id: '14',
    name: 'Tour Spin Balls (Dozen)',
    slug: 'tour-spin-balls',
    category: 'balls',
    price: 1690,
    images: ['/images/golf-balls.jpg'],
    stock: 40,
    featured: true,
    description: 'Urethane-covered tour ball tuned for high launch and soft feel.',
    details: ['3-piece construction', 'Urethane cover', 'Mid-high launch'],
    care: ['Wipe clean after rounds']
  },
  {
    id: '15',
    name: 'Heritage Golf Cover',
    slug: 'golf-cover',
    category: 'accessories',
    price: 2290,
    images: ['/images/golf-cover.png'],
    stock: 12,
    featured: true,
    description: 'Full-grain leather golf cover with contrast Birdiez stitching.',
    details: ['Full-grain leather', 'Magnetic closure', 'Microfleece lining'],
    care: ['Spot clean only', 'Condition leather seasonally']
  },
  {
    id: '16',
    name: 'Artisan Golf Tees Set',
    slug: 'golf-tees',
    category: 'tees',
    price: 420,
    images: ['/images/golf-tees.jpg'],
    stock: 80,
    featured: true,
    description: 'Hand-painted bamboo tees packaged with a leather tee holder.',
    details: ['100 bamboo tees', 'Three tee heights', 'Includes leather holder'],
    care: ['Keep dry between rounds']
  }
];

type GeneratorConfig = {
  baseName: string;
  category: Product['category'];
  image: string;
  basePrice: number;
  sizes?: string[];
  colors?: string[];
  stock: number;
  description: string;
  details: string[];
  care: string[];
  count: number;
  featuredEvery?: number;
};

const generatorConfigs: GeneratorConfig[] = [
  {
    baseName: 'Chiang Mai Polo',
    category: 'shirts',
    image: '/images/floral%20polo.png',
    basePrice: 1990,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azure', 'Cream', 'Olive'],
    stock: 18,
    description: 'Breathable polo knit inspired by Chiang Mai evenings.',
    details: ['Soft touch pique', 'Moisture control', 'Relaxed tailoring'],
    care: ['Machine wash cold', 'Dry flat'],
    count: 24,
    featuredEvery: 7
  },
  {
    baseName: 'Range Essentials Pants',
    category: 'pants',
    image: '/images/pants.jpg',
    basePrice: 2490,
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Matcha', 'Stone'],
    stock: 20,
    description: 'Stretch-woven pants with a tapered profile for year-round play.',
    details: ['4-way stretch', 'Anti-slip waistband', 'Hidden zip pocket'],
    care: ['Machine wash cold', 'Tumble dry low'],
    count: 20,
    featuredEvery: 6
  },
  {
    baseName: 'Tempo Trainer',
    category: 'training',
    image: '/images/training-aid.jpg',
    basePrice: 1590,
    stock: 24,
    description: 'Training aid crafted to keep tempo crisp during home sessions.',
    details: ['Adjustable resistance', 'Compact design', 'Indoor/outdoor use'],
    care: ['Wipe clean', 'Store indoors'],
    count: 20,
    featuredEvery: 5
  },
  {
    baseName: 'Bamboo Tees Bundle',
    category: 'tees',
    image: '/images/tees.jpg',
    basePrice: 220,
    stock: 70,
    description: 'Biodegradable tees dipped in Birdiez signature hues.',
    details: ['100 pack', 'Mixed heights', 'Durable bamboo'],
    care: ['Store in dry pouch'],
    count: 20,
    featuredEvery: 8
  },
  {
    baseName: 'Tour Strike Balls',
    category: 'balls',
    image: '/images/golf-balls.jpg',
    basePrice: 1590,
    stock: 36,
    description: 'Spin-friendly urethane balls for competitive rounds.',
    details: ['Cast urethane cover', 'Triple track stamp', 'Mid launch profile'],
    care: ['Wipe after each round'],
    count: 20,
    featuredEvery: 4
  },
  {
    baseName: 'Grip Lock Glove',
    category: 'gloves',
    image: '/images/gloves.png',
    basePrice: 740,
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Black'],
    stock: 20,
    description: 'Cabretta feel glove with weather-resistant panels.',
    details: ['Perforated fingers', 'Dual closure tab', 'Drytac palm'],
    care: ['Air dry only', 'Spot clean'],
    count: 18,
    featuredEvery: 6
  },
  {
    baseName: 'Fairway Utility Kit',
    category: 'accessories',
    image: '/images/cap.png',
    basePrice: 850,
    stock: 28,
    description: 'Essential accessories bundle for weeknight range sessions.',
    details: ['Structured cap', 'Cooling towel', 'Divot tool'],
    care: ['Spot clean cap', 'Machine wash towel'],
    count: 15,
    featuredEvery: 5
  },
  {
    baseName: 'Player Series Club',
    category: 'clubs',
    image: '/products/driver-1.jpg',
    basePrice: 9400,
    stock: 4,
    description: 'Tour-proven metalwoods and irons sourced locally.',
    details: ['Certified used', 'Includes headcover', 'Premium shaft options'],
    care: ['Wipe clean', 'Store in dry area'],
    count: 10,
    featuredEvery: 5
  },
  {
    baseName: 'Field Carry Bag',
    category: 'bags',
    image: '/products/bag-1.jpg',
    basePrice: 4200,
    stock: 6,
    description: 'Featherweight stand bags tuned for scooter commutes.',
    details: ['5-way divider', 'Waterproof bottom', 'Dual strap harness'],
    care: ['Wipe clean', 'Store in shade'],
    count: 6,
    featuredEvery: 3
  },
  {
    baseName: 'Bold Cart Bag',
    category: 'bags',
    image: '/images/red-bag.png',
    basePrice: 3500,
    stock: 10,
    description: 'Statement cart bag finished in Birdiez bold red with tonal branding.',
    details: ['14-way divider', 'Magnetic rangefinder pocket', 'Rain hood'],
    care: ['Spot clean only', 'Store in dry area'],
    count: 1,
    featuredEvery: 1
  },
  {
    baseName: 'Palm Stand Bag',
    category: 'bags',
    image: '/images/green-bag.png',
    basePrice: 3500,
    stock: 10,
    description: 'Forest green stand bag built for scooter commutes and compact lockers.',
    details: ['Carbon legs', 'Velvet-lined valuables pocket', 'Weight 1.8kg'],
    care: ['Spot clean only', 'Air dry'],
    count: 1,
    featuredEvery: 1
  }
];

const generatedProducts: Product[] = generatorConfigs.flatMap((config, configIdx) =>
  Array.from({ length: config.count }, (_, itemIdx) => {
    const seq = itemIdx + 1;
    const name = `${config.baseName} ${seq.toString().padStart(2, '0')}`;

    return {
      id: `gen-${configIdx + 1}-${seq}`,
      name,
      slug: slugify(name),
      category: config.category,
      price: config.basePrice + (itemIdx % 4) * 70,
      images: [config.image],
      sizes: config.sizes,
      colors: config.colors,
      stock: Math.max(4, config.stock - (itemIdx % 5)),
      featured: config.featuredEvery ? seq % config.featuredEvery === 0 : false,
      description: config.description,
      details: config.details,
      care: config.care
    };
  })
);

export const products: Product[] = [...baseProducts, ...generatedProducts];

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
