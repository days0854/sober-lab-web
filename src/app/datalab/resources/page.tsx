import Link from "next/link";

export default function ResourcesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/datalab" className="hover:text-navy">Data Lab</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Resources</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">강연/교육 자료실</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 text-center">
                <p className="text-slate-500 underline decoration-amber-400 underline-offset-8">공개 가능한 교육 자료를 준비 중입니다.</p>
            </section>
        </main>
    );
}
