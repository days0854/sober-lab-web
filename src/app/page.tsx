import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center bg-[#001F3F] text-white">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl animate-fade-in">
            술 권하는 사회, <span className="text-amber-400">통제</span>가 필요합니다!
          </h1>
          <p className="mb-10 text-xl font-medium text-slate-300 md:text-2xl animate-fade-in-up">
            올바른술문화연구소와 함께 걱정없이 한잔해요!
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#001F3F] md:text-4xl">주요 활동 분야</h2>
            <div className="mt-4 h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-3 text-xl font-bold">안전 귀가 도우미</h3>
              <p className="text-slate-600">안전한 귀가 도우미 봉사단을 운영하여 올바른 술문화를 정착시킵니다.</p>
            </div>
            <div className="rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="mb-3 text-xl font-bold">화이트인 (white-in)</h3>
              <p className="text-slate-600">음주 가이드 모바일 앱을 통해 책임감 있는 음주 습관을 돕습니다. (준비 중)</p>
            </div>
            <div className="rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 text-4xl">🎓</div>
              <h3 className="mb-3 text-xl font-bold">음주 적격 테스트</h3>
              <p className="text-slate-600">체계적인 테스트를 통한 자격증 발급으로 건전한 음주 문화를 조성합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
