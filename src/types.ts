export interface VehicleDetails {
  range: string;
  drive: string;
  chassis: string;
  interior: string;
}

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  category: 'hypercar' | 'gt-coupe' | 'suv';
  price: string;
  image: string;
  speed: string; // Top speed (e.g., 258 mph)
  acceleration: string; // 0-60 mph (e.g., 1.85s)
  power: string; // Horsepower (e.g., 1850 hp)
  battery: string; // Battery capacity (e.g., 120 kWh)
  description: string;
  details: VehicleDetails;
  colors: { name: string; hex: string }[];
  wheels: { name: string; price: number }[];
}

export type FilterCategory = 'all' | 'hypercar' | 'gt-coupe' | 'suv';
