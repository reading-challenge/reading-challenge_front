// Axios Response 데이터 형식
// config: 요청에 대한 axios 구성 설정
// data: 서버가 제공한 응답 데이터
// headers: 헤더 정보
// request: 요청
// status: 응답 HTTP 상태 코드
// statusText: 응답 HTTP 상태 메시지

// 서버에서 수신받는 항목
export interface APIResponse<T> {
  status?: number // 서버 상태 코드
  statusText?: string // 서버 상태
  errCode?: string // 에러 코드
  errMessage?: string // 에러 메세지
  timestamp?: string // 수신 시간
  recvData?: T // 서버에서 받은 데이터
}
