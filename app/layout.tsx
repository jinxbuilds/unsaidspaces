import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unsaid Spaces",
  description: "Photography, technology, and public-awareness writing.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Unsaid Spaces",
    description: "Photography, technology, and public-awareness writing.",
    images: ["/unsaidspaces.png"],
    url: "https://unsaidspaces.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}