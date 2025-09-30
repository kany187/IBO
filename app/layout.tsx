import type { Metadata } from "next";
import { Inter,  Oswald } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  subsets: ['cyrillic']
})

export const metadata: Metadata = {
  title: "Geremy Ibobi",
  description: "Fullstack Engineer / Systems Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_location: window.location.href,
                page_title: document.title,
              });
            `,
          }}
        />
      </head>
      <body className={oswald.className}>
        <Providers>
        <main>{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
