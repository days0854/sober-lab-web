import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* Sidebar */}
            <aside className="w-64 bg-[#001F3F] text-white p-6">
                <div className="mb-10">
                    <h2 className="text-xl font-bold">Lab Admin</h2>
                    <p className="text-sm text-slate-400">관리자 모드</p>
                </div>
                <nav className="space-y-4">
                    <Link href="/admin" className="block p-3 rounded hover:bg-slate-700 transition-colors">대시보드</Link>
                    <Link href="/admin/inquiries" className="block p-3 rounded hover:bg-slate-700 transition-colors">문의 내역 관리</Link>
                    <Link href="/admin/volunteer" className="block p-3 rounded hover:bg-slate-700 transition-colors">봉사단 모집 현황</Link>
                    <Link href="/admin/content" className="block p-3 rounded hover:bg-slate-700 transition-colors">콘텐츠 관리</Link>
                    <div className="pt-10">
                        <Link href="/" className="text-sm text-amber-400 hover:underline">← 사이트로 돌아가기</Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                {children}
            </main>
        </div>
    );
}
