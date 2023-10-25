import {
  PrivateUserData,
  PublicUserData,
  UserDataInterface,
} from "@/interfaces/user";

export const publicUserData = (data: any): PublicUserData => {
  const { uid, email = "" } = data;
  return {
    uid,
    email,
  } as PublicUserData;
};

export const privateUserData = (data: any): PrivateUserData => {
  const {
    uid = "",
    emailVerified = false,
    phoneVerified = false,
    isAnonymous = false,
    migrate = "",
    roles = [],
    createdAt = "",
  } = data;

  return {
    uid,
    emailVerified,
    phoneVerified,
    isAnonymous,
    migrate,
    roles,
    createdAt,
  } as PrivateUserData;
};

export const UserData = (data: any): UserDataInterface => {
  const {
    uid = "",
    phoneNumber = "",
    gender = "", 
    photoURL = "",
    fullName = "",
    //   store={}, 
    allowMails = false,
    allowMessages = false,
    allowPromotionMails = false,
    allowPromotionMessages = false,
    backgroundPic = "",
    city = "",
    country = "",
    nationality = "",
    language = "", 
    createdAt = "",
  } = data;

  return {
    uid,
    phoneNumber,
    photoURL,
    fullName,
    gender,
    //   store={},
    allowMails,
    allowMessages,
    allowPromotionMails,
    allowPromotionMessages,
    backgroundPic,
    city,
    country,
    nationality,
    language, 
    createdAt,
  } as UserDataInterface;
};
