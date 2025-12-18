
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceType: string;
  files: File[];
}
