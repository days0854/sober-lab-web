"use client";

import { useState, useEffect } from "react";

export default function VolunteerAdmin() {
    const [volunteerStatus, setVolunteerStatus] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/content")
            .then((res) => res.json())
            .then((data) => {
                setVolunteerStatus(data.volunteerStatus || []);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>로딩 중...</p>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">봉사단 모집 현황</h1>
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600">활동명</th>
                            <th className="p-4 font-semibold text-slate-600">상태</th>
                            <th className="p-4 font-semibold text-slate-600">참여 인원</th>
                            <th className="p-4 font-semibold text-slate-600">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteerStatus.map((item) => (
                            <tr key={item.id} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-medium">{item.title}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === 'recruiting' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {item.status === 'recruiting' ? '모집 중' : '마감'}
                                    </span>
                                </td>
                                <td className="p-4">{item.count}명</td>
                                <td className="p-4">
                                    <button className="text-blue-600 hover:underline mr-3">수정</button>
                                    <button className="text-red-500 hover:underline">삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="mt-6 bg-[#001F3F] text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800">
                + 새 모집 공고 추가
            </button>
        </div>
    );
}
