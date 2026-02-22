export default function CommunicationsBoardPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="bg-[#001F3F] py-20 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold md:text-5xl">자유게시판</h1>
                    <p className="mt-4 text-slate-300">누구나 자유롭게 의견을 나누는 공간입니다.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-slate-50 p-12 rounded-3xl border border-dashed text-center">
                        <div className="text-5xl mb-6">📝</div>
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-4">게시판 준비 중</h3>
                        <p className="text-slate-500 mb-8">
                            더욱 안전하고 쾌적한 커뮤니티 환경을 위해 회원 시스템 및 게시판 기능을 정비 중입니다.
                            조금만 기다려 주세요!
                        </p>
                        <button className="bg-[#001F3F] text-white px-8 py-3 rounded-full font-bold opacity-50 cursor-not-allowed">
                            글쓰기 (준비중)
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
