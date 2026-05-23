import { Vehicle } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'apex',
    name: 'VELOCITY APEX',
    tagline: 'The Ultimate Pinnacle of Electric Speed',
    category: 'hypercar',
    price: '$2,450,000',
    image: '/images/inventory_hypercar_1779548539686.png',
    speed: '258 MPH',
    acceleration: '1.85s',
    power: '1,920 HP',
    battery: '120 kWh',
    description: 'Designed purely for extreme track and street aerodynamics. Features active rear vector wings and advanced quad-motor torque distribution.',
    details: {
      range: '420 Miles (EPA)',
      drive: 'AWD Independent Quad-Motor',
      chassis: 'Full Carbon Fiber Monocoque',
      interior: 'Alcantara Racing Shell seats with magnesium structural frames'
    },
    colors: [
      { name: 'Ceramic Orange', hex: '#ea580c' },
      { name: 'Satin Stealth Black', hex: '#18181b' },
      { name: 'Liquid Platinum', hex: '#94a3b8' },
      { name: 'Acid Green Accent', hex: '#84cc16' }
    ],
    wheels: [
      { name: '21" Ultralight Monoblock Carbon Forge', price: 0 },
      { name: '21"/22" Aero-Vortex Multispoke Titanium', price: 25000 },
      { name: '21" Track-Spec Centerlock Alloys', price: 18000 }
    ]
  },
  {
    id: 'xeon',
    name: 'VELOCITY XEON',
    tagline: 'Grand Touring Redefined for the Future',
    category: 'gt-coupe',
    price: '$380,000',
    image: '/images/inventory_coupe_1779548516966.png',
    speed: '215 MPH',
    acceleration: '2.4s',
    power: '1,020 HP',
    battery: '100 kWh',
    description: 'A harmonious blending of executive grand touring comfort and blistering track performance. Designed with clean architectural lines.',
    details: {
      range: '480 Miles (EPA)',
      drive: 'AWD Dual-Motor Vectoring',
      chassis: 'Aluminum-Spaceframe with Carbon Elements',
      interior: 'Hand-stitched Tuscan Full-Grain aniline leather, acoustic privacy glass'
    },
    colors: [
      { name: 'Bespoke Silver Coupe', hex: '#cbd5e1' },
      { name: 'Deep Amethyst Quartz', hex: '#3b0764' },
      { name: 'Liquid Gold Bronze', hex: '#854d0e' },
      { name: 'Graphene Grey Matte', hex: '#334155' }
    ],
    wheels: [
      { name: '20" Jetstream Aerodynamic Alloys', price: 0 },
      { name: '21" Forged Dagger Carbon Edition', price: 12000 },
      { name: '21" Diamond-Cut Executive Spokes', price: 9500 }
    ]
  },
  {
    id: 'crux',
    name: 'VELOCITY CRUX',
    tagline: 'World-Leading Utility and Dominant Performance',
    category: 'suv',
    price: '$295,000',
    image: '/images/inventory_suv_1779548562735.png',
    speed: '190 MPH',
    acceleration: '2.9s',
    power: '850 HP',
    battery: '115 kWh',
    description: 'The world\'s most luxurious high-performance utility electric vehicle. Massive seating luxury with high clearance track architecture.',
    details: {
      range: '390 Miles (EPA)',
      drive: 'AWD Tri-Motor Active Torque',
      chassis: 'Adaptive Pneumatic Active Rigid Steel/Carbon Hybrid',
      interior: 'Panoramic glass sky-lounge, active posture premium massage seats'
    },
    colors: [
      { name: 'Matte Charcoal Carbon', hex: '#27272a' },
      { name: 'Emerald Forest Pearl', hex: '#064e3b' },
      { name: 'Brilliant Obsidian Blue', hex: '#1e3a8a' },
      { name: 'Desert Sand Pearl Metallic', hex: '#7c2d12' }
    ],
    wheels: [
      { name: '22" Stealth Aero SUV Multi', price: 0 },
      { name: '23" Forge-Block Performance Black', price: 15000 },
      { name: '22" Turbine Premium Offroad Alloy', price: 8000 }
    ]
  },
  {
    id: 'vortex-gold',
    name: 'VELOCITY VORTEX GOLD',
    tagline: 'Gilded Kinetic Sensation',
    category: 'hypercar',
    price: '$2,850,000',
    image: '/images/inventory_hypercar_gold_1779549257405.png',
    speed: '265 MPH',
    acceleration: '1.79s',
    power: '2,010 HP',
    battery: '130 kWh',
    description: 'A bespoke gilded hypercar combining extreme thermal protection, multi-layer active vector splitters, and real gold exterior circuit accents.',
    details: {
      range: '410 Miles (EPA)',
      drive: 'AWD Quad-Motor Matrix Vectoring',
      chassis: 'Hand-Laid Carbon Monocoque with Gold Matrix mesh',
      interior: 'Gold-weave carbon shell seats with customized thermal micro-perforated leather'
    },
    colors: [
      { name: 'Liquid Aurum Gold', hex: '#ca8a04' },
      { name: 'White-Gold Satin Gloss', hex: '#fef08a' },
      { name: 'Matte Obsidian Carbon', hex: '#1e293b' }
    ],
    wheels: [
      { name: '22" Aurum Luxury Turbines', price: 0 },
      { name: '21"/22" Extreme Centerlock Forgeline', price: 32000 }
    ]
  },
  {
    id: 'aura-emerald',
    name: 'VELOCITY AURA EMERALD',
    tagline: 'Prestigious Continental Grand Tourer',
    category: 'gt-coupe',
    price: '$410,000',
    image: '/images/inventory_coupe_emerald_1779549278316.png',
    speed: '220 MPH',
    acceleration: '2.25s',
    power: '1,100 HP',
    battery: '105 kWh',
    description: 'Immersive grand-touring coupe with luxurious British Racing Green shades, dual-frequency acoustic glass, and full-cockpit organic LED screens.',
    details: {
      range: '460 Miles (EPA)',
      drive: 'AWD Dual-Motor Performance Torque',
      chassis: 'Aluminum-Titanium Core Spaceframe',
      interior: 'Hunter Green Tuscan full-grain aniline hide, sustainable walnut accents'
    },
    colors: [
      { name: 'Bespoke British Emerald', hex: '#064e3b' },
      { name: 'Glacier Silver Metallic', hex: '#cbd5e1' },
      { name: 'Deep Amethyst', hex: '#581c87' }
    ],
    wheels: [
      { name: '21" Sovereign Multi-spoke Chrome', price: 0 },
      { name: '22" Carbon Aero Concave Blades', price: 14500 }
    ]
  },
  {
    id: 'mercury-chrome',
    name: 'VELOCITY MERCURY CHROME',
    tagline: 'The Pinnacle Quantum Speed Demon',
    category: 'hypercar',
    price: '$3,100,000',
    image: '/images/inventory_hypercar_chrome_1779549303526.png',
    speed: '272 MPH',
    acceleration: '1.68s',
    power: '2,150 HP',
    battery: '140 kWh',
    description: 'The world\'s most technologically advanced hypercar featuring fully liquid-mercury chrome exterior paint and electromagnetic micro-dampers.',
    details: {
      range: '450 Miles (EPA)',
      drive: 'AWD Zero-Lag Quad-Motor Vector',
      chassis: 'Magnesium-Lithium Honeycomb Monocoque',
      interior: 'Ultralight weight racing Kevlar buckets, quantum head-up display'
    },
    colors: [
      { name: 'Liquid Chrome Mirror', hex: '#e2e8f0' },
      { name: 'Bespoke Ice Platinum', hex: '#f1f5f9' },
      { name: 'Stealth Black Matte', hex: '#020617' }
    ],
    wheels: [
      { name: '21" Full-Carbon Blade Centerlocks', price: 0 },
      { name: '22" Electrodynamic Magnetic Turbines', price: 42000 }
    ]
  },
  {
    id: 'valo-red',
    name: 'VELOCITY VALO RED',
    tagline: 'High-Impact Aerodynamic Elegance',
    category: 'gt-coupe',
    price: '$325,000',
    image: '/images/inventory_coupe_red_1779549325654.png',
    speed: '205 MPH',
    acceleration: '2.6s',
    power: '920 HP',
    battery: '95 kWh',
    description: 'Beautifully sculpted with carbon front-splitters, a vibrant matte-red surface finish, and active computational vector steering.',
    details: {
      range: '440 Miles (EPA)',
      drive: 'AWD Dual-Motor Active-Split',
      chassis: 'Hybridized Carbon-Fiber and Superplastic Aluminum',
      interior: 'Perforated black Alcantara with contrasting crimson matrix stitching'
    },
    colors: [
      { name: 'High-Impact Matte Red', hex: '#dc2626' },
      { name: 'Carbon Black Satin', hex: '#1e293b' },
      { name: 'Liquid Titanium Gray', hex: '#64748b' }
    ],
    wheels: [
      { name: '20" Satin Black Aggressor Alloys', price: 0 },
      { name: '21" Crimson Lip Bespoke Forged Wheels', price: 11000 }
    ]
  },
  {
    id: 'cruiser-blue',
    name: 'VELOCITY CRUISER BLUE',
    tagline: 'Immersive All-Terrain Grand Cruiser',
    category: 'suv',
    price: '$340,500',
    image: '/images/inventory_suv_blue_1779549351856.png',
    speed: '195 MPH',
    acceleration: '2.75s',
    power: '950 HP',
    battery: '120 kWh',
    description: 'Fully capable of high-speed deep offroad trekking and smooth continental cruising. Built with active liquid-air adjustable lift systems.',
    details: {
      range: '410 Miles (EPA)',
      drive: 'AWD Tri-Motor Dual Adaptive',
      chassis: 'High-Strength Steel Hydroformed Spacebox',
      interior: 'Saddle Tan luxury performance pilot seats with ventilation'
    },
    colors: [
      { name: 'Deep Midnight Sapphire', hex: '#1e3a8a' },
      { name: 'Mineral Sand Pearl', hex: '#f59e0b' },
      { name: 'Stealth Matter Grey', hex: '#4b5563' }
    ],
    wheels: [
      { name: '22" Offroad Terrain Alloys', price: 0 },
      { name: '23" Executive Multi-Spoke Gloss Wheels', price: 16500 }
    ]
  },
  {
    id: 'mach-yellow',
    name: 'VELOCITY MACH YELLOW',
    tagline: 'Track-Focused Raw Precision Weapon',
    category: 'hypercar',
    price: '$2,690,000',
    image: '/images/inventory_hypercar_yellow_1779549374694.png',
    speed: '260 MPH',
    acceleration: '1.80s',
    power: '1,980 HP',
    battery: '125 kWh',
    description: 'Extremely aggressive track supercar with deep-vented yellow carbon bodypanels, integrated drag-reduction (DRS) wings, and titanium cooling ductworks.',
    details: {
      range: '400 Miles (EPA)',
      drive: 'AWD Independent Quad-Motor Dynamic',
      chassis: 'Full Monocoque with Kevlar impact protection',
      interior: 'Sparse racing carbon cockpit, full telemetry acquisition controls'
    },
    colors: [
      { name: 'Solaris Yellow Matte', hex: '#eab308' },
      { name: 'Graphene Grey Matte', hex: '#374151' },
      { name: 'Pure White Gloss', hex: '#ffffff' }
    ],
    wheels: [
      { name: '21" Ultralight Centerlocks in Satin Black', price: 0 },
      { name: '21"/22" Michelin Pilot Aero Track Compound', price: 29000 }
    ]
  },
  {
    id: 'sovereign-lux',
    name: 'VELOCITY SOVEREIGN LUX',
    tagline: 'The Ultimate Pinnacle Elite Sedan',
    category: 'gt-coupe',
    price: '$450,000',
    image: '/images/inventory_sedan_champagne_1779549394429.png',
    speed: '186 MPH',
    acceleration: '3.1s',
    power: '820 HP',
    battery: '110 kWh',
    description: 'Designed for absolute luxury VIP chauffeuring and executive self-driving performance. Beautifully tailored with premium glass-ceiling panels.',
    details: {
      range: '510 Miles (EPA)',
      drive: 'AWD Dual-Motor High Comfort',
      chassis: 'Multi-Metal Premium Comfort Spaceframe',
      interior: 'Cashmere-wool upholstery with active massage system and built-in humidor'
    },
    colors: [
      { name: 'Satin Luxury Champagne', hex: '#fef08a' },
      { name: 'Royal Imperial Navy Blue', hex: '#1e1b4b' },
      { name: 'Bespoke Satin Silver', hex: '#cbd5e1' }
    ],
    wheels: [
      { name: '21" Elegant Luxury Monoblock Spokes', price: 0 },
      { name: '22" Diamond-Polished Chrome VIP Alloys', price: 15400 }
    ]
  }
];
