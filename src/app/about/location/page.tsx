import Link from "next/link";

export default function LocationPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-500">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/about" className="hover:text-navy">About</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-navy">Location</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-navy">오시는 길</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div className="bg-slate-200 aspect-video rounded-3xl flex items-center justify-center text-slate-400 mb-8">
                    [지도 API 연결 영역]
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white border rounded-2xl">
                        <h3 className="text-xl font-bold text-navy mb-4">주소</h3>
                        <p className="text-slate-600">서울특별시 중구 산다동 (상세 주소 협의 중)</p>
                    </div>
                    <div className="p-8 bg-white border rounded-2xl">
                        <h3 className="text-xl font-bold text-navy mb-4">연락처</h3>
                        <p className="text-slate-600">Tel: 02-XXX-XXXX<br/>Email: info@soberlab.kr</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
