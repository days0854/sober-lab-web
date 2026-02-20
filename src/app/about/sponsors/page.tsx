import Link from "next/link";

export default function SponsorsPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/about" className="hover:text-navy">About</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Sponsors</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">후원자 목록</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 text-center">
                <p className="text-slate-500 mb-12">건전한 술문화를 위해 함께해주시는 분들입니다.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="p-6 bg-white border rounded-xl font-bold text-slate-400">
                            후원사 {i}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
