import Link from "next/link";

export default function HistoryPage() {
    const history = [
        { year: "2026.01", event: "올바른 술문화 연구소 설립" },
        { year: "2026.02", event: "공식 홈페이지 오픈 및 연구 활동 시작" },
    ];

    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/about" className="hover:text-navy">About</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">History</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">연혁</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-2xl">
                <div className="relative border-l-2 border-amber-400 pl-8 space-y-12">
                    {history.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-amber-400 rounded-full border-4 border-white"></div>
                            <span className="text-xl font-bold text-navy">{item.year}</span>
                            <p className="text-lg text-slate-600 mt-2">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
