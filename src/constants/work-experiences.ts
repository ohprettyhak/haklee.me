import { CommonAttributes } from '@/constants/_types';

export interface WorkExperience
  extends Omit<CommonAttributes, 'members' | 'description'> {
  organization: string;
  location: string;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    title: '대학생 매칭 서비스 ‘외출’ 웹 프론트엔드 개발',
    organization: '한국외국어대학교 IT학생자치기구 훕스토리',
    location: '경기도 용인시',
    period: {
      start: '2023.03.',
      end: '현재',
    },
    technologies: ['typescript', 'vite', 'pnpm'],
    responsibilities: [
      '초기 기획 참여, 초기 개발 환경 세팅',
      'pnpm workspace 기반 모노레포 환경 구축',
      '공통 컴포넌트를 포함한 디자인 시스템 구현',
    ],
    links: {
      website: 'https://oechul.com',
      github: 'https://github.com/oechul-com/oechul-frontend',
    },
  },
];
