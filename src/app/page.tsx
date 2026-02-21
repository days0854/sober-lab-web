"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  if (!content) return <div className="min-h-screen flex items-center justify-center">로딩 중...</div>;

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[#001F3F] text-white">
        <div className="container mx-auto px-4 text-center z-10 py-12">
          <h1
            className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl animate-fade-in"
            dangerouslySetInnerHTML={{ __html: content.home.hero.title }}
          />
          <p className="mb-10 text-xl font-medium text-slate-300 md:text-2xl animate-fade-in-up">
            {content.home.hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-full bg-white px-8 py-4 text-lg font-bold text-[#001F3F] transition-transform hover:scale-105"
            >
              연구소 소개
            </Link>
            <Link
              href="/business"
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#001F3F]"
            >
              주요 사업
            </Link>
          </div>
        </div>
        {/* Subtle Background Pattern or Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </section>

      {/* Quick Business Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#001F3F] md:text-4xl">{content.home.business.title}</h2>
            <div className="mt-4 h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              {content.home.business.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Safe Return */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/safe-return.png"
                  alt="안전 귀가 도우미"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-[#001F3F]">안전 귀가 도우미</h3>
                <p className="mb-6 text-slate-600 leading-relaxed">자원봉사 기반의 안전귀가 서비스를 통해 건강한 음주 문화를 완성합니다.</p>
                <Link href="/business/volunteer" className="text-amber-600 font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>

            {/* White-In App */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/white-in.png"
                  alt="화이트인 앱"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-[#001F3F]">화이트인 (white-in)</h3>
                <p className="mb-6 text-slate-600 leading-relaxed">음주량 조절 및 안전 가이드를 제공하는 모바일 앱을 개발 중입니다.</p>
                <Link href="/business/app" className="text-amber-600 font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>

            {/* Consulting */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/consulting.png"
                  alt="음주 상담"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-[#001F3F]">전문 컨설팅</h3>
                <p className="mb-6 text-slate-600 leading-relaxed">음주 문화 개선을 위한 기업 및 개인 대상 전문 컨설팅 프로그램을 운영합니다.</p>
                <Link href="/business/consulting" className="text-amber-600 font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
