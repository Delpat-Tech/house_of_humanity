// UI Component Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  icon: string;
  count: string;
  title: string;
}

export interface TrapeziumButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'sitaare';
}

export interface ImageSliderProps {
  images: Array<{
    src: string;
    alt?: string;
  }>;
}

export interface ImagePlaceholderProps {
  text: string;
  width?: string;
  height?: string;
  className?: string;
}

export interface StatsCardProps {
  count: string;
  label: string;
  className?: string;
}

export interface ImpactCardProps {
  iconName: string;
  count: string;
  title: string;
}

export interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}

export interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  type?: string;
  status?: string;
  attendees?: string;
  isUpcoming?: boolean;
  onRegister?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

export interface MediaCardProps {
  title: string;
  publication?: string;
  platform?: string;
  date: string;
  excerpt?: string;
  type?: string;
  views?: string;
  image: string;
  isDigital?: boolean;
  onReadMore?: () => void;
  onViewContent?: () => void;
  className?: string;
}

// Data Types
export interface Project {
  title: string;
  image: string;
  onClick?: () => void;
  content: {
    vision: string;
    mission: string;
    whatWeDo: string[];
    impact: string;
    getInvolved: string[];
  };
}

export interface ImpactItem {
  icon: string;
  project: string;
  number: string;
  impact: string;
}

export interface Volunteer {
  id?: string;
  name: string;
  role?: string;
  img: string;
  intro: string;
  bio?: string;
  email?: string;
  phone?: string;
}

export interface DonationItem {
  id?: string;
  title: string;
  desc: string;
  img: string;
  amount?: number;
  image?: string;
  category?: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  [key: string]: string | undefined;
}

// Server Types (for backend compatibility)
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface Donation {
  id: string;
  amount: number;
  currency: string;
  donorName: string;
  donorEmail: string;
  cause?: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
} 