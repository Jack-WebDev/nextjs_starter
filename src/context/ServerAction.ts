"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function getAuthCookie() {
  const cookie = cookies().get("authToken");
  if (!cookie) {
    return null;
  }

  const token = cookie.value;
  if (!token) {
    return null;
  }

  return token;
}

export async function getAuth() {
  const authCookie = (await getAuthCookie()) as string;
  const data = authCookie ? jwtDecode(authCookie) : null;
  //@ts-ignore
  return { ...data?.payload, iat: data?.iat, exp: data?.exp } as AuthUserType;
}

export type AuthUserType = {
  id: string;
  accessToken: string;
  refreshToken: string;
  status: string;
  role: string;
  iat: number;
  exp: number;
};
