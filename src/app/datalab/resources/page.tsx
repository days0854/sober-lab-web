export default function DataLabResourcesPage() {
    const resources = [
        { title: "음주 사고 예방 교육용 PPT (2026)", type: "PPTX", date: "2026.01.20" },
        { title: "대학생 대상 캠페인 홍보 포스터 디자인", type: "AI/PDF", date: "2026.01.10" },
        { title: "건전 음주 자가 진단 체크리스트", type: "XLSX", date: "2025.12.15" },
        { title: "연구소 공식 브로슈어 국문/영문", type: "PDF", date: "2024.12.05" },
    ];

    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">강연 및 교육 자료</h1>
                    <p className="mt-4 text-slate-300">교육 현장에서 활용 가능한 검증된 자료들입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {resources.map((res, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border shadow-sm hover:translate-y-[-4px] transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-[#001F3F] text-white rounded-xl flex items-center justify-center font-bold">
                                        {res.type.split('/')[0]}
                                    </div>
                                    <span className="text-xs text-slate-400">{res.date}</span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-6">{res.title}</h4>
                                <button className="w-full border-2 border-[#001F3F] text-[#001F3F] py-3 rounded-xl font-bold group-hover:bg-[#001F3F] group-hover:text-white transition-all">
                                    다운로드 받기
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
