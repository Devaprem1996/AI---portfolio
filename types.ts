import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  subServices: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: LucideIcon;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: string; // Added for the subtitle (e.g. "MOBILE APP DESIGN")
  issuer: string;
  date: string;
  imageUrl: string; // Added for the main visual
}