import { Timestamp } from "firebase/firestore";
export interface PublicStoreInterface {
  userId: string;
  storeId?: string;
  name: string;
  email: string;
  link?: string;
  welcomeText?: string;
  logo?: string;
  background?: string;
}
export interface PrivateStoreInterface {
  userId: string;
  storeId?: string;
  createdAt: Timestamp;
}
