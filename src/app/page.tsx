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
      <section className="relative flex min-h-[40vh] items-center justify-center bg-[#001F3F] text-white">
        <div className="container mx-auto px-4 text-center z-10 py-10">
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl animate-fade-in"
            dangerouslySetInnerHTML={{ __html: content.home.hero.title }}
          />
          <p className="mb-8 text-lg font-medium text-slate-300 md:text-xl animate-fade-in-up">
            {content.home.hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-full bg-white px-6 py-3 text-base font-bold text-[#001F3F] transition-transform hover:scale-105"
            >
              연구소 소개
            </Link>
            <Link
              href="/business"
              className="rounded-full border-2 border-white px-6 py-3 text-base font-bold text-white transition-all hover:bg-white hover:text-[#001F3F]"
            >
              주요 사업
            </Link>
          </div>
        </div>
        {/* Subtle Background Pattern or Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </section>

      {/* Quick Business Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#001F3F] md:text-4xl">{content.home.business.title}</h2>
            <div className="mt-4 h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              {content.home.business.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Safe Return */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-40 w-full bg-slate-100 flex items-center justify-center">
                <div className="text-6xl">🏃‍♂️</div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#001F3F]">안전 귀가 도우미</h3>
                <p className="mb-4 text-sm text-slate-600 leading-relaxed min-h-[40px]">자원봉사 기반의 안전귀가 서비스를 제공합니다.</p>
                <Link href="/business/volunteer" className="text-amber-600 text-sm font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>

            {/* Public Projects */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-40 w-full bg-slate-100 flex items-center justify-center">
                <div className="text-6xl">🏛️</div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#001F3F]">공공 캠페인 (Public)</h3>
                <p className="mb-4 text-sm text-slate-600 leading-relaxed min-h-[40px]">올바른 음주문화를 위한 대국민 공공 캠페인을 진행합니다.</p>
                <Link href="/business/public" className="text-amber-600 text-sm font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>

            {/* Certification */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-40 w-full bg-slate-100 flex items-center justify-center">
                <div className="text-6xl">🎓</div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#001F3F]">교육 및 인증</h3>
                <p className="mb-4 text-sm text-slate-600 leading-relaxed min-h-[40px]">다양한 기관 대상 음주 예방 교육 및 인증 제도를 운영합니다.</p>
                <Link href="/business/certification" className="text-amber-600 text-sm font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>

            {/* Consulting */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-40 w-full bg-slate-100 flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#001F3F]">전문 컨설팅</h3>
                <p className="mb-4 text-sm text-slate-600 leading-relaxed min-h-[40px]">음주 문화 개선을 위한 기업/조직 전문 컨설팅을 제공합니다.</p>
                <Link href="/business/consulting" className="text-amber-600 text-sm font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>

            {/* White-In App */}
            <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-40 w-full bg-slate-100 flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[#001F3F]">화이트인 (white-in) 앱</h3>
                <p className="mb-4 text-sm text-slate-600 leading-relaxed min-h-[40px]">음주량 조절 및 안전 가이드를 제공하는 모바일 앱입니다.</p>
                <Link href="/business/app" className="text-amber-600 text-sm font-semibold hover:underline">상세보기 &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
