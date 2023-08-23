<h1> 🚖 QR코드로 한 번에! 큐택 </h1>

<h3> 1️⃣ 큐택 사용방법</h3>

<div><strong>큐택 QR코드만 스캔하세요!</strong> <br/> 전화번호만 입력하면 QR코드가 부착된 장소로 주변 택시에 호출 콜을 보내요.</div> <br/>

![핵심기능 플로우1](https://github.com/QRTaxi/QRTaxi_Web/assets/87803596/0d9741a4-018c-49f2-a320-2830911c71e8)

<h3> 2️⃣ 호출 후 플로우</h3>

<div><strong>조금만 기다리시면 택시가 배정돼요.</strong> <br/> 이후엔 일반 택시를 이용하는 것처럼 이용하시면 돼요. 호출에 실패했더라도 다시 호출할 수 있어요!</div> <br/>

![핵심기능 플로우2](https://github.com/QRTaxi/QRTaxi_Web/assets/87803596/cb2ad6cd-58d6-4848-93bd-8e62b9aca964)
</br>

## 🚖 큐택 Web 구성원

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/HiimKwak">
              <img src="https://github.com/QRTaxi/QRTaxi_Web/assets/87803596/771a7c9f-a581-49f5-9163-977bbc9c6e0d" width="200">
              <br />
              <b>HiimKwak</b>
            </a>
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/zizonyoungjun">
              <img src="https://github.com/QRTaxi/QRTaxi_Web/assets/87803596/5de18e13-e128-46bb-a742-30f721c3501b" width="200">
              <br />
              <b>zizonyoungjun</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            곽민규 <br/>
            Web FE
      </td>
        <td>
            한영준 <br />
            Web FE
        </td>
    </tr>
</table>

## 💻 기술 스택

```
  "dependencies": {
    "axios": "^1.4.0",
    "firebase": "^10.1.0",

    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2",

    "recoil": "^0.7.7",
    "recoil-persist": "^5.1.0",

    "styled-components": "^6.0.5",
    "lottie-react": "^2.4.0",

    "vite-plugin-svgr": "^3.2.0"
  },
  "devDependencies": {
    "typescript": "^5.0.2",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",

    "eslint": "^8.45.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.1.0",
    "eslint-config-prettier": "^8.9.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-react": "^7.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",

    "husky": "^8.0.3",
    "lint-staged": "^13.2.3",
    "prettier": "^3.0.0",

    "react-icons": "^4.10.1",

    "vite": "^4.4.5",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "vite-tsconfig-paths": "^4.2.0"
  }
```

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
