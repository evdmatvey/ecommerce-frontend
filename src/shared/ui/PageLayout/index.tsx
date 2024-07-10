import { Inter } from 'next/font/google';
import React, { type ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <main className={inter.className}>{children}</main>
    </>
  );
};

export default PageLayout;
