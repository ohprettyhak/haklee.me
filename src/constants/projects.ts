import { CommonAttributes } from '@/constants/_types';

export enum PROJECT_TYPE {
  SIDE_PROJECT = '사이드 프로젝트',
  OUTSOURCING_PROJECT = '외주 프로젝트',
}

export interface Project extends CommonAttributes {
  type: PROJECT_TYPE;
}

export const PROJECTS: Project[] = [
  {
    title: '훕치치(HUFSCHEER) 웹 프론트엔드 개발',
    description:
      '한국외국어대학교 서울캠퍼스 교내 스포츠 대회 실시간 중계 서비스',
    period: {
      start: '2024.01.',
      end: '현재',
    },
    technologies: ['typescript', 'next.js', 'vite', 'pnpm'],
    responsibilities: [
      '공통 컴포넌트를 포함한 디자인 시스템 구현',
      '관리자(매니저) 페이지 구현',
    ],
    links: {
      website: 'https://hufscheer.site',
      github: 'https://github.com/hufscheer/client_v2',
    },
    type: PROJECT_TYPE.SIDE_PROJECT,
    members: '7명 (프론트 3, 백엔드 3, 디자인 1)',
  },
  {
    title: '성남아이스하키리그(SNHL)  웹 프론트엔드 개발',
    description:
      '경기도 성남시 체육회 소속의 아이스 하키 리그 정보(팀, 라인업, 경기 결과 등) 서비스',
    period: {
      start: '2023.07.',
      end: '2023.09.',
    },
    technologies: ['typescript', 'vite', 'firebase'],
    responsibilities: ['사용자 및 관리자 페이지 구현'],
    links: {
      website: 'https://snhl.kr/',
    },
    type: PROJECT_TYPE.OUTSOURCING_PROJECT,
    members: '3명 (프론트 1, 백엔드 1, 디자인 1)',
  },
  {
    title: '칼국수(Calguksu)  웹 프론트엔드 개발',
    description:
      '한국외국어대학교 학사 일정을 개인 캘린더에 추가할 수 있는 구독형 캘린더 서비스',
    period: {
      start: '2023.03.',
      end: '2024.04.',
    },
    technologies: ['typescript', 'vite', 'styled-components'],
    responsibilities: [
      '캘린더 구독 페이지 구현',
      '화면 전환(FullyFlow) 및 버튼, 입력 등 디자인 컴포넌트 구현',
    ],
    links: {
      website: 'https://calguksu.com/',
      github: 'https://github.com/hufsdevelopers/calguksu-frontend',
    },
    type: PROJECT_TYPE.SIDE_PROJECT,
    members: '3명 (프론트 1, 백엔드 1, 디자인 1)',
  },
];
