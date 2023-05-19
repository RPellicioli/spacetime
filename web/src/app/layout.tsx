import { ReactNode } from 'react';
import './globals.css';
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google';

const robotoFont = Roboto({ subsets: ['latin'], variable: '--font-sans' });
const altFont = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-alt'
});

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída em React, Next.js, Tailwind e Typescript.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${robotoFont.variable} ${altFont.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
