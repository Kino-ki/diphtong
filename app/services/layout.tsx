import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom Web Development, Design & Website Maintenance | Diphtong Web Agency",
  description:
    "Discover our tailored web services for artists and small businesses. From custom web development with Next.js and WordPress sites to sleek design, ongoing maintenance, and responsive solutions—we help you shine online.",
  keywords: [
    "custom websites",
    "Next.js websites",
    "WordPress websites",
    "artist portfolio websites",
    "small business websites",
    "website design",
    "website maintenance",
    "responsive websites",
  ],
  openGraph: {
    title: "Our Web Services | Diphtong Web Agency",
    description:
      "Explore our services: web development, design, maintenance, and responsive websites for artists and small businesses.",
    url: "https://diphtongweb.com/services",
    siteName: "Diphtong Web Agency",
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
