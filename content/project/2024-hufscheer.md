---
cover: '/content/project/2024-hufscheer/cover.webp'
description: '한국외국어대학교 교내 스포츠 대회 실시간 중계 서비스'
duration: '2024.01. - Now'
title: '훕치치(HUFSCHEER)'
type: '사이드 프로젝트'
team: '프론트 3, 백엔드 4, 디자인 2, 기획 1'
links:
  - type: Demo
    link: 'https://hufscheer.com/'
  - type: Github
    link: 'https://github.com/hufscheer/web'
---

## 🔖 개요

한국외국어대학교에서는 여러 스포츠 대회가 주기적으로 열립니다. 학교의 활기를 높이는 이 대회들은 많은 학생이 응원하는 관심사이기도 한데요, 훕치치는 수업이나 일정이 있어 직접 경기장에 가지 못하는 학생들을 위한 중계
서비스입니다.

저는 2차 릴리즈가 끝난 후인 올해 1월 팀에 합류하였고, 본격적으로 서비스를 확장하는 과정에 있었기 때문에 새로운 리포지터리에 새로워진 디자인을 구현하는 역할을 맡았습니다.

## 📅 기간

2024.01 - Now

2024년 3월에 3차 릴리즈를 진행했으며, 9월에는 새로운 디자인을 적용한 4차 릴리즈를 진행하였습니다.

3차 릴리즈 이후 `2024 외대 월드컵`, `2024 BEBADIS(상경X경영X국제 연합행사)`를 운영했습니다. 당시 6천명 이상의 사용자(Cloudflare Visitor 기준)가 방문하였고, 4차 릴리즈 이후
`2024 삼건물대회`, `2024 EURO CUP`을 진행하여 누적 1만명 이상의 사용자를 경험했습니다.

## 📚 기술 스택

`TypeScript, Next.js, Tanstack Query, vanilla-extract`

프론트엔드에서 사용된 기술 스택은 위와 같습니다.

<a href="https://pnpm.io/" target="_blank" rel="noreferrer noopener">pnpm</a>
과 <a href="https://turbo.build/" target="_blank" rel="noreferrer noopener">Turborepo</a>를 이용해 모노레포 환경을 구축하였고, `apps` 패키지
내에는 관리자 및 사용자 앱을, `packages` 패키지 내에는 공용으로 사용하는 패키지를 작성했습니다. 터보레포를 선택한
이유는 <a href="https://hufscheer-techblog.vercel.app/turborepo" target="_blank" rel="noreferrer noopener">프론트엔드 팀의 좌충우돌
모노레포 변천사</a>를 확인해주세요!

## 🏗️ 이벤트 스토밍(Event Storming)

> [!TIP]
> 이벤트 스토밍: 서비스에서 발생하는 이벤트를 중심으로 분석하는 기법

2차 릴리즈 이후 팀에 합류했을 때 가장 어려웠던 부분은 기존 코드를 파악하는 것보다 용어를 정리하는 일이었습니다. 훕치치는 대회 안에 게임이 종속되는데요, 이 게임 안에 응원톡이 있습니다.

여기에서 용어에 혼란이 있었습니다. '리그'와 '대회', '리그팀'과 '대회팀', 특히 응원톡의 경우, 기획자는 '응원톡' 이라는 용어를 사용하고 있었고, 프론트엔드 팀에서는 '채팅', 백엔드 팀에서는 '소켓'이라는
용어를 사용했습니다.

합류 초반이었지만 저만 느끼는 문제는 아닐 것으로 생각하여 팀원에게 내용을 공유했습니다. 백엔드 팀원 한 분이 이벤트 스토밍 워크숍을 제안하셨고, 이를 진행하여 '대회', '게임', '응원톡' 등의 용어를 정리했습니다(<a href="https://heethehope.notion.site/e37ec1a13926413595e89682f987d6af" target="_blank" rel="noreferrer noopener">
관련 문서</a>).

3차 릴리즈 이후 팀을 응원하는 응원 횟수 부분에 버그가 있었습니다. '응원 횟수 API에 음수가 들어오지 못하도록 수정해 주세요.'와 같이 전달할 수 있었고, 통일된 용어로 인해 혼란 없이 해결했던 기억이 있습니다. 적극적으로 질문하고 참여하는 것이 중요하다는 것을 다시 한번 느끼는 지점이었습니다.
