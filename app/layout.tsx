import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Cat & Kid Goat Storybook',
  description: 'A 75-page illustrated storybook with PDF download'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
