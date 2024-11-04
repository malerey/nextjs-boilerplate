'use client';

import { getOidcData } from './server';
import useSWR from 'swr';

export function useAuthData() {
  const { data, error, isLoading } = useSWR(getOidcData.name, getOidcData);
  if (error) console.error('Failed to fetch auth data', error);

  return { oidcData: data ?? undefined, isLoading, error };
}
