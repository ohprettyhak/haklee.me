---
cover: '/project/2024-codefestival/cover.webp'
description: '한국외국어대학교 제6회 코드페스티벌 지원 페이지'
duration: '2024.10. - 2024.10.'
title: '한국외국어대학교 코드페스티벌'
type: '사이드 프로젝트'
team: '프론트 및 디자인 단독 개발'
links:
  - type: Github
    link: 'https://github.com/GDGHUFS/CodeFestival-Web'
  - type: Demo
    link: 'https://codefestival.gdghufs.com/'
---

## 🔖 개요

제가 참여하고 있는 <a href="https://gdghufs.com" target="_blank" rel="noreferrer noopener">GDG on Campus HUFS</a>에서는 매년 가을 HUFS
CodeFestival이라는 이름의 알고리즘 대회를 개최합니다. 올해 열리는 여섯 번째 대회에 운영진으로 참여하였고, 문제 출제와 검수, 그리고 사용자의 참가 신청을 받고 대회를 소개하는 홈페이지를 개발하는 역할을
맡았습니다.

사용자가 페이지에 접속했을 때 참여 시간을 늘리기 위해서는 시선을 집중할 수 있는 요소가 필요하다고 생각했습니다. 이를 3D 그래픽을 활용하고자 했고, `Three.js`와 `React Three Fiber`를
사용해 메인 화면의 대회 로고를 회전시키는 애니메이션을 구현했습니다.

## 📅 기간

2024.10. - 2024.10.

페이지 개발은 참가 신청 시작일인 10월 14일 전까지 끝내야 했는데요, 아이디어 논의가 10월 초에 시작되어 촉박한 일정이었습니다. 저의 수면 시간과 디자인 및 개발 리소스를 치환했습니다.

## 📚 기술 스택

`Next.js, vanilla-extract, Three.js, React Three Fiber`

프론트엔드에서 사용된 기술 스택은 위와 같습니다.

페이지의 목적이 대회 지원 폼으로 연결하는 것이었지만, 대회가 종료된 후에도 정보를 확인할 수 있는 보존의 역할도
컸습니다. <a href="https://developer.mozilla.org/ko/docs/Glossary/SEO" target="_blank" rel="noreferrer noopener">SEO(검색 엔진
최적화)</a>를 위해 `Next.js` 프레임워크를 도입하였고, 의도대로 구글 검색에 <ins>코드페스티벌</ins>을 검색했을 때 아래와 같이 나타나고 있습니다.

![코드페스티벌 검색 결과](/project/2024-codefestival/search.webp)

## 🌌 Three.js

<video autoplay loop playsinline muted>
  <source src="/project/2024-codefestival/animation.webm" type="video/webm" />
  <source src="/project/2024-codefestival/animation.mp4" type="video/mp4" />
  이 비디오가 보이지 않나요? 이슈로 알려주세요. 😢
</video>
<br/>

이번 프로젝트에서 도전적인 부분은 <a href="https://threejs.org/" target="_blank" rel="noreferrer noopener">Three.js</a>를 사용하여 애니메이션을
구현하는 부분이었습니다. `Three.js`는 웹 브라우저에서 3D 그래픽을 렌더링하기 위한
라이브러리로, <a href="https://www.khronos.org/webgl/" target="_blank" rel="noreferrer noopener">WebGL</a>을 기반으로 합니다.

처음 다루다보니 이 부분에서 시간을 가장 많이 썼고, 그만큼 보람있었습니다. 제가 애니메이션을 구현하기 위해 진행한 방법은 아래와 같습니다.

#### ① 로고 생성

피그마에서 로고를 `svg` 파일로 추출하고, `Three.js`의 `Shape` 클래스를 사용하여 로고를 그렸습니다.

```ts showLineNumbers
const shape = new THREE.Shape();
shape.moveTo(18.9, 9.7);
shape.lineTo(30.5, 9.7);
shape.lineTo(30.5, 0.2);
shape.lineTo(0.7, 0.2);
shape.lineTo(0.7, 73.5);
shape.lineTo(30.5, 73.5);
shape.lineTo(30.5, 64.3);
shape.lineTo(18.9, 64.3);
shape.lineTo(18.9, 9.7);
```
