import Link from "next/link";

export default function BoardPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/communications" className="hover:text-navy">Communications</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Board</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">자유게시판</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4">
                <div className="bg-white border rounded-2xl p-20 text-center">
                    <p className="text-slate-500 mb-6">게시판 서비스 점검 중입니다.</p>
                    <Link href="/communications" className="inline-block px-6 py-2 border rounded-full text-sm">뒤로가기</Link>
                </div>
            </section>
        </main>
    );
}
