# Vue 3를 Vue 2와 비교했을 때 장점

1) 성능 개선
2) Vue 3는 Composition API 도입
   기능별로 코드 구성 => 재사용성, 가독성 높아짐. React의 훅과 유사
3) 프록시 기반 반응성 시스템
   Vue 2: Object.defineProperty 사용. 깊은 중첩 객체, 특정 배열 메서드의 반응성 처리에 제한
   Vue 3: 깊은 중첩 객체 반응성 처리 성능 개선
4) 여러 루트 엘리먼트를 지원하는 Fragment 기능
5) 컴포넌트의 렌더링 위치를 지정하는 Teleport 기능

# Vue 3 - Typescript 프로젝트 파일 구조

Github 참고
https://github.com/xsf0105/my-vue3-template

# Figma Builder.io 플러그인

설계한 UI 화면 Vue 코드 카피

# IntelliJ - GitHub 연동

https://brunch.co.kr/@mystoryg/168

# IntelliJ - Pull Request

https://ddoriya.tistory.com/entry/IntelliJ-Git-pull-request-%ED%95%98%EA%B8%B0

# IntelliJ 얼티밋 버전 설치

커뮤니티 버전은 Vue, TypeScript 관련 플러그인 지원 안 함..

# IntelliJ 플러그인

Grep Console - 콘솔 색상 구분

# Element-Plus 설치 및 적용

https://element-plus.org/en-US/guide/installation.html
https://element-plus.org/en-US/guide/quickstart.html

# IntelliJ - 파일 저장 시 코드 정렬

설정 - 도구 - 저장 시 액션 - 코드 서식 다시 지정, Prettier 실행

# GitHub 연동

git config --global user.name name
git config --global user.email (깃허브 이메일)

# HTTP 클라이언트 라이브러리 - Axios, Fetch, Ajax

1) Axios: 브라우저와 Node.js 환경 모두에서 HTTP 요청을 보내기 위한 JavaScript 라이브러리
   비동기적으로 데이터를 가져오고, 서버와 통신하며 RESTful API 다루기 용이
    - Promise API 사용하여 async/await 구문 사용
    - 요청과 응답에 대해 인터셉터 설정. 요청 전이나 응답 후에 추가 로직 실행
    - JSON 데이터를 자동으로 직렬화/역직렬화
    - CRSF(Cross-Site Request Forgery) 보호 기능 내장

2) Fetch: 브라우저 내장 API
   Promise API 기반
   인터셉터, JSON 자동 변환등 고급 기능 부족

3) Ajax: jQuery 라이브러리에 포함된 기능
   jQuery 라이브러리를 포함해야 하므로, 현대 프로젝트에서는 권장되지 않음.

# Store(Pinia) 사용 방법

src > stores > store.ts - pinia 설정(인스턴스 생성)
src > stores > modules > common.ts

진행중 에러

1) Uncaught Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store
   before
   calling "app.use(pinia)"?
   컴포넌트(store) 외에서 모듈 호출 시 pinia 가 아직 정의되지 않았다는 에러.
   => 모듈 생성인자에 pinia 인스턴스 포함. commonStore(store)

# Axios 사용 방법

npm install axios
src > axios > router.ts - axios 설정(인스턴스 생성, 인터셉터 추가)
src > axios > restfulAPI.ts

진행중 에러

1) Vue: 'AxiosInstance' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.
   'verbatimModuleSyntax'는 type-only imports 및 exports를 강제하는 설정.
   => import 요소 앞에 type 명시.
2) Vue: Argument of type '(config: AxiosRequestConfig) =&gt; AxiosRequestConfig&lt;any&gt;' is not assignable to
   parameter of type '(value: InternalAxiosRequestConfig&lt;any&gt;)
   Axios의 AxiosRequestConfig 타입과 InternalAxiosRequestConfig 타입이 서로 호환되지 않아서 발생.
   Axios의 최신 버전에서는 내부적으로 사용하는 타입이 다를 수 있음.
   => AxiosRequestConfig 대신 InternalAxiosRequestConfig 타입 사용.

# export, export default 차이

export: 이름이 지정된 개체를 내보냅니다. import { ... } from '모듈'; 형태로 가져옵니다.
export default: 모듈에서 기본적으로 내보내는 단일 개체를 정의합니다. import 이름 from '모듈'; 형태로 가져옵니다.

# moment.js 설치

npm install moment

# Composition API