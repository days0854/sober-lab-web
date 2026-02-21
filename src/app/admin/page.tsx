export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">대시보드 개요</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-slate-500 font-medium mb-2">미확인 문의</h3>
                    <p className="text-3xl font-bold text-[#001F3F]">0 건</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-slate-500 font-medium mb-2">활성 봉사 모집</h3>
                    <p className="text-3xl font-bold text-amber-600">1 건</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-slate-500 font-medium mb-2">누적 방문자</h3>
                    <p className="text-3xl font-bold">-- 명</p>
                </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border">
                <h2 className="text-xl font-bold mb-4">최근 활동 내역</h2>
                <p className="text-slate-400">데이터를 불러오는 중입니다...</p>
            </div>
        </div>
    );
}
