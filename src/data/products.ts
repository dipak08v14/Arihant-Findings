import { Product } from '../types';

export const B2B_PRODUCTS: Product[] = [
  {
    id: 'chain',
    name: 'Precision Gold Chains',
    subtitle: 'High-Tensile Loose Chains for Jewelry Assembly',
    description: 'Expertly machined loose chain lengths designed for jewelry assembly. Crafted with precise link alignment and uniform solder joints to ensure robust performance under tensile load. Ideal for automatic neckwear manufacture.',
    features: [
      'Engineered uniform link consistency',
      'XRF certified gold purity alloy',
      'Excellent flexibility and high tensile strength',
      'Smooth edges, fully skin-safe micro-polishing'
    ],
    technicalDetails: 'Standard loose links in spools of 100 meters, ready-to-solder or pre-soldered with calibrated thickness tolerances.',
    specs: {
      material: ['22K Gold', '18K Yellow/Rose/White Gold', '14K Gold', '925 Sterling Silver'],
      dimensions: '0.15mm - 1.20mm Wire Gauge',
      weightRange: '0.35g - 4.2g per meter',
      moq: '50 Meters',
      purityGrades: ['916 Fine Gold', '750 Gold', '585 Gold', '925 Silver'],
      finishing: 'High-Mirror Gold Flash Plated & Anti-Tarnish Coated'
    }
  },
  {
    id: 'miracle-plate',
    name: 'Precision Miracle Plates',
    subtitle: 'Facet-Cut Optical Brilliance Booster Plates',
    description: 'Diamond-cut, high-fidelity concentric facet plates designed to hold small diamonds or gemstones. The precision-engineered reflective grooves amplify light refraction, making minor stones appear up to 3x larger and significantly more brilliant.',
    features: [
      'Ultra-reflective geometric mirror facets',
      'Calibrated inner bezel seat for perfect prong setting',
      'Durable structural thickness preventing setting warping',
      'Standard circular, square, and cushion designs available'
    ],
    technicalDetails: 'CNC laser-milled facet grooves with +/- 0.02mm dimensional tolerance. Ideal for mass-market bridal rings and necklaces.',
    specs: {
      material: ['18K Yellow/Rose/White Gold', '14K Gold', 'Platinum PT950'],
      dimensions: '1.50mm to 6.50mm Standard Diameters',
      weightRange: '0.04g - 0.28g per piece',
      moq: '500 Units',
      purityGrades: ['750 Gold', '585 Gold'],
      finishing: 'Ultra-Lustre Rhodium Plated & Diamond-Cut'
    }
  },
  {
    id: 'chakipost',
    name: 'Premium Chakipost & Scrolls',
    subtitle: 'Earring Posts and Secure Butterly Friction Backs',
    description: 'Engineered earring friction/screw posts equipped with ultra-secure butterfly scroll backings. Features calibrated precision dual-grooves for flawless grip retention, preventing accidental slippage of fine jewellery earrings.',
    features: [
      'Dual-notched safety groove for multi-stage locking',
      'High spring-tempered backing scrolls for prolonged retention force',
      'Rounded end-tips polished to prevent lobe irritation',
      'Heavy-duty alloy selection for daily wear longevity'
    ],
    technicalDetails: 'Thread-milled post with standard 0.85mm post diameter, compatible with high-end automatic friction-clutch assembly systems.',
    specs: {
      material: ['22K Gold', '18K Yellow/Rose/White Gold', '14K Yellow/Rose/White Gold', '925 Sterling Silver'],
      dimensions: '0.75mm - 1.0mm Shank Gauge | 9.5mm - 12.0mm Post Length',
      weightRange: '0.12g - 0.45g per pair',
      moq: '1,000 Pairs',
      purityGrades: ['916 Fine Gold', '750 Gold', '585 Gold', '925 Silver'],
      finishing: 'High-Sheen Burnished Polishing'
    }
  },
  {
    id: 's-hook',
    name: 'Heavy Duty S & M Clasps',
    subtitle: 'Classic Neckwear Closures with Reinforced Alloys',
    description: 'Forged and wire-formed traditional S-Hook and M-Hook clasps for necklace and bracelet terminations. Manufactured using proprietary strain-hardened alloys to ensure a rigid clasp shape with lifetime elastic recovery.',
    features: [
      'Strain-hardened spring-tension gold alloys',
      'Symmetric stamping with flawless structural lines',
      'Open loops with smooth bevelled security gaps for simple jump-ring soldering',
      'Solid non-porous structure'
    ],
    technicalDetails: 'Stamper-cut and hand-formed clasp assemblies. Verified with strict mechanical stress tests of over 10,000 closure cycles.',
    specs: {
      material: ['22K Gold', '18K Yellow/White/Rose Gold', '14K Gold'],
      dimensions: '6.0mm to 16.0mm Overall Lengths',
      weightRange: '0.22g - 1.85g per piece',
      moq: '250 Units',
      purityGrades: ['916 Gold', '750 Gold', '585 Gold'],
      finishing: 'Acid-Etched Surface Activation & High Mirror Polish'
    }
  },
  {
    id: 'lobster-lock',
    name: 'Industrial Lobster Claws',
    subtitle: 'Calibrated Trigger Locks with Encased Spring Mechanisms',
    description: 'The pinnacle of secure jewelry closures: our heavy-duty lobster claw findings are constructed with high-end encased internal heat-treated steel or premium gold springs, offering reliable trigger return and maximum load-rating.',
    features: [
      'Enclosed premium tempered alloy leaf spring mechanism',
      'Pristine tactile response trigger button',
      'Slick solder-joint-free swivel loops for direct necklace integration',
      'High safety weight rating for heavy-gauge gold designs'
    ],
    technicalDetails: 'Micro-assembled latch links with tight spacing to prevent hair/fabric snagging. Certified completely salt-water and sweat resistant.',
    specs: {
      material: ['18K Yellow/Rose/White Gold', '14K Yellow/White Gold', '925 Sterling Silver'],
      dimensions: '8.0mm to 15.0mm Standard Lengths',
      weightRange: '0.38g - 1.48g per piece',
      moq: '200 Units',
      purityGrades: ['750 Gold', '585 Gold', '925 Silver'],
      finishing: 'Double Electrostatic Polishing to Mirror Satin'
    }
  }
];
