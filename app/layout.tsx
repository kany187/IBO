import type { Metadata } from "next";
import { Inter,  Oswald } from "next/font/google";
import { Providers } from "./providers";

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
      <body className={oswald.className}>
        <Providers>
        <main>{children}</main>
        </Providers>
      
      </body>
    </html>
  );
}
