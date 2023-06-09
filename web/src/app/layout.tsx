import { ReactNode } from 'react';
import './globals.css';
import { cookies } from 'next/headers';
import { Copyright } from '@/components/Copyright';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/SignIn';
import { Profile } from '@/components/Profile';

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google';
import { EmptyMemory } from '@/components/EmptyMemory';
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
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${robotoFont.variable} ${altFont.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <div className="relative flex flex-1 flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/svg/stars.svg)] bg-cover px-28 py-16">
            <div
              className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full
         bg-purple-700 opacity-50 blur-full"
            ></div>

            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          <div className="flex flex-col bg-[url(../assets/svg/stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
