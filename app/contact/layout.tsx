import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Diphtong Web",
  description:
    "Contact us. We specialize in sleek, custom websites for artists, creatives, and small businesses, offering both affordable WordPress solutions and high-end Next.js websites with animations.",
  keywords: [
    "Montreal web development",
    "artist websites",
    "growing business websites",
    "affordable web design",
    "custom Next.js websites",
    "WordPress websites Montreal",
    "modern website design",
    "portfolio websites for artists",
    "website maintenance services",
    "contact",
  ],
  openGraph: {
    title: "Contact| Diphtong Web",
    description:
      "I create sleek, modern websites for artists and small businesses, combining design, performance, and accessibility.",
    url: "https://diphtongweb.com/contact",
    siteName: "Diphtong Web",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
