export default function DataLabGuidelinesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">음주 가이드라인</h1>
                    <p className="mt-4 text-slate-300">건강하고 책임감 있는 음주를 위한 표준 가이드입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-16">
                        {[
                            { title: "01. 적정 음주량 준수", content: "성인 남성 기준 하루 2잔, 여성 기준 1잔 이내를 권장하며, 각자의 주량을 정확히 아는 것이 중요합니다." },
                            { title: "02. 공복 음주 피하기", content: "음주 전 가벼운 식사를 통해 알코올 흡수 속도를 늦추고 위장을 보호하세요." },
                            { title: "03. 물과 함께 마시기", content: "술 한 잔당 물 한 잔을 마시면 체내 알코올 농도를 낮추고 탈수를 예방할 수 있습니다." },
                            { title: "04. 강요하지 않는 문화", content: "본인의 주량을 존중받고 타인에게도 술을 강요하지 않는 것이 올바른 주도의 시작입니다." },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-8 items-start">
                                <div className="text-4xl font-black text-amber-100 shrink-0">STEP</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{item.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <h4 className="font-bold mb-4">참고 자료</h4>
                        <p className="text-slate-500 text-sm">위 가이드라인은 보건복지부 및 세계보건기구(WHO)의 권고안을 바탕으로 연구소에서 재구성하였습니다.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
