export type PageSection =
  | 'hero'
  | 'about'
  | 'expertise'
  | 'equipment'
  | 'projects'
  | 'expansion'
  | 'protocol'
  | 'estimator'
  | 'social-responsibility'
  | 'contact';

export type ProjectCategory = 'All' | 'Education & Culture' | 'Healthcare' | 'Commercial & Hospitality' | 'Infrastructure & Transit' | 'Government & Landmark';

export interface IconicProject {
  id: number;
  name: string;
  location: string;
  capacity: string;
  capacityValue?: number;
  capacityUnit: 'HP' | 'TR' | 'Chiller' | 'Custom';
  category: ProjectCategory;
  tag?: string;
  description: string;
  highlights: string[];
  systemType: string;
  imageAlt: string;
  imageUrl?: string;
}

export interface EquipmentUnit {
  id: string;
  name: string;
  type: 'Indoor' | 'Outdoor' | 'Commercial';
  subtitle: string;
  description: string;
  features: string[];
  specs: {
    capacityRange: string;
    noiseLevel: string;
    airflow: string;
    refrigerant: string;
  };
  suitableFor: string[];
  badge: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
  imageUrl?: string;
  imageClass?: string;
}

export interface ProtocolStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ContactInquiry {
  name: string;
  organization: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  estimatedAreaSqFt?: number;
  message: string;
  region: 'East' | 'West' | 'Other';
}
