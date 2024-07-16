# Kfe-bootup
HTML/CSS/JavaScript만을 사용하여 웹사이트를 구현하고, 리액트 개발환경을 직접 세팅한 프로젝트입니다.
## 1-dom
### 프로젝트 구조
- 웹사이트의 제목은 Kernel360 Web Dev Base로 설정
- 모든 CSS 스타일은 styles.css 파일에 작성
- 모든 JavaScript 코드는 하나의 <script>태그 내에 작성
### 화면 구현
- 새로고침 할 때마다 1에서 16까지 총 16개의 사각형이 Grid 형태로 화면에 표시됨
- 각 사각형은 red, green, blue 중 하나의 배경 색을 랜덤으로 가짐
- 각 사각형은 bold, italic, strike, underline 중 하나의 텍스트 스타일을 랜덤으로 가짐
### Dom Manipulation
- 특정 ID 값에 해당되는 사각형의 배경색을 변경하는 기능 적용
- 특정 class를 가진 사각형들의 텍스트 스타일을 한 번에 변경하는 기능 적용
- 특정 selector에 해당되는 사각형들의 스타일을 한 번에 초기화 하는 기능 적용
## 2-babel-webpack
### 수행 내용
- webpack-cli 설치 및 설정파일 작성, 라이브러리 적용
- babel-loader, @babel/core 설치 및 프리셋 적용
- Babel을 적용하기 전과 후의 코드 비교
## 3-react-app
