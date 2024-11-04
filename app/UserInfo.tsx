'use client';

import { useAuthData } from './useAuthData';
import { useState, useEffect } from 'react';

export default function UserInfo() {
  const [userName, setUserName] = useState<string | undefined>();
  const { oidcData } = useAuthData();

  useEffect(() => setUserName(oidcData?.name), [oidcData]);

  return (
    <>{userName ? <p>the userName is: {userName}</p> : <p>No user info</p>}</>
  );
}
