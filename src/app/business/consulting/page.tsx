export default function BusinessConsultingPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">컨설팅 및 교육훈련</h1>
                    <p className="mt-4 text-slate-300">기업, 대학, 공공기관을 위한 맞춤형 음주 문화 솔루션입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">맞춤형 프로그램</h2>
                        <div className="space-y-6">
                            {[
                                { title: "기업 회식문화 개선 컨설팅", desc: "강압적 회식이 아닌, 팀워크를 다지는 건강한 저녁 문화를 설계해 드립니다." },
                                { title: "대학생 신입생 OT 음주 사고 예방 교육", desc: "매년 발생하는 대학 내 음주 사고를 막기 위한 실질적 가이드를 제공합니다." },
                                { title: "주도(酒道) 및 술자리 에티켓 강연", desc: "비즈니스 술자리부터 모임까지, 품격 있는 술자리 매너를 교육합니다." },
                            ].map((prog, idx) => (
                                <div key={idx} className="p-8 border rounded-3xl hover:shadow-lg transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-[#001F3F] mb-2">{prog.title}</h4>
                                        <p className="text-slate-600">{prog.desc}</p>
                                    </div>
                                    <button className="whitespace-nowrap bg-amber-500 text-white px-6 py-2 rounded-full font-bold">제안서 요청</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
                        <div className="text-5xl">💡</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">강연 및 교육 문의</h3>
                            <p className="text-slate-400 leading-relaxed">
                                전국 어디든 찾아갑니다. 연구소의 전문 강사진이 귀 기관에 최적화된 콘텐츠로 찾아뵙겠습니다.
                                상세 일정 및 비용은 협의를 통해 결정됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
