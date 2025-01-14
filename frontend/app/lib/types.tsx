export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface ExtendedProduct extends Product {
  description: string;
  features: string[];
  materials?: string;
  careInstructions?: string;
}
