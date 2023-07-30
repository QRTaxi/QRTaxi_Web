# 🚖 QRTaxi - 큐택 웹

큐택은 QR코드로 택시를 호출할 수 있는 택시 호출 서비스입니다.
</br>

## 🚖 큐택의 핵심 기능

</br>

## 💻 기술 스택

<div style='flex'>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" >
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">

<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white">

</div>

## 🚖 구성원 및 역할분담

</br>

## 📌 컨벤션

### 커밋 컨벤션

| 태그 이름        | 설명                                                                                                     | 타입 |
| ---------------- | -------------------------------------------------------------------------------------------------------- | ---- |
| Feat             | 새로운 기능을 추가할 경우                                                                                | 기능 |
| Fix              | 버그를 고친 경우                                                                                         | 기능 |
| Design           | CSS 등 사용자 UI 디자인 변경                                                                             | 기능 |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                                                   | 기능 |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                                                                   | 기능 |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 오타 수정, 탭 사이즈 변경, 변수명 변경 등 코어 로직을 안건드는 변경 사항 | 개선 |
| Refactor         | 프로덕션 코드 리팩토링                                                                                   | 개선 |
| Comment          | 필요한 주석 추가 및 변경                                                                                 | 개선 |
| Docs             | 문서(Readme.md)를 수정한 경우                                                                            | 수정 |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                                       | 수정 |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                                                       | 수정 |
| Test             | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)                                                       | 빌드 |
| Chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)                                | 빌드 |

### 네이밍 컨벤션

1. **\*.tsx** : PascalCase
2. **\*.ts** : camelCase
3. 페이지 폴더 (**pages/**/**\***.tsx\*\*) : index.tsx
4. 나머지 폴더 : **kebab-case**
5. constants : camelCase
6. git branch name : kebab-case

### 폴더 구조

```
├── 📁 .husky
├── 📁 node_modules
├── 📁 src
│  ├── 📁 assets
│  │   ├── 📁 contants
│  │   ├── 📁 fonts
│  │   └── 📁 images
│  ├── 📁 components
│  │   ├── 📁 common
│  │   ├── 📁 ...
│  │   └── ...
│  ├── 📁 pages
│  │   ├── 📁 home
│  │   ├── 📁 ...
│  │   ├── 📁 ...
│  │   ├── 📁 ...
│  ├── 📁 utils
│  │   ├── 📁 hooks
│  │   ├── 📁 recoil
│  │   ├── 📁 types
│  ├── 📁 styles
│  │  ├── globalStyle.ts
│  │  ├── style.d.ts
│  │  └── theme.ts
│  ├── App.tsx
│  ├── main.tsx
│  └── vite-env.d.ts
├── .eslintrc.sjs
├── .gitgnore
├── .prettierrc
├── index.html
├── package.json
├── README.md
├── tsconfjg.json
├── tsconfjg.node.json
├── vite.config.js
└── yarn.lock
```

### 큐택 웹 git 규칙

1. 작업 브랜치 분기는 무조건 main 브랜치에서 분기할 것.
2. 하나의 브랜치에 하나의 기능만 구현하기.
3. PR 및 remote main에 merge 후 반드시 fast-forward 시켜주기.
4. 커밋 메세지 준수할 것.

</br>
</br>
