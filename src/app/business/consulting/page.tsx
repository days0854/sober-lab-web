import Link from "next/link";

export default function ConsultingPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-navy py-12 text-white">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-4 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/business" className="hover:text-white">Business</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="font-bold text-white">Consulting</span>
                    </nav>
                    <h1 className="text-3xl font-bold">컨설팅 및 교육훈련</h1>
                </div>
            </section>
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">
                    <div className="p-10 bg-white border rounded-3xl shadow-sm">
                        <h3 className="text-2xl font-bold text-navy mb-4">기업 회식문화 컨설팅</h3>
                        <p className="text-slate-600">불필요한 과음을 줄이고 임직원 모두가 즐거운 팀빌딩 회식 문화를 제안합니다.</p>
                    </div>
                    <div className="p-10 bg-white border rounded-3xl shadow-sm">
                        <h3 className="text-2xl font-bold text-navy mb-4">신입생 안전 음주 교육</h3>
                        <p className="text-slate-600">대학교 OT 및 MT 기간 발생할 수 있는 음주 사고를 예방하기 위한 맞춤 교육 프로그램입니다.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
