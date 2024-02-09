// products.js

import PremiumTileImage from '../assets/product-images/city-white-decord.jpg';
import MosaicArtistryImage from '../assets/product-images/dennis-calacatta.jpg';
import EngineeredHardwoodImage from '../assets/product-images/firuze.jpg';
import CustomDesignImage from '../assets/product-images/nightlight.jpg';

const products = [
  {
    id: 1,
    name: 'Premium Tile Collection',
    description: 'Exquisite tiles sourced from the finest materials.',
    code: 'FQ-001',
    image: PremiumTileImage,
    category: 'Tiles', // Category for Premium Tile Collection
    size: '24" x 48"', // Size for Premium Tile Collection
    finish: 'Polished', // Finish for Mosaic Artistry Tiles
  },
  {
    id: 2,
    name: 'Mosaic Artistry Tiles',
    description: 'Custom-made mosaic tiles to transform any space.',
    code: 'FQ-002',
    image: MosaicArtistryImage,
    category: 'Tiles', // Category for Mosaic Artistry Tiles
    size: '48" x 48"', // Size for Mosaic Artistry Tiles
    finish: 'Polished', // Finish for Mosaic Artistry Tiles
  },
  {
    id: 3,
    name: 'Black Calacatta',
    description: 'Luxurious and durable tile options, they look very nice.',
    code: 'FQ-003',
    image: EngineeredHardwoodImage,
    category: 'Engineered Hardwood', // Category for Engineered Hardwood Flooring
  },
  {
    id: 4,
    name: 'Custom Design Services',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-004',
    image: CustomDesignImage,
    category: 'Custom Design', // Category for Custom Design Services
  },
  {
    id: 5,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-005',
    image: EngineeredHardwoodImage,
    category: 'Tiles', // Category for Test (example, adjust as needed)
    size: '48" x 48"',
    finish: 'Polished', // Finish for Mosaic Artistry Tiles
  },
  {
    id: 6,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-006',
    image: PremiumTileImage,
    category: 'Mosaic', // Category for Test (example, adjust as needed)
  },
  {
    id: 7,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-007',
    image: CustomDesignImage,
    category: 'Engineered Hardwood', // Category for Test (example, adjust as needed)
  },
  {
    id: 8,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-008',
    image: EngineeredHardwoodImage,
    category: 'Custom Design', // Category for Test (example, adjust as needed)
  },
  {
    id: 9,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-009',
    image: CustomDesignImage,
    category: 'Tiles', // Category for Test (example, adjust as needed)
    size: '48" x 48"',
    finish: 'Polished', // Finish for Mosaic Artistry Tiles
  },
  {
    id: 10,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-010',
    image: CustomDesignImage,
    category: 'Engineered Hardwood', // Category for Test (example, adjust as needed)
  },
  {
    id: 11,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-011',
    image: CustomDesignImage,
    category: 'Tiles', // Category for Test (example, adjust as needed)
    size: '48" x 48"',
    finish: 'Polished', // Finish for Mosaic Artistry Tiles
  },
  {
    id: 12,
    name: 'Test',
    description: 'Tailored solutions for unique design preferences.',
    code: 'FQ-012',
    image: CustomDesignImage,
    category: 'Mosaic', // Category for Test (example, adjust as needed)
  },
];

export default products;
