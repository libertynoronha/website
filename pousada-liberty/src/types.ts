export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  pricePerNight: number;
  capacity: number;
  beds: string;
  size: string;
  view: string;
  amenities: string[];
  imageUrl: string;
  images?: string[];
  tag?: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingSimulation {
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedRoomId?: string;
}
