import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "올바른 술문화 연구소",
  description: "술 권하는 사회, 통제가 필요합니다! 올바른 술문화 연구소와 함께 걱정없이 한잔해요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="올바른 술문화 연구소"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            <nav className="hidden space-x-8 md:flex font-semibold">
              <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
              <Link href="/business" className="hover:text-amber-600 transition-colors">Business</Link>
              <Link href="/communications" className="hover:text-amber-600 transition-colors">Communications</Link>
              <Link href="/datalab" className="hover:text-amber-600 transition-colors">Data Lab</Link>
            </nav>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </header>
        {children}
        <footer className="w-full border-t bg-slate-50 py-12">
          <div className="container mx-auto px-4 text-center text-slate-500">
            <p>© 2026 올바른 술문화 연구소. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
