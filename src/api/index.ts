export { default as CompanyApi } from './company.api';
export { default as ContactApi } from './contact.api';
export { default as ServicesApi } from './services.api';
export { default as AboutApi } from './about.api';
export { default as apiClient } from './config';

// Re-export types from entities for convenience
export type {
  CompanyInfo,
  Carousel,
  ContactMethod,
  CompanyAddress,
  ContactInfo,
  ContactPageData,
  Service,
  ServicesPageData
} from '@/entities';
