import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Diphtong Web",
  description:
    "I design and develop websites for artists and small businesses looking to combine aesthetics, performance, and brand clarity.",
  keywords: [
    "web development",
    "artist",
    "growing business ",
    "custom",
    "WordPress",
    "modern",
    "portfolio",
    "Montreal",
  ],
  openGraph: {
    title: "About | Diphtong Web",
    description:
      "Sleek, modern websites for artists and growing businesses, combining design, performance, and accessibility.",
    url: "https://diphtongweb.com/about",
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
