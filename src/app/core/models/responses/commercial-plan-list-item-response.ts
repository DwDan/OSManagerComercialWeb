export interface CommercialPlanListItemResponse {
  id: string;
  name: string;
  code: string;
  price: number;
  maxAdminUsers: number;
  maxOrdersPerMonth: number | null;
  isActive: boolean;
  isPublic: boolean;
  isRecommended: boolean;
  featureKeys: string[];
}
