export default function AboutLocationPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">오시는 길</h1>
                    <p className="mt-4 text-slate-300">연구소 방문을 위한 위치 정보입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-slate-100 aspect-video rounded-3xl flex items-center justify-center text-slate-400 mb-12 border">
                        [지도 영역 - Google Maps / Kakao Maps 연동 예정]
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#001F3F] mb-6">주소 및 연락처</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start">
                                    <span className="font-bold w-20">주소</span>
                                    <span>서울특별시 (상세 주소 확인 필요)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold w-20">전화</span>
                                    <span>02-000-0000 (공식 번호 확인 필요)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold w-20">이메일</span>
                                    <span>contact@sober.or.kr</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#001F3F] mb-6">교통 안내</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-amber-600 mb-2">지하철</h4>
                                    <p className="text-slate-600">지하철 역 정보를 입력해 주세요.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-amber-600 mb-2">버스</h4>
                                    <p className="text-slate-600">인근 버스 정류장 정보를 입력해 주세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
