import { Image } from "./image";


export interface SocialLink {
  url: string;
  totalClicks: number;
  clicksToday: number;
  clicksHistory: { [date: string]: number };
}

export interface Socials {
  discord?: SocialLink;
  kick?: SocialLink;
  instagram?: SocialLink;
  snapchat?: SocialLink;
  tiktok?: SocialLink;
  twitch?: SocialLink;
  x?: SocialLink;
  youtube?: SocialLink;
}

export interface FanPageDesign {
  blockRadius: number;
  blockStyle: string;
  blockTransparecy: number;
  color: string;
  font: string;
  isBlockOutline: boolean;
  isBlockShadow: boolean;
  layout: number;
  profilePicBorder: boolean;
  profilePicShape: string;
  background?: string;
  textColor?: string;
  externalLinkBackground?: string;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface BankDetails {
  accountNumber: string;
  routingNumber: string;
  accountHolderName: string;
}

export interface PageAnalytics {
  totalClicks: number;
  totalViews: number;
}

export interface UserWallet {
  coinBalance: number;
  walletId: string; // Have a seperate wallet collection
  walletType: UserRole; // Can be ["fan", "creator"]
}

type SignupMethod = "email" | "google" | "apple";

export interface PlutusUser {
  id: string; // user id
  name: string; // Name of the User
  username: string;
  email: string;
  role: UserRole; // Can be one of ["creator", "fan"]
  bio?: string;
  referalCode: string;
  referalCodeApplied: string | null;
  isChatEnabled?: boolean;
  isLiveRoomEnabled?: boolean;
  isPaymentsActive?: boolean;
  location: string;
  image: Image | null; // Link to image
  bannerImage: Image | null; // Link to image
  createdAt: string;
  socials?: Socials;
  design: FanPageDesign | null;
  address: Address | null;
  bankDetails: BankDetails | null;
  analytics: PageAnalytics | null;
  userBalance?: number;
  withdrawnAmount?: number;
  hasKycDone?: boolean;
  pendingActions?: {
    usernameUpdated?: boolean;
    dashboardOnboarding?: boolean;
    marketplaceOnboarding?: boolean;
    marketplaceWelcomeCoins?: boolean;
    marketplaceFirstPrediction?: boolean;
    hotTakesOnboarding?: boolean;
  };
  kycStatus?: string;
  usdcBalance?: number;
}

export interface UsdcWallet {
  id?: string;
  address?: string;
  balance?: number;
  marketplaceFirstPrediction?: boolean;
}

export interface Username {
  username: string;
  userId: string;
}

export enum UserRole {
  Creator = "creator",
  Fan = "fan",
  Admin = "admin",
}
