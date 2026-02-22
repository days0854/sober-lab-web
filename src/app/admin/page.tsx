"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetch("/api/content")
            .then((res) => res.json())
            .then((data) => setContent(data));
    }, []);

    if (!content) return <div className="p-10 text-center">데이터를 불러오는 중...</div>;

    return (
        <main className="min-h-screen bg-slate-50 py-10">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-3xl font-bold text-[#001F3F] mb-8 border-b pb-4">관리자 대시보드</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 하드코딩 문구 수정 영역 */}
                    <section className="bg-white p-6 rounded-xl shadow-sm border">
                        <h2 className="text-xl font-bold text-amber-600 mb-6 flex items-center">
                            ✏️ 웹사이트 문구 관리
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">메인 히어로 제목</label>
                                <input type="text" defaultValue={content.home?.hero?.title || ""} className="w-full border rounded p-2 focus:ring-2 focus:ring-amber-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">메인 히어로 부제목</label>
                                <textarea defaultValue={content.home?.hero?.description || ""} rows={2} className="w-full border rounded p-2 focus:ring-2 focus:ring-amber-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">비즈니스 영역 제목</label>
                                <input type="text" defaultValue={content.home?.business?.title || ""} className="w-full border rounded p-2 focus:ring-2 focus:ring-amber-500 outline-none" />
                            </div>
                            <button className="mt-4 w-full bg-[#001F3F] text-white py-2 rounded font-bold hover:bg-blue-900 transition-colors">변경사항 저장</button>
                        </div>
                    </section>

                    {/* 문의 및 봉사단 현황 영역 */}
                    <div className="space-y-8">
                        <section className="bg-white p-6 rounded-xl shadow-sm border">
                            <h2 className="text-xl font-bold text-amber-600 mb-4 flex items-center">
                                🙋‍♂️ 문의하기 현황
                            </h2>
                            {content.inquiries && content.inquiries.length > 0 ? (
                                <ul className="space-y-3">
                                    {content.inquiries.map((inq: any, i: number) => (
                                        <li key={i} className="p-3 bg-slate-50 border rounded flex justify-between">
                                            <span className="font-medium text-slate-800">{inq.title || "문의 제목"}</span>
                                            <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">접수완료</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-slate-500 text-sm">현재 접수된 문의가 없습니다.</p>
                            )}
                        </section>

                        <section className="bg-white p-6 rounded-xl shadow-sm border">
                            <h2 className="text-xl font-bold text-amber-600 mb-4 flex items-center">
                                🏃‍♂️ 자원봉사 모집 관리
                            </h2>
                            <ul className="space-y-3">
                                {content.volunteerStatus?.map((vol: any) => (
                                    <li key={vol.id} className="p-3 bg-slate-50 border rounded flex justify-between items-center">
                                        <div>
                                            <p className="font-medium text-slate-800 text-sm">{vol.title}</p>
                                            <p className="text-xs text-slate-500 mt-1">현재 지원자: <span className="font-bold text-amber-600">{vol.count}명</span></p>
                                        </div>
                                        <div>
                                            {vol.status === 'recruiting' ?
                                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded border border-green-200 font-bold">모집중</span> :
                                                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded border border-red-200 font-bold">마감</span>
                                            }
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-4 text-sm font-semibold text-[#001F3F] border border-[#001F3F] px-4 py-2 rounded hover:bg-slate-50 w-full">+ 신규 모집 공고 등록</button>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
