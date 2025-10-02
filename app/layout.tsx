import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEET相互扶助計画",
  description: "It's the only NEET things to do",
  icons: {
    icon: "/neet-map.png",
    shortcut: "/neet-map.png",
    apple: "/neet-map.png",
  },
  verification: {
    google: "8aPmMLQsUhE6h2w-3UypXomR_61JUOFpqJsNYJtnUoM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center text-sm">
              <span>© 2025 NEET相互扶助計画 All rights reserved.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
