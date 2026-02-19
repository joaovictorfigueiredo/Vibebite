
export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  credits: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  checkoutUrl: string;
  color: string;
}
