import Head from "next/head";
import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`Dev Blog - ${pageTitle}`}</title>
        <meta name="description" content="Blog about web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-800">{children}</main>
    </>
  );
}
