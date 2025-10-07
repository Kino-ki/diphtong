import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Women-Led Web Development in Montreal",
  description:
    "We are a young, women-led web development company from Montreal. We specialize in sleek, custom websites for artists, creatives, and small businesses, offering both affordable WordPress solutions and high-end Next.js websites with animations.",
  keywords: [
    "Montreal web development",
    "artist websites",
    "portfolio website",
    "Montreal artist",
    "queer artist portfolio",
    "multidisciplinary artist",
    "minimalist web design",
    "contemporary art website",
    "artist portfolio design",
    "creative web design Montreal",
    "digital art portfolio",
    "Béances Éditions",
    "Montreal publishing house",
    "queer publishing",
    "lesbian and trans voices",
    "feminist publishing",
    "punk design",
    "grunge web design",
    "independent publisher website",
    "LGBTQ+ literature",
    "queer francophone books",
    "Esther Lhuillery",
    "video editor Montreal",
    "movie trailer editor",
    "film editing portfolio",
    "cinematic web design",
    "dark theme website",
    "video portfolio",
    "creative video editing",
    "film trailer specialist",
  ],
  openGraph: {
    title: "Our Projects | Women-Led Web Development in Montreal",
    description:
      "Meet our Montreal-based, women-led web studio. We create sleek, modern websites for artists and small businesses, combining design, performance, and accessibility.",
    url: "https://diphtongweb.com/projects",
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
