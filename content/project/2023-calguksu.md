---
cover: '/content/project/2023-calguksu/cover.webp'
description: '산재된 일정을 하나로 통합하기 위한 솔루션'
duration: '2023.03. - Now'
title: '칼국수 - 캘린더 구독 서비스'
type: '사이드 프로젝트'
team: '프론트 1, 백엔드 1, 디자인 1'
links:
  - type: Demo
    link: 'https://calguksu.com/'
  - type: Github
    link: 'https://github.com/hufsdevelopers/calguksu-frontend'
---

## 🔖 개요

2023년 복학 후, 학업과 외주 업무를 병행했습니다. 일정 관리는 저에게 큰 도전이었는데요, 그중에서도 계속해서 변경되는 학사 일정은 하나의 골칫거리였습니다.

칼국수는 이 문제를 해결하기 위해
탄생한 <a href="https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%BA%98%EB%A6%B0%EB%8D%94" target="_blank" rel="noreferrer noopener">
iCal</a> 기반의 구독 캘린더입니다. 1시간 단위로 동작하는 크롤러가 학사 일정을 수집하고, 수집된 데이터는 사용자의 애플 캘린더 혹은 구글 캘린더와 동기화됩니다.

2024년 12월 14일 기준 600명이 넘는 사용자가 이용하고 있습니다.

## 📅 기간

2023.03. - Now  
아이디어를 빠르게 구현하여 이틀이 채 되지 않은 시간에 서비스를 런칭했습니다. 2024년 4월에는 새로운 디자인을 적용하여 현재 모습이 되었습니다.

## 📚 기술 스택

`React, Next.js, TypeScript, styled-components`

프론트엔드에서 사용된 기술 스택은 위와 같습니다.

<a href="https://developer.mozilla.org/ko/docs/Glossary/SEO" target="_blank" rel="noreferrer noopener">SEO(검색 엔진
최적화)</a>를 위해 `Next.js` 프레임워크를 도입했습니다. 지금은 *구독*을 위한 정적 페이지만 제공하고 있어 프레임워크 도입이 다소 오버엔지니어링이 되었다고 생각합니다.

학생회와 같은 단체에서 직접 캘린더를 생성하고 배포할 수 있도록 관리자 페이지를 추가하고 있고, 이 과정에서 `Next.js`의 장점을 적극적으로 활용하려 합니다.

## 🌊 FullyFlow
