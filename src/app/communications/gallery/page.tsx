export default function CommunicationsGalleryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">활동 갤러리</h1>
                    <p className="mt-4 text-slate-300">올바른 술문화 연구소의 생생한 활동 현장을 공유합니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all">
                                <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform">
                                    Photo {i}
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-amber-600 font-bold mb-2">캠페인</div>
                                    <h4 className="font-bold text-slate-800 mb-2 truncate">제 {i}차 안전 귀가 캠페인 현장</h4>
                                    <p className="text-xs text-slate-400">2026.02.{10 + i}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <button className="border border-slate-300 text-slate-600 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
                            사진 더보기
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
