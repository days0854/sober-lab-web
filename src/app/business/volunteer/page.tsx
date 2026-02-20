import Link from "next/link";

export default function VolunteerPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-navy py-12 text-white">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/business" className="hover:text-white">Business</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-white">Volunteer</span>
                    </nav>
                    <h1 className="text-3xl font-bold">안전 귀가 도우미 봉사단</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-navy mb-6">안전한 귀가, 우리가 함께합니다</h2>
                <p className="text-slate-600 mb-12">과도한 음주로 인해 사고 위험에 노출된 시민들의 안전한 귀가를 돕는 자원봉사자분들을 모십니다.</p>
                <Link href="/communications/inquiry" className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-600 transition-colors">봉사단 지원하기</Link>
            </section>
        </main>
    );
}
