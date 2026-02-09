import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flymac Studios | Live to Tell Stories",
  description:
    "Drone Pilot & Videographer. Premium creative portfolio — photography and film.",
  openGraph: {
    title: "Flymac Studios | Live to Tell Stories",
    description:
      "Drone Pilot & Videographer. Premium creative portfolio.",
  },
};

const themeScript = `
  (function() {
    const stored = localStorage.getItem('flymac-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    document.documentElement.classList.add(theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-dark-bg text-charcoal dark:text-white/90 transition-colors duration-300">
        <ThemeProvider>
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
