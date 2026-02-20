import Link from "next/link";

export default function GuidelinesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/datalab" className="hover:text-navy">Data Lab</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Guidelines</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">음주 가이드라인</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div className="space-y-8">
                    <div className="p-8 bg-white border rounded-3xl">
                        <h3 className="text-xl font-bold text-navy mb-4">건강한 음주 속도</h3>
                        <p className="text-slate-600">한 시간에 한 잔, 물과 함께 천천히 마시는 습관이 간 건강을 지킵니다.</p>
                    </div>
                    <div className="p-8 bg-white border rounded-3xl">
                        <h3 className="text-xl font-bold text-navy mb-4">음주 전후 식사</h3>
                        <p className="text-slate-600">빈 속에 술을 마시는 것은 위 점막을 손상시킵니다. 가벼운 식사 후 음주를 권장합니다.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
