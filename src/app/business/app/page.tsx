import Link from "next/link";

export default function AppPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-800 py-12 text-white">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/business" className="hover:text-white">Business</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-white">App</span>
                    </nav>
                    <h1 className="text-3xl font-bold">화이트인 (white-in)</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-4xl text-center">
                <div className="mb-12 inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold">COMING SOON</div>
                <h2 className="text-4xl font-bold text-navy mb-6">내 손안의 음주 컨트롤러</h2>
                <p className="text-xl text-slate-600 mb-12">현재 앱 개발 진행 중입니다. 곧 만나보실 수 있습니다.</p>
                <div className="flex justify-center gap-4">
                    <div className="w-40 h-14 bg-black rounded-lg flex items-center justify-center text-white opacity-50 cursor-not-allowed">App Store</div>
                    <div className="w-40 h-14 bg-black rounded-lg flex items-center justify-center text-white opacity-50 cursor-not-allowed">Google Play</div>
                </div>
            </section>
        </main>
    );
}
