export default function AboutSponsorsPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">후원자 목록</h1>
                    <p className="mt-4 text-slate-300">올바른 술문화를 위해 함께해주시는 분들입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">함께하는 파트너</h2>
                        <p className="text-slate-500">연구소의 비전에 공감하고 지원해주시는 소중한 분들께 감사드립니다.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-[3/2] bg-slate-50 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all border border-dashed">
                                Logo {i}
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-12 text-center border-2 border-amber-100">
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-6">후원에 참여하고 싶으신가요?</h3>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            전달해주시는 후원금은 안전 귀가 도우미 봉사단 운영과 음주 문화 개선 교육 자료 제작에 소중히 사용됩니다.
                        </p>
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-colors">
                            후원 문의하기
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
