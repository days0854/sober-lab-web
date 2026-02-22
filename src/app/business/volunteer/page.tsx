export default function BusinessVolunteerPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">안전 귀가 도우미 봉사단</h1>
                    <p className="mt-4 text-slate-300">술자리 후 안전한 귀가를 돕는 자원봉사 캠페인입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-[#001F3F] mb-6">함께 만드는 안전한 밤</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                올바른 술문화 연구소는 늦은 시간 귀가하는 시민들의 안전을 위해 지역 사회 자원봉사자들과 협력하고 있습니다.
                                단순한 이동 지원을 넘어, 이웃이 서로를 돌보는 건강한 공동체 문화를 지향합니다.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-slate-700 font-medium">
                                    <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                                    주말 야간 취약 지역 순찰 및 지원
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                                    지자체 안심 귀가 서비스 연계 및 홍보
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                                    봉사자 안전 교육 및 매너 가이드 제공
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-100 aspect-square rounded-3xl flex items-center justify-center text-slate-400">
                            [활동 사진 영역]
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-10 border text-center">
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-6">봉사단 참여 안내</h3>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            만 19세 이상의 성인이라면 누구나 참여 가능합니다. 여러분의 작은 실천이 안전한 술문화를 만듭니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-[#001F3F] text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
                                봉사단 지원하기
                            </button>
                            <button className="border border-slate-300 text-slate-600 px-8 py-3 rounded-full font-bold hover:bg-white transition-all">
                                운영 가이드 다운로드
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
