import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_components/_header/header';
import HubMenu from './_components/_header/menu';
import HubActions from './_components/_header/actions';
import HubLogo from './_components/_header/logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JSHub',
  description: 'A website with JavaScript articles',
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto mt-10 w-3/4'>
          <Header>
            <HubLogo />
            <HubMenu />
            <HubActions />
          </Header>
          <div className='mt-20'>{children}</div>
        </div>
      </body>
    </html>
  );
}
