// 产品分类类型
export type ProductCategory = 'wardrobe' | 'board' | 'engineering' | 'handle' | 'hinge' | 'slide';

// 产品接口
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  image: string;
  price?: string;
  isCustomizable: boolean;
  technicalSpecs: Record<string, string>;
}

// 产品分类信息
export const categories = [
  { id: 'wardrobe', name: 'Wardrobe Hardware', icon: '📦' },
  { id: 'board', name: 'Board Materials', icon: '🪵' },
  { id: 'engineering', name: 'Engineering Solutions', icon: '🔧' },
  { id: 'handle', name: 'Handles & Knobs', icon: '👋' },
  { id: 'hinge', name: 'Hinges', icon: '🔗' },
  { id: 'slide', name: 'Slides & Rails', icon: '➡️' },
];

// 模拟产品数据
export const products: Product[] = [
  {
    id: 'p1',
    name: 'Premium Wardrobe Hardware Set',
    category: 'wardrobe',
    description: 'High-quality wardrobe accessories with stable structure. Designed for durability and smooth operation.',
    features: [
      'Stainless steel construction',
      'Smooth opening and closing',
      'Corrosion resistant',
      'Easy installation'
    ],
    image: '/assets/images/products/wardrobe-handle-butterfly.png',
    price: 'Custom',
    isCustomizable: true,
    technicalSpecs: {
      Material: 'Stainless Steel 304',
      Finish: 'Brushed Nickel',
      'Weight Capacity': '50kg',
      Warranty: '5 years'
    }
  },
  {
    id: 'p2',
    name: 'Premium Board Materials',
    category: 'board',
    description: 'Custom boards for multiple scenarios. Perfect for various furniture applications with superior quality.',
    features: [
      'High-density fiberboard',
      'Moisture resistant',
      'Eco-friendly materials',
      'Various thickness options'
    ],
    image: '/assets/images/products/premium-board-materials.png',
    price: 'Custom',
    isCustomizable: true,
    technicalSpecs: {
      Material: 'MDF/HDF',
      Thickness: '12-25mm',
      Size: '1220x2440mm',
      Certification: 'E1 Standard'
    }
  },
  {
    id: 'p3',
    name: 'Engineering Solutions',
    category: 'engineering',
    description: 'Custom furniture project solutions. From concept to completion, tailored to your needs.',
    features: [
      'Custom design service',
      '3D modeling',
      'Project management',
      'On-site installation'
    ],
    image: '/assets/images/products/engineering-solution-scene.png',
    price: 'Custom Quote',
    isCustomizable: true,
    technicalSpecs: {
      Service: 'Full Project Solution',
      'Lead Time': '2-4 weeks',
      Warranty: '1 year',
      Support: '24/7 Technical Support'
    }
  },
  {
    id: 'p4',
    name: 'Modern Cabinet Handles',
    category: 'handle',
    description: 'Stylish and functional cabinet handles for modern furniture.',
    features: [
      'Contemporary design',
      'Ergonomic grip',
      'Durable finish',
      'Easy to install'
    ],
    image: '/assets/images/products/wardrobe-handle-butterfly.png',
    price: '$5-15',
    isCustomizable: false,
    technicalSpecs: {
      Material: 'Zinc Alloy',
      Finish: 'Chrome/Black/Gold',
      Length: '96mm',
      'Hole Distance': '64mm'
    }
  },
  {
    id: 'p5',
    name: 'Soft-Close Hinges',
    category: 'hinge',
    description: 'Quiet and smooth soft-close hinges for doors and cabinets.',
    features: [
      'Soft-close mechanism',
      'Adjustable tension',
      'Heavy duty',
      'Rust resistant'
    ],
    image: '/assets/images/products/premium-board-materials.png',
    price: '$2-8',
    isCustomizable: false,
    technicalSpecs: {
      Material: 'Steel',
      'Opening Angle': '110°',
      'Weight Capacity': '15kg',
      Finish: 'Nickel Plated'
    }
  },
  {
    id: 'p6',
    name: 'Ball Bearing Slides',
    category: 'slide',
    description: 'High-quality ball bearing slides for drawers and trays.',
    features: [
      'Full extension',
      'Soft-close',
      'Heavy duty',
      'Smooth operation'
    ],
    image: '/assets/images/products/engineering-solution-scene.png',
    price: '$10-30',
    isCustomizable: false,
    technicalSpecs: {
      Material: 'Steel',
      Length: '12-24 inches',
      'Weight Capacity': '75kg',
      Finish: 'Black Powder Coated'
    }
  }
];
