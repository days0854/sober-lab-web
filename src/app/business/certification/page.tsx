import Link from "next/link";

export default function CertificationPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-navy py-12 text-white">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/business" className="hover:text-white">Business</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-white">Certification</span>
                    </nav>
                    <h1 className="text-3xl font-bold">음주 적격 테스트/자격증</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-navy mb-6">자격증 제도 안내</h2>
                        <p className="text-slate-600 mb-4">본인의 주량을 정확히 알고, 술자리 예절을 숙지한 분들에게 연구소에서 공인된 자격증을 발급합니다.</p>
                        <ul className="space-y-4 text-slate-700">
                            <li className="flex items-center"><span className="w-6 h-6 bg-amber-400 rounded-full mr-3 inline-flex items-center justify-center text-white">1</span> 이론: 주류 상식 및 음주 사고 예방 교육</li>
                            <li className="flex items-center"><span className="w-6 h-6 bg-amber-400 rounded-full mr-3 inline-flex items-center justify-center text-white">2</span> 실기: 적정 속도 유지 및 에티켓 테스트</li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 aspect-[4/3] rounded-3xl flex items-center justify-center text-slate-400 border-2 border-dashed">
                        [자격증 예시 이미지 영역]
                    </div>
                </div>
            </section>
        </main>
    );
}
