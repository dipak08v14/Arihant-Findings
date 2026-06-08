export interface ProductSpec {
  material: string[];
  dimensions: string;
  weightRange: string;
  moq: string;
  purityGrades: string[];
  finishing: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: ProductSpec;
  technicalDetails: string;
}

export interface RFQFormState {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  selectedProducts: string[];
  quantity: string;
  purityGrade: string;
  message: string;
}
