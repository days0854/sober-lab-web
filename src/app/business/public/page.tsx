import Link from "next/link";

export default function PublicPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-navy py-12 text-white">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/business" className="hover:text-white">Business</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-white">Public</span>
                    </nav>
                    <h1 className="text-3xl font-bold">공공기관 후원 사업</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-navy mb-8">지속 가능한 음주 문화 캠페인</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">국가기관 및 각 지방자치단체와 협력하여 건전 음주 캠페인을 대중화하고 사회 전반의 인식을 개선합니다.</p>
            </section>
        </main>
    );
}
