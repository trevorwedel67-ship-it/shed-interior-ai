import type { Metadata } from "next";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nexus — Full-Service Marketing Agency",
    template: "%s | Nexus Agency",
  },
  description:
    "We craft digital experiences that transform brands and drive measurable growth. Strategy, creative, and technology — all under one roof.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "brand strategy",
    "web development",
    "content marketing",
    "SEO",
    "social media",
  ],
  openGraph: {
    title: "Nexus — Full-Service Marketing Agency",
    description:
      "Strategy, creative, and technology — all under one roof. We help ambitious companies grow faster through marketing that works.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus — Full-Service Marketing Agency",
    description:
      "Strategy, creative, and technology — all under one roof.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
