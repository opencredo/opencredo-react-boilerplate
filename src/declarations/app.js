/* @flow */

// store custom type declarations here

export type User = {
  userId: string;
  name: string;
  givenName: string;
  familyName: string;
  nickname: string;
  picture: string;
  email: string;
  emailVerified: boolean;
  roles: string[];
  createdAt: string;
  updatedAt: string;
  locale: string;
};
