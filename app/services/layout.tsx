import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My services | Diphtong Web",
  description:
    "Discover my tailored web services. From custom web development and WordPress sites to SEO and maintenance",
  keywords: [
    "custom ",
    "WordPress ",
    "artist portfolio ",
    "growing business ",
    "web design",
    " maintenance",
    "SEO",
  ],
  openGraph: {
    title: "My services | Diphtong Web",
    description:
      "Explore our services: web development, design, maintenance, and SEO.",
    url: "https://diphtongweb.com/services",
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
