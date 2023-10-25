import { Timestamp } from "firebase/firestore";
import { PrivateStoreInterface, PublicStoreInterface } from "./store";

// data that user can edit availiable for user consumption
export interface UserDataInterface {
  uid: string;
  phoneNumber?: string;
  gender?: string;
  fullName: string;
  store?: PrivateStoreInterface;
  allowMails?: boolean;
  allowMessages?: boolean;
  allowPromotionMails?: boolean;
  allowPromotionMessages?: boolean;
  backgroundPic?: string;
  photoURL?: string; 
  city?: string;
  country?: string;
  nationality?: string; 
  language?: string;
  createdAt: Timestamp;
}

// user data availialble for public consumption
export interface PublicUserData {
  uid: string;
  email: string; 
}

// data that user cannot edit 
export interface PrivateUserData {
  uid: string;
  emailVerified: boolean;
  phoneVerified?: boolean;
  isAnonymous?: boolean;
  migrate?: string;
  roles?: Array<string>;
  createdAt?: Timestamp;
}
