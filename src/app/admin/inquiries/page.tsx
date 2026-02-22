export default function InquiriesAdmin() {
    const mockInquiries = [
        { id: 1, name: "홍길동", email: "hong@example.com", subject: "봉사단 참여 문의", date: "2026-02-21", status: "New" },
        { id: 2, name: "김철수", email: "kim@example.com", subject: "기업 컨설팅 요청", date: "2026-02-20", status: "Read" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">문의 내역 관리</h1>
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600">이름</th>
                            <th className="p-4 font-semibold text-slate-600">제목</th>
                            <th className="p-4 font-semibold text-slate-600">날짜</th>
                            <th className="p-4 font-semibold text-slate-600">상태</th>
                            <th className="p-4 font-semibold text-slate-600">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockInquiries.map((inquiry) => (
                            <tr key={inquiry.id} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-medium">{inquiry.name}</td>
                                <td className="p-4">{inquiry.subject}</td>
                                <td className="p-4 text-slate-500">{inquiry.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${inquiry.status === 'New' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {inquiry.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="text-blue-600 hover:underline">상세보기</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
