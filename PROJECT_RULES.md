# 프로젝트 작업 규칙

이 문서는 이후 프로젝트 코드 작업 전에 참고합니다.

1. HTML, CSS, JavaScript는 각각 별도 파일로 작성합니다.
2. `index.html`은 프로젝트 루트에 두고, 애플리케이션 CSS와 JavaScript는 `src/`에 둡니다. `vite.config.js` 등 설정 파일은 프로젝트 루트에 둡니다.
3. JavaScript는 ES 모듈 방식으로 연결합니다. CSS는 JavaScript 진입 파일에서 import하여 Vite 빌드에 포함합니다.
4. 외부 JavaScript 라이브러리는 CDN을 사용하지 않고 `npm install`로 설치한 뒤 import합니다.
5. 작업 전 기존 파일과 설정을 확인하고, 필요한 부분만 수정합니다.

## Netlify 배포

- Build command: `npm run build`
- Publish directory: `dist`
