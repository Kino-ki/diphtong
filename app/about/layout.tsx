import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Women-Led Web Development in Montreal",
  description:
    "We are a young, women-led web development company from Montreal. We specialize in sleek, custom websites for artists, creatives, and small businesses, offering both affordable WordPress solutions and high-end Next.js websites with animations.",
  keywords: [
    "Montreal web development",
    "artist websites",
    "small business websites",
    "affordable web design",
    "custom Next.js websites",
    "WordPress websites Montreal",
    "women-led web agency",
    "modern website design",
    "portfolio websites for artists",
    "website maintenance services",
  ],
  openGraph: {
    title: "About Us | Women-Led Web Development in Montreal",
    description:
      "Meet our Montreal-based, women-led web studio. We create sleek, modern websites for artists and small businesses, combining design, performance, and accessibility.",
    url: "https://diphtongweb.com/about",
    siteName: "Diphtong Web Agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <main>{children}</main>
    </div>
  );
}
