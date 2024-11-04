'use server';

import { cookies } from 'next/headers';

export interface UserClaims {
  name?: string;
  locale?: string;
  email?: string;
  preferred_username?: string;
  given_name?: string;
  family_name?: string;
  zoneinfo?: string;
  updated_at?: number;
  email_verified?: boolean;
  groups?: string[];
}

export type ExposedUserClaims = Pick<
  UserClaims,
  'name' | 'email' | 'preferred_username' | 'groups'
>;

export async function getOidcData(): Promise<ExposedUserClaims | null> {
  const oidcDataCookie = (await cookies()).get('oidcData');
  return oidcDataCookie ? JSON.parse(oidcDataCookie.value) : null;
}

export async function setOidcCookie(name: string, email: string) {
  const oidcData = { name, email };
  (await cookies()).set('oidcData', JSON.stringify(oidcData), { path: '/' });
  return { success: true, message: 'Cookie set successfully' };
}
