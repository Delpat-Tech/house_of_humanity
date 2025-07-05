// ============================================================================
// CORE APPLICATION TYPES
// ============================================================================

// Navigation and Routing
export interface NavigationProps {
  className?: string;
}

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  title?: string;
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

// Button Components
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export interface TrapeziumButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'sitaare';
  disabled?: boolean;
}

// Card Components
export interface CardProps {
  icon: string;
  count: string | number;
  title: string;
  className?: string;
}

export interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export interface ImpactCardProps {
  iconName: string;
  count: string | number;
  title: string;
  className?: string;
}

export interface StatsCardProps {
  count: string | number;
  label: string;
  className?: string;
  icon?: React.ReactNode;
}

// Image Components
export interface ImageSliderProps {
  images: Image[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  arrows?: boolean;
  className?: string;
}

export interface Image {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ImagePlaceholderProps {
  text: string;
  width?: string;
  height?: string;
  className?: string;
  backgroundColor?: string;
}

// Media Components
export interface MediaWithTextProps {
  image: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

// ============================================================================
// DATA STRUCTURE TYPES
// ============================================================================

// Project Data
export interface ProjectContent {
  vision: string;
  mission: string;
  whatWeDo: string[] | string;
  impact: string;
  getInvolved: string[] | string;
}

export interface Project {
  title: string;
  image: string;
  content: ProjectContent;
  category?: string;
  status?: 'active' | 'completed' | 'upcoming';
}

// Impact Data
export interface ImpactItem {
  icon: string;
  project: string;
  number: string;
  impact: string;
  category?: string;
}

// Team Data
export interface Volunteer {
  name: string;
  img: string;
  intro: string;
  role?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Donation Data
export interface DonationItem {
  title: string;
  desc: string;
  img: string;
  amount?: string;
  category?: string;
}

export interface DonationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amount: number;
  cause: string;
  message?: string;
  anonymous?: boolean;
}

// Gallery Data
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category: string;
  date?: string;
}

// Event Data
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
  registrationRequired?: boolean;
  maxParticipants?: number;
}

// ============================================================================
// FORM AND VALIDATION TYPES
// ============================================================================

export interface FormErrors {
  [key: string]: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
  preferences?: string[];
}

// ============================================================================
// API AND BACKEND TYPES
// ============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// User and Authentication
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'volunteer' | 'donor' | 'guest';
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
}

// ============================================================================
// ANIMATION AND MOTION TYPES
// ============================================================================

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
}

export interface ScrollAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type IconType = React.ComponentType<{
  size?: number;
  className?: string;
  color?: string;
}>;

export type StatusType = 'success' | 'error' | 'warning' | 'info';

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ColorType = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info';

// ============================================================================
// THEME AND STYLING TYPES
// ============================================================================

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: string;
}

export interface BreakpointConfig {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    donations: boolean;
    volunteerRegistration: boolean;
    newsletter: boolean;
    gallery: boolean;
  };
}

// ============================================================================
// ERROR AND LOGGING TYPES
// ============================================================================

export interface AppError {
  id: string;
  message: string;
  code?: string;
  stack?: string;
  timestamp: string;
  userAgent?: string;
  userId?: string;
}

export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  context?: Record<string, any>;
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

export type {
  // Re-export commonly used types
  ButtonProps,
  CardProps,
  WorkCardProps,
  Project,
  Volunteer,
  User,
  ApiResponse,
  ThemeColors,
  AppConfig,
}; 