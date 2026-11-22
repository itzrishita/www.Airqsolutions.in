import { IconicProject, EquipmentUnit, StrengthItem, ProtocolStep } from '../types';

export const BROCHURE_IMAGES = {
  heroFacility: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhOoMSSoJjS3lvG6N-1O-ilZVj5PR68R2PPXnzmsOtcg-2Av0NfuMrC79LfRHRuCxq7KsZzr_S6pcErHuHt4dXfC9FdXJYg6kUPMHOSSHlpdaOkZbMZAQg8BTtFekWHz9HPlHys43vVNHPX6jhrigEjOxaPoevMb-9813mdPaZrVHSyWlxL8jztxZTgE4-4Ziw88PgIdb0leO9hKpRdwa5dpTODfRBeK0gf5OMHtZgmK_atL4koh4",
  brochurePage1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-zdEzNfkuXfuUjQ0Kx8Ph2H46ROfYaJV02LKhjPM8jBV4zDn9bdZDv8kcxbOnfx4-rsMsUg9NKhugciT56W6Hlu3sALKk0ht-wyNT4gKT5k-exfxuM33Rw23FoTpWJ6npFQWWWbRp0d-O0eOfb67U3I7nS8xwhoNKXhkenld-COvlm9DPkdb59-JSfjcjS4Dh2YLTJK3Wov21TGxAr7P-qoCP4wtTQ0EdzEfYRQMivGrIx6bSXveqBAmwIpKAHPY",
  brochurePage2: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Hz62yBEidrgLxHKPeOS23ydGrM3kdU0Hj0yUG5dTRKTGfnyaaJ6ho8iS3o0yb9uh_5JeTgZNvO-OKBe48JRKuqrrkHwChSDiF13kUIk2U2JD7KOeOyRWy8tyzoFms5mp2R2hP9F8t2ZOLO_DZYAJv3BWrY6prHAoiB1JB8I1OFePjDcOibIPjtg3SjZQPiGWoPcSUd4pYqY1n0Fc-3MdebJMDa_QZrLRtYEEkKtQXQ7nm6UVwRCAnuG1G-nv8tjh",
};

export const COMPANY_INFO = {
  name: "AIR Q SOLUTIONS",
  subtitle: "HVAC Project Management Group",
  tagline: "Your Partner in Advanced HVAC Solutions",
  motto: "Cooling matters for living better.",
  headline: "Engineering Comfort. Delivering Performance.",
  experienceYears: "35+",
  experienceLabel: "Years of Collective Experience",
  directLine: "+91 8804907777",
  whatsappNumber: "+918804907777",
  eastPhone: "+91 9830079309",
  westPhone: "+91 8696911863",
  emails: ["amalroy.arc@gmail.com", "aqs.ac.br@gmail.com"],
  registeredOffice: {
    title: "Registered Office (East Region HQ)",
    address: "116, Shantinagar Road, Uttarpara 712232, West Bengal",
    coordinates: "22.6738° N, 88.3496° E",
    region: "East Region",
  },
  branchOffice: {
    title: "Dedicated Branch (West Region)",
    address: '"Biz Square", Shop no. 5, Gut no. 58, Satara- Beed Bypass, Chh. Sambhajinagar (MH)- 431001',
    coordinates: "19.8762° N, 75.3433° E",
    region: "West Region",
    description: "Serving clients in Maharashtra and neighbouring western industrial corridors.",
  },
  authorizedPartners: [
    { name: "Carrier", role: "Authorised Sales & Service Dealer", badge: "Commercial Range" },
    { name: "HITACHI", role: "Authorised Sales & Service Dealer", badge: "Set Free VRF Systems" },
    { name: "BOSCH Home Comfort India Limited", role: "Partnering With", badge: "Hydronics & Thermal Systems" },
  ]
};

export const STRENGTHS: StrengthItem[] = [
  {
    id: "team",
    title: "Experienced & Professional Team",
    description: "35+ years of collective experience in the HVAC industry across Sales, Service, Engineering Design & High-Stakes Project Execution.",
    iconName: "Users",
    metric: "35+ Years",
    imageUrl: "/assets/aistudio/experienced_and_professional_team_2d7eb045.jpeg",
    imageClass: "object-cover object-[center_55%]",
  },
  {
    id: "infrastructure",
    title: "Strong Technical Infrastructure",
    description: "Well-equipped infrastructure, certified engineers, factory-trained technicians, advanced diagnostic tools, and genuine OEM spares for rock-solid reliability.",
    iconName: "Wrench",
    metric: "100% Genuine Spares",
    imageUrl: "/assets/aistudio/strong_technical_infrastructure_64bf8fbd.jpeg",
    imageClass: "object-cover object-center",
  },
  {
    id: "solutions",
    title: "End-to-End Solutions",
    description: "From concept thermal mapping, psychrometric design, load calculations to installation, rigorous commissioning, and round-the-clock after-sales service.",
    iconName: "Layers",
    metric: "Turnkey HVAC",
    imageUrl: "/assets/aistudio/end_to_end_solutions_b28fdb68.jpeg",
    imageClass: "object-cover object-center",
  },
  {
    id: "customer",
    title: "Customer Centric Approach",
    description: "Engagement-based methodology ensuring on-time project handover, life-cycle cost effectiveness, and maximum energy efficiency for long-term satisfaction.",
    iconName: "Handshake",
    metric: "99.4% On-Time Delivery",
    imageUrl: "/assets/aistudio/customer_centric_approach_60d4beb6.jpeg",
    imageClass: "object-cover object-center",
  },
  {
    id: "pan-india",
    title: "PAN India Presence",
    description: "Proven track record across Government & Private Hospitals, Banks, Universities, Commercial Towers, Defense facilities, and Luxury Hospitality.",
    iconName: "Globe",
    metric: "Pan-India Reach",
    imageUrl: "/assets/aistudio/pan_india_presence_dd359917.jpeg",
    imageClass: "object-contain bg-[#091224] p-1.5",
  },
];

export const ICONIC_PROJECTS: IconicProject[] = [
  {
    id: 1,
    name: "Bangladesh Bhawan",
    location: "Shantiniketan, Bolpur",
    capacity: "300 HP",
    capacityValue: 300,
    capacityUnit: "HP",
    category: "Education & Culture",
    tag: "International Project",
    description: "Prestigious cultural center and museum dedicated to Indo-Bangladesh heritage at Visva-Bharati University, requiring precise museum-grade climate control.",
    highlights: ["Museum-grade humidity and thermal stabilization", "Multi-zone VRF installation", "Acoustically insulated ducting for auditorium"],
    systemType: "Advanced Variable Refrigerant Flow (VRF)",
    imageAlt: "Bangladesh Bhawan Shantiniketan Bolpur 300 HP",
    imageUrl: "/assets/aistudio/Bangladesh_bhavan_694badb1.jpeg",
  },
  {
    id: 2,
    name: "Open Air Theatre",
    location: "Kolkata",
    capacity: "576 HP",
    capacityValue: 576,
    capacityUnit: "HP",
    category: "Education & Culture",
    description: "Large capacity public performing arts venue engineered with high-volume airflow and zone-isolated cooling systems for heavy audience footfalls.",
    highlights: ["576 HP central cooling matrix", "Low ambient acoustic dampeners", "High static pressure ducted units"],
    systemType: "Ducted VRF & Package Units",
    imageAlt: "Open Air Theatre Kolkata 576 HP",
    imageUrl: "/assets/aistudio/Open_air_theatre__Kolkata_a13a0ff4.jpeg",
  },
  {
    id: 3,
    name: "Nilanchal Griha Nirman",
    location: "Kolkata",
    capacity: "320 HP",
    capacityValue: 320,
    capacityUnit: "HP",
    category: "Commercial & Hospitality",
    description: "Premium residential and commercial tower complex requiring individualized zone thermal management and high-efficiency inverter technology.",
    highlights: ["Individual metering integration", "Aesthetic ceiling suspended and cassette units", "Energy saving inverter outdoor modules"],
    systemType: "Inverter VRF Systems",
    imageAlt: "Nilanchal Griha Nirman Kolkata 320 HP",
  },
  {
    id: 4,
    name: "Baruipur Studio",
    location: "Kolkata",
    capacity: "600 HP",
    capacityValue: 600,
    capacityUnit: "HP",
    category: "Commercial & Hospitality",
    description: "Ultra-low-noise broadcasting and television studio HVAC layout designed with strict acoustic criteria (NC-25) to eliminate mic interference.",
    highlights: ["Acoustic baffle silencers", "Precision airflow velocity control", "Dual redundant VRF circuits"],
    systemType: "Acoustically Isolated VRF & Ductable Systems",
    imageAlt: "Baruipur Studio Kolkata 600 HP",
  },
  {
    id: 5,
    name: "MAKAUT University",
    location: "Kolkata",
    capacity: "1000 HP",
    capacityValue: 1000,
    capacityUnit: "HP",
    category: "Education & Culture",
    tag: "Mega Campus Project",
    description: "Massive technical campus HVAC installation spanning multiple academic blocks, high-density server rooms, labs, and administrative auditoriums.",
    highlights: ["1000 HP total cooling load", "Centralized BMS building automation interface", "Staged cooling for lecture halls"],
    systemType: "Modular VRF Network & Centralized Automation",
    imageAlt: "MAKAUT University Kolkata 1000 HP",
    imageUrl: "/assets/aistudio/MAKAUT_university_ab036647.jpeg",
  },
  {
    id: 6,
    name: "Nabadiganta KMDA Project",
    location: "Kolkata (KMDA)",
    capacity: "500 HP",
    capacityValue: 500,
    capacityUnit: "HP",
    category: "Infrastructure & Transit",
    description: "Key urban development municipal building managed by Kolkata Metropolitan Development Authority with stringent energy-efficiency requirements.",
    highlights: ["Green building certified compliance", "500 HP multi-modular VRF layout", "Optimized fresh air intake systems"],
    systemType: "Commercial VRF & Fresh Air Treated Units",
    imageAlt: "Nabadiganta KMDA Project 500 HP",
    imageUrl: "/assets/aistudio/Nabadiganta_KMDA_project_d6df1a1e.jpeg",
  },
  {
    id: 7,
    name: "Medical College",
    location: "Kolkata",
    capacity: "200 HP",
    capacityValue: 200,
    capacityUnit: "HP",
    category: "Healthcare",
    description: "Specialized clinical and instructional healthcare facility requiring positive pressure zones, HEPA air filtration, and infection control air balancing.",
    highlights: ["HEPA stage air purification", "Isolated pressure cascades for clean zones", "100% duty-standby redundancy in critical wards"],
    systemType: "Cleanroom VRF & Specialized Hospital HVAC",
    imageAlt: "Medical College Kolkata 200 HP",
    imageUrl: "/assets/aistudio/Medical_college_597b04e2.jpeg",
  },
  {
    id: 8,
    name: "Science City",
    location: "Kolkata",
    capacity: "130 HP",
    capacityValue: 130,
    capacityUnit: "HP",
    category: "Education & Culture",
    description: "Interactive science pavilion and museum galleries requiring robust high-filtration cooling systems to safeguard exhibits and high visitor volumes.",
    highlights: ["High filtration efficiency", "Continuous duty cycle operation", "Micro-climate zoning for sensitive exhibits"],
    systemType: "Package & Ducted Cooling Network",
    imageAlt: "Science City Kolkata 130 HP",
    imageUrl: "/assets/aistudio/Science_city_e9734fbf.jpeg",
  },
  {
    id: 9,
    name: "ESI Hospital",
    location: "Kolkata",
    capacity: "90 HP / TR",
    capacityValue: 90,
    capacityUnit: "TR",
    category: "Healthcare",
    description: "Government hospital development engineered for 24/7 operating theatres, diagnostic imaging suites, and intensive care isolation units.",
    highlights: ["Laminar airflow integration", "Strict temperature and humidity tolerances", "Medical grade anti-microbial coils"],
    systemType: "Precision Hospital HVAC & Cleanroom Airflow",
    imageAlt: "ESI Hospital Kolkata 90 HP/TR",
    imageUrl: "/assets/aistudio/ESIC_hospital__Joka_f3f5a099.jpeg",
  },
  {
    id: 10,
    name: "Metro Rail",
    location: "Kolkata",
    capacity: "588 HP",
    capacityValue: 588,
    capacityUnit: "HP",
    category: "Infrastructure & Transit",
    tag: "High Reliability Transit",
    description: "Subterranean station premises, control rooms, and passenger transit concourses built to handle continuous thermal influx and stringent fire-damper protocols.",
    highlights: ["588 HP high-reliability installation", "Fire damper & smoke evacuation interlocks", "Heavy duty industrial grade blowers"],
    systemType: "Heavy-Duty Ducted VRF & Industrial Ventilation",
    imageAlt: "Metro Rail Kolkata 588 HP",
    imageUrl: "/assets/aistudio/Metro_railway_station_6b9ebea9.jpeg",
  },
  {
    id: 11,
    name: "Park Hotel",
    location: "Bangalore",
    capacity: "Chiller Project",
    capacityValue: 350,
    capacityUnit: "Chiller",
    category: "Commercial & Hospitality",
    description: "Luxury 5-star boutique hotel chiller retrofit and hydronic air management ensuring whisper-quiet guest room acoustic standards and banquet cooling.",
    highlights: ["High-efficiency water/air cooled chiller system", "Low-noise fan coil units (FCUs)", "Smart guest room energy management link"],
    systemType: "Central Chiller Hydronic System & FCUs",
    imageAlt: "Park Hotel Bangalore Chiller Project",
    imageUrl: "/assets/aistudio/Hotel_Park__Bangalore_f4558fb4.jpeg",
  },
  {
    id: 12,
    name: "MES",
    location: "Sikkim",
    capacity: "Defense Spec",
    capacityValue: 250,
    capacityUnit: "Custom",
    category: "Government & Landmark",
    tag: "High Altitude Defense",
    description: "Military Engineer Services high-altitude facility requiring cold-climate heat pump operations, defrost cycles, and extreme weather resilience.",
    highlights: ["Low ambient heating down to -15°C", "Anti-frost inverter compressors", "Ruggedized outdoor unit enclosures"],
    systemType: "Cold-Climate VRF Heat Recovery & Ventilation",
    imageAlt: "MES Sikkim Defense Installation",
  },
  {
    id: 13,
    name: "NBCC",
    location: "Bhubaneswar",
    capacity: "Institutional Scale",
    capacityValue: 400,
    capacityUnit: "Custom",
    category: "Government & Landmark",
    description: "National Buildings Construction Corporation institutional complex featuring multi-floor administrative zones, training facilities, and conferences.",
    highlights: ["Multi-story refrigerant piping design", "Centralized energy monitoring", "High SEER energy efficiency ratings"],
    systemType: "Commercial Multi-Split & VRF Systems",
    imageAlt: "NBCC Bhubaneswar Institutional Project",
    imageUrl: "/assets/aistudio/NBCC_Bhubaneshwar_908b8344.jpeg",
  },
  {
    id: 14,
    name: "Solar Dome",
    location: "New Town, Kolkata",
    capacity: "450 HP",
    capacityValue: 450,
    capacityUnit: "HP",
    category: "Government & Landmark",
    tag: "Iconic Architectural Landmark",
    description: "India's landmark spherical geodesic solar dome structure featuring intricate curved airflow dynamics, solar thermal synergy, and high glass envelope loads.",
    highlights: ["450 HP custom airflow distribution", "Specialized stratification cooling for spherical envelope", "Solar-powered thermal load mitigation"],
    systemType: "Custom High-Volume VRF & Precision Jet Nozzle Distribution",
    imageAlt: "Solar Dome New Town Kolkata 450 HP",
    imageUrl: "/assets/aistudio/Solar_dome_3edd14fe.jpeg",
  }
];

export const EQUIPMENT_CATALOG: EquipmentUnit[] = [
  {
    id: "cassette-4way",
    name: "4-Way Compact Cassette",
    type: "Indoor",
    subtitle: "360° Uniform Air Distribution",
    description: "Engineered to fit standard 600x600mm ceiling grids seamlessly. Features independent vane control for individualized comfort and zero draft spots.",
    features: [
      "Compact design fitting standard architectural ceiling tiles",
      "Built-in high-lift condensate drain pump (up to 850mm)",
      "Multi-angle 3D airflow flaps for draft-free comfort",
      "Motion sensor compatible for auto-power saving"
    ],
    specs: {
      capacityRange: "1.5 HP - 4.0 HP (4.0 kW - 11.2 kW)",
      noiseLevel: "28 - 36 dB(A) whisper quiet",
      airflow: "450 - 900 CFM",
      refrigerant: "Eco-Friendly R410A / R32"
    },
    suitableFor: ["Offices", "Hospitality Suites", "Retail Boutiques", "Boardrooms"],
    badge: "Most Popular Indoor"
  },
  {
    id: "slim-ducted",
    name: "Ducted Type (Slim)",
    type: "Indoor",
    subtitle: "Concealed Architectural Integration",
    description: "Ultra-thin chassis (under 200mm height) designed for shallow ceiling voids in luxury residential, hotel guest rooms, and executive office suites.",
    features: [
      "Ultra-low profile chassis for tight false ceilings",
      "Adjustable external static pressure (up to 50 Pa)",
      "Bottom or rear return air suction configurability",
      "Washable long-life anti-mold filter included"
    ],
    specs: {
      capacityRange: "0.8 HP - 3.2 HP (2.2 kW - 9.0 kW)",
      noiseLevel: "24 - 32 dB(A) ultra-quiet",
      airflow: "320 - 750 CFM",
      refrigerant: "R410A / R32 Compatible"
    },
    suitableFor: ["Hotel Guest Rooms", "Luxury Residences", "Private Clinics", "Sound Studios"],
    badge: "Low Profile"
  },
  {
    id: "wall-mounted",
    name: "Wall Mounted Unit",
    type: "Indoor",
    subtitle: "Modern Minimalist Profile",
    description: "Sleek, high-efficiency wall units equipped with smart motorized louvers, multi-stage filtration, and direct wireless/wired remote integration.",
    features: [
      "Sleek architectural contour with matte finish",
      "Dual horizontal and vertical auto-swing vanes",
      "Active carbon and anti-bacterial air filtration",
      "Instant turbo cooling and night quiet modes"
    ],
    specs: {
      capacityRange: "1.0 HP - 3.0 HP (2.8 kW - 8.0 kW)",
      noiseLevel: "26 - 38 dB(A)",
      airflow: "380 - 820 CFM",
      refrigerant: "R410A"
    },
    suitableFor: ["Classrooms", "Private Cabins", "Clinics", "Small Retail"],
    badge: "Easy Installation"
  },
  {
    id: "ceiling-suspended",
    name: "Ceiling Suspended Type",
    type: "Indoor",
    subtitle: "Exposed Ceiling High Throw",
    description: "Perfect for spaces without false ceilings or industrial-aesthetic open layouts. Delivers wide-angle long-distance air throw with high static capability.",
    features: [
      "No false ceiling required; hangs directly from slab",
      "Long distance airflow throw up to 12 meters",
      "Automatic wide horizontal sweep angle",
      "Durable metal casing with thermal insulation"
    ],
    specs: {
      capacityRange: "2.5 HP - 6.0 HP (7.1 kW - 16.0 kW)",
      noiseLevel: "34 - 44 dB(A)",
      airflow: "800 - 1500 CFM",
      refrigerant: "R410A"
    },
    suitableFor: ["Open-Ceiling Offices", "Restaurants", "Showrooms", "Workshops"],
    badge: "High Throw"
  },
  {
    id: "floor-standing",
    name: "Floor Standing Unit",
    type: "Indoor",
    subtitle: "Perimeter High Capacity Cooling",
    description: "Robust floor-mounted units designed for high-density public lobbies, religious spaces, server perimeters, and exhibition halls.",
    features: [
      "Slim footprint occupying minimal floor space",
      "Direct touchscreen digital display on front fascia",
      "High airflow velocity for instant temperature pull-down",
      "Reinforced chassis for high traffic public environments"
    ],
    specs: {
      capacityRange: "3.0 HP - 10.0 HP (8.0 kW - 28.0 kW)",
      noiseLevel: "38 - 48 dB(A)",
      airflow: "1100 - 2400 CFM",
      refrigerant: "R410A"
    },
    suitableFor: ["Hotel Lobbies", "Auditorium Foyers", "Mosques/Temples", "Server Hubs"],
    badge: "High Density"
  },
  {
    id: "vrf-outdoor-setfree",
    name: "Hitachi Set Free / Carrier VRF Outdoor",
    type: "Outdoor",
    subtitle: "Next-Gen Modular Inverter Matrix",
    description: "High-efficiency top-discharge VRF outdoor units featuring DC inverter scroll compressors, smart sub-cooling circuits, and piping lengths up to 1,000 meters.",
    features: [
      "Modular combination up to 96 HP per single refrigerant circuit",
      "Industry leading IPLV / SEER energy efficiency ratios",
      "Extended operating range: -20°C heating to +52°C cooling",
      "Anti-corrosion Blue Fin / Gold Fin heat exchanger protection"
    ],
    specs: {
      capacityRange: "8 HP - 96 HP modular combination",
      noiseLevel: "54 - 64 dB(A) with night quiet mode",
      airflow: "High static up to 80 Pa for ducting",
      refrigerant: "Zero ODP R410A / R32"
    },
    suitableFor: ["Commercial Buildings", "Hospitals", "Campuses", "Industrial Complexes"],
    badge: "Flagship Outdoor"
  }
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    stepNumber: "01",
    title: "Site Thermal Mapping & Assessment",
    subtitle: "Precision Load Calculations",
    description: "Our engineers conduct comprehensive on-site inspections, computational solar radiation heat load evaluations, and building envelope thermal modeling.",
    deliverables: ["Psychrometric load computation sheet", "Peak heat gain breakdown (solar, occupancy, equipment)", "Zoning & diversity factor allocation"]
  },
  {
    stepNumber: "02",
    title: "System Architecture & Duct Engineering",
    subtitle: "Blueprint & Equipment Sizing",
    description: "We engineer custom ductwork sizing (equal friction / static regain), refrigerant piping schematics, electrical feeder load requirements, and fresh air balancing.",
    deliverables: ["AutoCAD 2D/3D HVAC layout diagrams", "Refrigerant pipe length & lift verification", "Acoustic attenuation & vibration isolation plan"]
  },
  {
    stepNumber: "03",
    title: "Execution & Site Management",
    subtitle: "Professional Execution & Installation",
    description: "Methodical execution headed by dedicated Project Managers with a clear focus to eliminate on-site bottlenecks, enforce nitrogen brazing, and follow safety protocols.",
    deliverables: ["Nitrogen purge pressure holding test (600 PSI for 24h)", "Factory-trained technician supervision", "Daily execution progress milestone reports"]
  },
  {
    stepNumber: "04",
    title: "Commissioning, Balancing & After-Sales",
    subtitle: "Performance Testing & Handover",
    description: "Rigorous testing, adjusting, and balancing (TAB) of air and refrigerant flow, BMS automation link check, client team training, and lifetime spare warranty support.",
    deliverables: ["Comprehensive Airflow (CFM) balancing certificate", "Digital commissioning performance logs", "24/7 dedicated after-sales service SLA"]
  }
];
