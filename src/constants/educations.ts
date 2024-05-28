import { Period } from '@/constants/_types';

export interface Education {
  school: string;
  major: string;
  gpa: string;
  doubleMajor?: string;
  location: string;
  period: Period;
  link: string;
}

export const EDUCATIONS: Education[] = [
  {
    period: {
      start: '2019.03.',
      end: '2025.02.\n(예정)',
    },
    school: '한국외국어대학교',
    major: '컴퓨터.전자시스템공학부',
    gpa: '4.15/4.5',
    doubleMajor: 'Language&AI',
    location: '경기도 용인시',
    link: 'https://hufs.ac.kr',
  },
];
