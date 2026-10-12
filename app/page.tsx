// 첫 화면 — DESIGN.md 2번 "화면 구성"의 ① 머리말 부분입니다.
// 질문 기능(② 참고 문서 목록, ④ 대화 영역, ⑤ 질문 입력)은 다음 개발 단위에서 이 아래에 붙입니다.

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12">
      {/* ① 머리말 */}
      <header className="rounded-2xl bg-brand-900 px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          복지·협약 한눈에
        </h1>
        <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
          복지혜택과 업무협약을 물어보세요. 올려 둔 문서 내용만 근거로 답해
          드려요.
        </p>
      </header>

      {/* 준비 중 안내 — 질문 기능이 생기기 전까지 보여 줍니다 */}
      <section
        aria-live="polite"
        className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100 sm:p-8"
      >
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
          <span aria-hidden className="h-2 w-2 rounded-full bg-brand-500" />
          준비 중
        </p>
        <h2 className="mt-4 text-xl font-bold text-brand-900">
          질문 기능을 준비하고 있어요
        </h2>
        <p className="mt-2 leading-relaxed text-ink">
          준비가 끝나면 이 화면에서 바로 질문할 수 있어요.
        </p>
        <ul className="mt-4 flex flex-col gap-2 text-ink">
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-500">✓</span>
            협약이 되어 있는 병원·업체와 혜택 내용 확인
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-500">✓</span>
            직원 복지혜택 확인
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-500">✓</span>
            답변마다 근거 문서와 쪽 번호 표시
          </li>
        </ul>
      </section>
    </main>
  );
}
