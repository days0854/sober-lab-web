"use client";

import { useState, useEffect } from "react";

export default function ContentAdmin() {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetch("/api/content")
            .then((res) => res.json())
            .then((data) => {
                setContent(data);
                setLoading(false);
            });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        const res = await fetch("/api/content", {
            method: "POST",
            body: JSON.stringify(content),
            headers: { "Content-Type": "application/json" },
        });
        if (res.ok) alert("저장되었습니다!");
        setSaving(false);
    };

    if (loading) return <p>로딩 중...</p>;

    return (
        <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">콘텐츠 관리</h1>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-amber-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-amber-600 disabled:opacity-50"
                >
                    {saving ? "저장 중..." : "변경사항 저장"}
                </button>
            </div>

            <div className="space-y-8">
                {/* Hero Section */}
                <section className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">히어로 섹션 (Main)</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">제목 (HTML 허용)</label>
                            <input
                                type="text"
                                value={content.home.hero.title}
                                onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, title: e.target.value } } })}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">부제목</label>
                            <textarea
                                value={content.home.hero.description}
                                onChange={(e) => setContent({ ...content, home: { ...content.home, hero: { ...content.home.hero, description: e.target.value } } })}
                                className="w-full p-2 border rounded h-24"
                            />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <section className="bg-white p-6 rounded-xl shadow-sm border">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">푸터 정보</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">고유번호</label>
                            <input
                                type="text"
                                value={content.footer.taxId}
                                onChange={(e) => setContent({ ...content, footer: { ...content.footer, taxId: e.target.value } })}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">기관명</label>
                            <input
                                type="text"
                                value={content.footer.orgName}
                                onChange={(e) => setContent({ ...content, footer: { ...content.footer, orgName: e.target.value } })}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
