import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Works | Diphtong Web",
  description:
    "I design and develop websites for artists and small businesses looking to combine aesthetics, performance, and brand clarity.",
  keywords: [
    "Montreal",
    "portfolio ",
    "queer",
    "website",
    "minimalist",
    "video",
    "Béances Éditions",
    "web design",
  ],
  openGraph: {
    title: "My Works | Diphtong Web",
    description:
      "I design and develop websites for artists and small businesses looking to combine aesthetics, performance, and brand clarity.",
    url: "https://diphtongweb.com/projects",
    siteName: "Diphtong Web",
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
