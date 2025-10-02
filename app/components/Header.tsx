'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ルートが変わったらモバイルメニューを閉じる
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* ロゴ/サイト名 */}
          <Link 
            href="/"
            className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            NEET相互扶助計画
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-4 md:space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/about' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              私たちについて
            </Link>
            <Link
              href="/product"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/product' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              作ったもの
            </Link>
            <a
              href="https://discord.gg/BtqQecTW"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 text-sm md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">メインメニューを開閉</span>
            {isMobileMenuOpen ? (
              // Close (X)
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-3`}>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                pathname === '/about' 
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              私たちについて
            </Link>
            <Link
              href="/product"
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                pathname === '/product' 
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              作ったもの
            </Link>
            <a
              href="https://discord.gg/BtqQecTW"
              className="mt-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 