import Link from "next/link";

export default function InquiryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/communications" className="hover:text-navy">Communications</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Inquiry</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">1:1 문의하기</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-2xl">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">이름</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-400" placeholder="성함을 입력하세요" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">이메일</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-400" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-navy mb-2">문의 내용</label>
                        <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-400 h-40" placeholder="문의하실 내용을 상세히 적어주세요"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">문의 제출하기</button>
                </form>
            </section>
        </main>
    );
}
