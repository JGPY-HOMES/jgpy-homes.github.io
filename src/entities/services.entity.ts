export interface Service {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface ServicesPageData {
  services: Service[];
}
