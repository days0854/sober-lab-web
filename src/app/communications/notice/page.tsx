import Link from "next/link";

export default function NoticePage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/communications" className="hover:text-navy">Communications</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Notice</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">공지사항</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4">
                <div className="bg-white border rounded-2xl overflow-hidden">
                    <div className="p-20 text-center text-slate-500">
                        등록된 공지사항이 없습니다.
                    </div>
                </div>
            </section>
        </main>
    );
}
