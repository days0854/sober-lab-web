import Link from "next/link";

export default function BusinessPage() {
    const businesses = [
        {
            title: "안전 귀가 도우미 봉사단",
            desc: "술자리 후 안전한 귀가를 돕는 자원봉사단을 운영합니다.",
            items: ["주말 야간 순찰", "동네 안심 귀가 서비스 연계", "봉사자 교육 및 매칭"],
            status: "운영중",
            href: "/business/volunteer"
        },
        {
            title: '모바일 앱 "화이트인(white-in)"',
            desc: "음주량 체크, 대리운전 연계, 내일의 컨디션 가이드 제공 예정",
            items: ["음주량 자동 계산", "숙취 해소 가이드", "위험 군 알림"],
            status: "준비중",
            href: "/business/app"
        },
        {
            title: "음주 적격 테스트 및 자격증",
            desc: "체계적인 이론/실기 테스트를 통한 등급별 자격증 발급",
            items: ["소주 1급/2급", "맥주 1급/2급", "양주 1급/2급"],
            status: "도입 예정",
            href: "/business/certification"
        },
        {
            title: "컨설팅 및 교육훈련",
            desc: "건전한 술자리 문화를 위한 맞춤형 솔루션",
            items: ["기업 회식문화 컨설팅", "대학교 신입생 음주 교육", "즐거운 술자리 가이드 (술게임)"],
            status: "진행중",
            href: "/business/consulting"
        },
        {
            title: "공공기관 후원 사업",
            desc: "정부 및 지자체와 협력한 건전 음주 캠페인 지원 사업",
            items: ["지방정부 정책 제안", "공익 캠페인 수행"],
            status: "협의중",
            href: "/business/public"
        },
    ];

    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">Business</h1>
                    <p className="mt-4 text-slate-300">연구소의 주요 사업 영역입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {businesses.map((biz, idx) => (
                            <Link key={idx} href={biz.href} className="flex flex-col bg-white rounded-3xl p-8 border hover:border-amber-400 hover:shadow-lg transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-[#001F3F]">{biz.title}</h3>
                                    <span className={`px-3 py-1 text-sm font-bold rounded-full ${biz.status === "운영중" ? "bg-green-100 text-green-700" :
                                        biz.status === "준비중" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"
                                        }`}>
                                        {biz.status}
                                    </span>
                                </div>
                                <p className="text-slate-600 mb-6 font-medium">{biz.desc}</p>
                                <div className="mt-auto">
                                    <ul className="space-y-2">
                                        {biz.items.map((item, i) => (
                                            <li key={i} className="flex items-center text-slate-500 text-sm">
                                                <span className="mr-2 text-amber-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
