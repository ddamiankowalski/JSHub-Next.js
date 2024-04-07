import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import HubMenu from "./_components/menu";
import HubActions from "./_components/actions";
import HubLogo from "./_components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSHub",
  description: "A website with JavaScript articles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto w-3/4 mt-10">
          <Header>
            <HubLogo />
            <HubMenu />
            <HubActions />
          </Header>
        {children}
        </div>
      </body>
    </html>
  );
}
