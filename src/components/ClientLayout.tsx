'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith('/projects/');

  return (
    <>
      {!isProjectPage && <Navigation />}
      {children}
    </>
  );
}
