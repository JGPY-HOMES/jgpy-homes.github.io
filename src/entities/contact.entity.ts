export interface Carousel {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  value: string;
  description: string;
  color: string;
}

export interface CompanyAddress {
  id: string;
  icon: string;
  title: string;
  value: string;
  description: string;
  color: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  methods: ContactMethod[];
  address: CompanyAddress;
}

export interface ContactPageData {
  carousels: Carousel[];
  contact: ContactInfo;
}
