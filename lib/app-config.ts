// 앱 전체에서 함께 쓰는 설정값을 한곳에 모은 파일입니다.
// PLAN.md 작업 1("정해야 할 것" 확정)의 결과와 DESIGN.md 6번 "설정값과 환경변수"를 담았습니다.
// 값을 바꿀 때는 이 파일만 고치면 화면과 서버에 함께 적용됩니다.
// 비밀 값(API 키)은 여기에 넣지 않습니다. 비밀 값은 .env에만 둡니다.

export const appConfig = {
  // 담당 부서 연락처 — AI 장애·한도 초과 안내에 함께 표시합니다. (PRD 5번 예외 상황 처리)
  contact: {
    department: "정보화업무",
    guide: "정보화업무 담당에게 문의해 주세요.",
  },

  // 화면에 그대로 보여 줄 안내 문구 (PRD에 정한 문구를 바꾸지 않고 사용)
  messages: {
    notInDocuments: "문서에 없습니다",
    serviceUnavailable:
      "지금은 답변할 수 없습니다. 잠시 후 다시 시도하거나 담당자에게 문의해 주세요",
    unreadableDocument: "글자를 읽을 수 없는 문서입니다",
    documentReady: "문서 준비 완료",
    personalInfoBlocked: "개인정보를 지우고 다시 입력해 주세요",
    personalInfoNotice: "개인정보(이름·주민번호·연락처)는 입력하지 마세요",
  },

  // 답변 속도 — 10초 이내를 목표로 하고, 20초가 넘도록 응답이 없으면 장애 안내로 처리합니다.
  answer: {
    targetSeconds: 10,
    aiTimeoutSeconds: 20,
  },

  // 질문 입력과 사용 제한 (PRD 5번, 7번)
  question: {
    maxLength: 500,
  },
  rateLimit: {
    maxRequests: 10, // 같은 접속자가
    windowSeconds: 60, // 1분 동안 보낼 수 있는 질문 수
  },

  // 문서 폴더 규칙 (PRD 5번 must 1)
  documents: {
    folder: "documents",
    maxFiles: 10,
    maxFileSizeMb: 20,
  },

  // 질문과 가까운 문서 조각 찾기 (DESIGN 3.1, 3.3)
  retrieval: {
    chunkSize: 1000, // 조각 하나의 글자 수
    chunkOverlap: 200, // 앞 조각과 겹치는 글자 수
    sendAllLimit: 20, // 조각이 이 수 이하면 전부 AI에 보냄
    topK: 12, // 그보다 많으면 가까운 조각 12개만 보냄
  },

  // OpenAI 사용 정보
  openai: {
    chatModel: "gpt-4o-mini", // 답변을 써 주는 AI
    embeddingModel: "text-embedding-3-small", // 뜻이 비슷한 부분을 찾게 해 주는 AI
    // 월 사용 한도(달러). 참고용 기록이며, 실제 한도는 OpenAI 계정 설정에서 같은 값으로 지정합니다.
    monthlyBudgetUsd: 5,
  },

  // 배포 전 확인 사항 — 외부 AI 서비스 사용에 대한 기관 승인 여부를 Part 5 배포 전에 확인합니다.
  deployment: {
    orgApprovalCheckRequired: true,
  },
} as const;
