export default function CommunicationsInquiryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">문의하기</h1>
                    <p className="mt-4 text-slate-300">궁금하신 점이나 제안 사항을 남겨주세요.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">이름</label>
                                    <input type="text" className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001F3F]" placeholder="성함을 입력하세요" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                                    <input type="text" className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001F3F]" placeholder="010-0000-0000" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">이메일</label>
                                <input type="email" className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001F3F]" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
                                <textarea className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#001F3F] h-40" placeholder="문의 내용을 상세히 작성해 주세요"></textarea>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="privacy" className="w-4 h-4" />
                                <label htmlFor="privacy" className="text-sm text-slate-500">개인정보 수집 및 이용에 동의합니다.</label>
                            </div>
                            <button type="submit" className="w-full bg-[#001F3F] text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg">
                                문의 제출하기
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
