export const CONTACT = {
  brandName: 'Aranya Crest',
  reraNumber: 'RC/REP/HARERA/GGM/842/574/2025/19',
  locationShort: 'Golf Course Ext. Road, Sector 65, Gurugram',
  siteAddress: 'Sales Lounge, Sector 65, Golf Course Extension Road, Gurugram, Haryana 122102',
  phoneRaw: '+919820411290',
  phoneDisplay: '+91 98204 11290',
  whatsappNumber: '919820411290',
  salesHours: 'Open All 7 Days · 9:30 AM – 8:30 PM IST',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type PropertyCategory = '3 BHK' | '4 BHK' | 'Penthouse';
export type PropertyImageKey = 'living' | 'master' | 'hero' | 'courtyard' | 'pool';

export interface AvailableProperty {
  id: string;
  code: string;
  title: string;
  category: PropertyCategory;
  towerLocation: string;
  price: string;
  superArea: string;
  carpetArea: string;
  facing: string;
  possession: string;
  unitsLeft: string;
  paymentPlan: string;
  summary: string;
  imageKey: PropertyImageKey;
  whatsappMessage: string;
}

export const AVAILABLE_PROPERTIES: AvailableProperty[] = [
  {
    id: 'ac-3bhk-classic',
    code: 'Tower A · Floors 04–12',
    title: '3 BHK Classic Corner Residence',
    category: '3 BHK',
    towerLocation: 'Sector 65, Golf Course Ext. Rd',
    price: '₹3.45 Cr*',
    superArea: '2,480 sq. ft.',
    carpetArea: '1,695 sq. ft.',
    facing: 'Central Park Facing',
    possession: 'Dec 2027',
    unitsLeft: '14 Units Left',
    paymentPlan: '20 : 30 : 30 : 20',
    summary:
      'Three-side open layout with 285 sq. ft. wraparound balcony, travertine living floors, and private 2-unit lobby.',
    imageKey: 'living',
    whatsappMessage:
      'Hi Aranya Crest Desk, I am interested in the Available 3 BHK Classic Corner Residence (2,480 sq. ft. · ₹3.45 Cr*). Please share the floor plan PDF and exact cost sheet.',
  },
  {
    id: 'ac-3bhk-study',
    code: 'Tower B · Floors 06–15',
    title: '3 BHK + Executive Study Sky Suite',
    category: '3 BHK',
    towerLocation: 'Sector 65, Golf Course Ext. Rd',
    price: '₹4.10 Cr*',
    superArea: '2,940 sq. ft.',
    carpetArea: '2,020 sq. ft.',
    facing: 'East Sun Deck',
    possession: 'Dec 2027',
    unitsLeft: '11 Units Left',
    paymentPlan: '20 : 30 : 30 : 20',
    summary:
      'Includes a sound-insulated home office suite, walk-in primary wardrobe, and 340 sq. ft. landscaped sun deck.',
    imageKey: 'master',
    whatsappMessage:
      'Hi Aranya Crest Desk, please send the floor plan PDF and availability for the 3 BHK + Executive Study Sky Suite (2,940 sq. ft. · ₹4.10 Cr*).',
  },
  {
    id: 'ac-4bhk-sky-villa',
    code: 'Tower A · Floors 10–22',
    title: '4 BHK Park-Facing Sky Villa',
    category: '4 BHK',
    towerLocation: 'Sector 65, Golf Course Ext. Rd',
    price: '₹5.25 Cr*',
    superArea: '3,620 sq. ft.',
    carpetArea: '2,510 sq. ft.',
    facing: 'Aravalli & Courtyard View',
    possession: 'Dec 2027',
    unitsLeft: '9 Units Left',
    paymentPlan: '25 : 25 : 25 : 25',
    summary:
      'Direct private elevator foyer, dual master suites, separate family lounge, and a 36-foot wide entertaining deck.',
    imageKey: 'hero',
    whatsappMessage:
      'Hi Aranya Crest Desk, I want details and floor plans for the Available 4 BHK Park-Facing Sky Villa (3,620 sq. ft. · ₹5.25 Cr*).',
  },
  {
    id: 'ac-4bhk-garden-residence',
    code: 'Tower C · Floors 02–05',
    title: '4 BHK Garden Veranda Residence',
    category: '4 BHK',
    towerLocation: 'Sector 65, Golf Course Ext. Rd',
    price: '₹4.95 Cr*',
    superArea: '3,410 sq. ft.',
    carpetArea: '2,365 sq. ft.',
    facing: 'Water Pavilion & Lawn',
    possession: 'Dec 2027',
    unitsLeft: '5 Units Left',
    paymentPlan: '25 : 25 : 25 : 25',
    summary:
      'Low-rise treetop level home overlooking the 4-acre vehicle-free courtyard with extended private veranda.',
    imageKey: 'courtyard',
    whatsappMessage:
      'Hi Aranya Crest Desk, please share pricing and unit options for the 4 BHK Garden Veranda Residence (3,410 sq. ft. · ₹4.95 Cr*).',
  },
  {
    id: 'ac-crown-duplex',
    code: 'Tower A & B · Top Floors',
    title: '4 BHK Crown Duplex Penthouse',
    category: 'Penthouse',
    towerLocation: 'Sector 65, Golf Course Ext. Rd',
    price: '₹6.90 Cr*',
    superArea: '4,150 sq. ft.',
    carpetArea: '2,890 sq. ft.',
    facing: '270° Panoramic Skyline',
    possession: 'Dec 2027',
    unitsLeft: '4 Suites Only',
    paymentPlan: 'Custom Construction Linked',
    summary:
      'Double-height 22-foot living volume crowned by a 780 sq. ft. private landscaped terrace and 4 EV parking bays.',
    imageKey: 'pool',
    whatsappMessage:
      'Hi Aranya Crest Desk, please share private floor plans and schedule a viewing for the 4 BHK Crown Duplex Penthouse (4,150 sq. ft. · ₹6.90 Cr*).',
  },
];

export const HERO_METRICS = [
  { value: '₹3.45 Cr*', label: 'Direct Developer Starting Price' },
  { value: '2,480 – 4,150', label: 'Sq. Ft. Super Area Range' },
  { value: '75% Open', label: 'Vehicle-Free Central Greens' },
  { value: 'Dec 2027', label: 'RERA Committed Possession' },
] as const;

export interface InquiryTopic {
  id: string;
  label: string;
  snippet: string;
}

export const INQUIRY_TOPICS: InquiryTopic[] = [
  {
    id: 'brochure',
    label: 'Brochure & Floor Plans',
    snippet: 'the PDF brochure & floor plans',
  },
  {
    id: 'pricing',
    label: 'All-Inclusive Cost Sheet',
    snippet: 'the latest all-inclusive price sheet',
  },
  {
    id: 'visit',
    label: 'Book Private Site Visit',
    snippet: 'a private site visit slot this week',
  },
  {
    id: 'payment',
    label: '20:30:30:20 Payment Plan',
    snippet: 'the 20:30:30:20 payment plan & bank loan options',
  },
];
