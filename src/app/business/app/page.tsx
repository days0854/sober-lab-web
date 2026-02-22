export default function BusinessAppPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">화이트인 (white-in)</h1>
                    <p className="mt-4 text-slate-300">내 손안의 똑똑한 음주 가이드, 화이트인 앱을 소개합니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">COMING SOON</span>
                        <h2 className="text-3xl font-bold text-[#001F3F]">비워가는 즐거움, 채워가는 건강</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            화이트인은 음주 스케줄링부터 다음 날 컨디션 관리까지 책임지는 올바른 술문화 연구소의 공식 모바일 웹/앱 서비스입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: "음주량 계산", icon: "📊", desc: "주종별 알코올 섭취량을 실시간으로 체크하고 권장량을 안내합니다." },
                            { title: "안전 귀가 연계", icon: "🚗", desc: "버튼 하나로 내 위치를 전송하고 대리운전/택시 서비스를 호출합니다." },
                            { title: "컨디션 리포트", icon: "✨", desc: "음주 후 숙취 정도와 건강 상태를 기록하여 개인화된 가이드를 제공합니다." },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border text-center">
                                <div className="text-5xl mb-6">{feature.icon}</div>
                                <h4 className="text-xl font-bold text-[#001F3F] mb-4">{feature.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-[#001F3F] text-white p-12 rounded-[3rem]">
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-6">베타 테스터 모집 중</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                가장 먼저 화이트인의 스마트한 기능을 체험해 보세요.
                                베타 테스터로 선정되시는 분들께는 연구소 굿즈와 음주 적격 테스트 응시권을 드립니다.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-white text-[#001F3F] px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">
                                    테스터 신청하기
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 aspect-[9/16] bg-slate-800 rounded-3xl border-4 border-slate-700 flex items-center justify-center text-slate-500">
                            [App Mockup]
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
