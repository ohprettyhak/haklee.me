import { CommonAttributes } from '@/constants/_types';

export interface Award extends CommonAttributes {
  host: string;
}

export const AWARDS: Award[] = [
  {
    title: '2023 관광데이터 활용 공모전 장려',
    description: "실시간 맞춤형 혼행 서비스 '타치(TACHI)' 백엔드 개발",
    host: '한국관광공사, 카카오',
    period: {
      start: '2023.11.29.',
      end: '2023.11.29.',
    },
    technologies: ['kotlin', 'spring-boot', 'firebase'],
    responsibilities: [
      '코틀린을 이용한 Spring Boot 프레임워크 기반 백엔드 서버 개발',
      'Firebase Admin SDK 및 카카오 로그인 API 연동',
    ],
    links: {
      application:
        'https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000772212',
      github: 'https://github.com/project-tachi/tachi-backend',
    },
    members: '5명 (프론트 1, 백엔드 1, 기획 3)',
  },
];
