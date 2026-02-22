export default function AboutHistoryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">연혁</h1>
                    <p className="mt-4 text-slate-300">올바른 술문화 연구소가 걸어온 길입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="relative border-l-2 border-slate-200 pl-8 ml-4">
                        <div className="mb-12 relative">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white"></div>
                            <h4 className="text-2xl font-bold">2024. 12</h4>
                            <p className="text-lg text-slate-600 mt-2">올바른 술문화 연구소 설립 및 개소</p>
                        </div>
                        <div className="mb-12 relative opacity-50">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-200 border-4 border-white"></div>
                            <h4 className="text-2xl font-bold">2025. 01 ~</h4>
                            <p className="text-lg text-slate-500 mt-2">음주 문화 개선 캠페인 기획 및 파트너십 체결 진행</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
