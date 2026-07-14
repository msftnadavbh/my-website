import type { Metadata, Viewport } from "next";
import {
  Atkinson_Hyperlegible_Next,
  Azeret_Mono,
  Geologica,
} from "next/font/google";
import { site } from "@/content/site";
import { shouldIndex, siteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Geologica({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
});

const body = Atkinson_Hyperlegible_Next({
  adjustFontFallback: false,
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600"],
});

const mono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nadav Ben-Haim | Cloud, Kubernetes, AI & Developer Tools",
  description:
    "Senior Solution Engineer at Microsoft building cloud platforms, developer tools, and reliable AI-assisted engineering workflows.",
  alternates: { canonical: "/" },
  authors: [{ name: site.profile.name, url: site.profile.linkedin }],
  creator: site.profile.name,
  openGraph: {
    type: "profile",
    url: "/",
    title: "Nadav Ben-Haim | Systems that work beyond the diagram",
    description:
      "Cloud architecture, Kubernetes platforms, developer productivity, and AI-assisted engineering.",
    siteName: site.profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadav Ben-Haim | Systems that work beyond the diagram",
    description:
      "Cloud architecture, Kubernetes platforms, developer productivity, and AI-assisted engineering.",
  },
  robots: shouldIndex
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#f5efe3", media: "(prefers-color-scheme: light)" },
    { color: "#23051f", media: "(prefers-color-scheme: dark)" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `try{if(localStorage.getItem("nadav-theme")==="matrix")document.documentElement.dataset.theme="matrix"}catch{}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Static pre-hydration theme script prevents a flash of the default theme.
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
