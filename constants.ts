import { NavItem, ServiceItem, ProjectItem, CertificateItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    number: '01',
    title: 'WORKFLOW AUTOMATION',
    description: 'Streamlining business processes using tools like n8n, Zapier, and Make to reduce manual workload.',
    subServices: ['CRM Integration', 'Email Automation', 'Data Sync Pipelines'],
  },
  {
    id: '2',
    number: '02',
    title: 'AI CHATBOTS & AGENTS',
    description: 'Building intelligent conversational agents powered by LLMs (OpenAI, Anthropic) for support and sales.',
    subServices: ['RAG Implementation', 'Customer Support Bots', 'Internal Knowledge Base'],
  },
  {
    id: '3',
    number: '03',
    title: 'DATA PROCESSING',
    description: 'Automated extraction, cleaning, and analysis of data from web sources and documents.',
    subServices: ['Web Scraping', 'PDF Data Extraction', 'Automated Reporting'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'CUSTOMER SUPPORT AI',
    category: 'AI Agent',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: 'p2',
    title: 'LEAD GEN SCRAPER',
    category: 'Automation',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: 'p3',
    title: 'CONTENT PIPELINE',
    category: 'n8n Workflow',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: 'p4',
    title: 'INVOICE PROCESSOR',
    category: 'Computer Vision',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    year: '2023'
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'c1',
    title: 'GENERATIVE AI FUNDAMENTALS',
    category: 'CLOUD CERTIFICATION',
    issuer: 'Google Cloud',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop' // AI Art / Brain
  },
  {
    id: 'c2',
    title: 'PYTHON FOR AUTOMATION',
    category: 'PROGRAMMING SKILLS',
    issuer: 'Coursera',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop' // Code/Matrix
  },
  {
    id: 'c3',
    title: 'n8n WORKFLOW LEVEL 1',
    category: 'WORKFLOW DESIGN',
    issuer: 'n8n Academy',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop' // Flow/Connection
  },
  {
    id: 'c4',
    title: 'PROMPT ENGINEERING',
    category: 'LLM OPTIMIZATION',
    issuer: 'DeepLearning.AI',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop' // Robot/AI
  }
];