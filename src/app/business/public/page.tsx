export default function BusinessPublicPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">공공기관 후원 사업</h1>
                    <p className="mt-4 text-slate-300">정부 및 지자체와 협력하여 더 넓은 세상에 올바른 술문화를 전파합니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-slate-50 p-12 rounded-3xl border mb-16">
                        <h2 className="text-2xl font-bold text-[#001F3F] mb-6">사업 개요</h2>
                        <p className="text-slate-600 leading-relaxed">
                            공익적 가치를 창출하기 위해 정부 부처 및 지방자치단체의 예산 지원을 받아 수행하는 프로젝트입니다.
                            음주 사고 예방 캠페인, 취약 계층 안전 지원 등 사회 전체의 안녕을 위한 활동에 집중합니다.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-[#001F3F] mb-8">주요 협력 내용</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl border-2 border-slate-100">
                            <h4 className="text-xl font-bold text-amber-600 mb-4">정책 제안 및 자문</h4>
                            <p className="text-slate-600 text-sm">
                                건전 음주 문화 조성을 위한 관련 법규 및 지자체 조례 제정 지원 및 전문가 자문을 수행합니다.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border-2 border-slate-100">
                            <h4 className="text-xl font-bold text-amber-600 mb-4">공익 캠페인 위탁</h4>
                            <p className="text-slate-600 text-sm">
                                지자체의 음주 예방 홍보 사업을 위탁받아 온/오프라인 채널을 통한 효과적인 캠페인을 전개합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
