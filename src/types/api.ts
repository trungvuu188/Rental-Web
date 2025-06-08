export interface ApiProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  isPrimary: boolean;
}

export interface ApiProduct {
  id: string;
  providerId: string;
  providerName: string;
  name: string;
  description: string;
  category: string;
  size: string;
  color: string;
  pricePerDay: number;
  availabilityStatus: string;
  isPromoted: boolean;
  rentCount: number;
  createdAt: string;
  updatedAt: string | null;
  primaryImagesUrl: string | null;
  images: ApiProductImage[];
}

export type ApiProductsResponse = ApiProduct[]; 