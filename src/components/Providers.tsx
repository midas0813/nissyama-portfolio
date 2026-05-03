'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Stars } from './Stars';
import { ClientLayout } from './ClientLayout';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="grid-background"></div>
        <Stars />
        <ClientLayout>{children}</ClientLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
