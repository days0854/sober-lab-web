export default function CommunicationsNoticePage() {
    const notices = [
        { id: 1, title: "올바른 술문화 연구소 정식 개소 안내", date: "2024.12.01", category: "공지" },
        { id: 2, title: "2026년 상반기 안전 귀가 도우미 봉사단 모집", date: "2026.01.15", category: "모집" },
        { id: 3, title: "온라인 음주 적격 테스트 시스템 점검 안내", date: "2026.02.10", category: "안내" },
    ];

    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">공지사항</h1>
                    <p className="mt-4 text-slate-300">연구소의 중요한 소식을 전해드립니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-slate-500">전체 {notices.length}건</span>
                        <div className="flex gap-2">
                            <input type="text" placeholder="검색어를 입력하세요" className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F3F]" />
                            <button className="bg-[#001F3F] text-white px-4 py-2 rounded-lg text-sm">검색</button>
                        </div>
                    </div>

                    <div className="border-y divide-y overflow-hidden rounded-xl border-x">
                        <div className="bg-slate-50 flex font-bold text-slate-700">
                            <div className="w-16 px-6 py-4 text-center">번호</div>
                            <div className="flex-1 px-6 py-4">제목</div>
                            <div className="w-32 px-6 py-4 text-center">작성일</div>
                        </div>
                        {notices.map((notice) => (
                            <div key={notice.id} className="flex hover:bg-slate-50 transition-colors cursor-pointer text-slate-600">
                                <div className="w-16 px-6 py-4 text-center text-slate-400">{notice.id}</div>
                                <div className="flex-1 px-6 py-4">
                                    <span className="text-[#001F3F] font-medium">[{notice.category}]</span> {notice.title}
                                </div>
                                <div className="w-32 px-6 py-4 text-center text-sm">{notice.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
