export default function BusinessCertificationPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">음주 적격 테스트 및 자격증</h1>
                    <p className="mt-4 text-slate-300">알고 마시면 더 즐겁다! 체계적인 음주 지식과 에티켓을 인증합니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">음주 공인 자격 체계</h2>
                        <p className="text-slate-500">주종별 지식, 역사, 그리고 가장 중요한 '안전 관리 능력'을 평가합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {[
                            { color: "bg-blue-50", text: "소주", levels: ["1급 (전문가)", "2급 (일반)"] },
                            { color: "bg-amber-50", text: "맥주", levels: ["1급 (전문가)", "2급 (일반)"] },
                            { color: "bg-purple-50", text: "양주/전통주", levels: ["1급 (전문가)", "2급 (일반)"] },
                        ].map((cert, idx) => (
                            <div key={idx} className={`${cert.color} p-8 rounded-3xl border border-transparent hover:border-slate-200 transition-all`}>
                                <h4 className="text-2xl font-bold text-[#001F3F] mb-6">{cert.text} 자격증</h4>
                                <ul className="space-y-4">
                                    {cert.levels.map((lv, i) => (
                                        <li key={i} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                                            <span className="font-bold">{lv}</span>
                                            <span className="text-xs bg-[#001F3F] text-white px-2 py-1 rounded">시험준비중</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-20">
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-10">테스트 진행 절차</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { step: "01", title: "이론 교육", desc: "온라인 강의 수강" },
                                { step: "02", title: "필기 시험", desc: "기초 지식 평가" },
                                { step: "03", title: "실기/태도", desc: "주도(酒道) 및 에티켓" },
                                { step: "04", title: "자격증 교부", desc: "정식 인증서 발급" },
                            ].map((step, idx) => (
                                <div key={idx} className="relative p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-4xl font-black text-slate-200 absolute top-4 right-4">{step.step}</span>
                                    <h5 className="text-lg font-bold text-[#001F3F] mb-2">{step.title}</h5>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
