export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  colorCode: string;
  stock: number;
  rentalPrice: number;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface ProductTab {
  id: string;
  title: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  brand: string;
  category: string;
  description: string;
  shortDescription: string;
  images: ProductImage[];
  variants: ProductVariant[];
  baseRentalPrice: number;
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  tags: string[];
  tabs: ProductTab[];
  faqs: FAQItem[];
  relatedProducts: string[];
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  type: 'rental';
}

export interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export interface ProductInfoProps {
  product: Product;
  selectedVariant?: ProductVariant;
}

export interface ProductActionsProps {
  product: Product;
  selectedVariant?: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: (type: 'rental') => void;
}

export interface PromotionSectionProps {
  promotions?: string[];
  policies?: string[];
}

export interface ProductTabsProps {
  tabs: ProductTab[];
  activeTab?: string;
  onTabChange: (tabId: string) => void;
}

export interface FAQSectionProps {
  faqs: FAQItem[];
}

export interface RelatedProductsProps {
  productIds: string[];
}