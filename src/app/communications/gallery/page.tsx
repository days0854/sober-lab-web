import Link from "next/link";

export default function GalleryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/communications" className="hover:text-navy">Communications</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Gallery</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">활동 갤러리</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-slate-100 rounded-3xl mb-4 overflow-hidden flex items-center justify-center text-slate-400 font-bold group-hover:bg-slate-200 transition-colors">
                                Photo {i}
                            </div>
                            <h3 className="font-bold text-navy">활동 사진 제목 {i}</h3>
                            <p className="text-sm text-slate-500">2026.02.20</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
