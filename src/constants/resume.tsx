import { GDGLogo, HUFSLogo, HUFStoryLogo } from '@/components/icons';
import { theme } from '@/styles';

const RESUME = [
  {
    id: 'education',
    title: 'Education.',
    items: [
      {
        id: 'HUFS GLOBAL',
        duration: '2019.03. — 2025.02. (예정)',
        logo: <HUFSLogo size={20} fill={theme.colors.hufs} />,
        title: '한국외국어대학교 글로벌캠퍼스',
        description: '컴퓨터.전자시스템공학부 학사과정 졸업 예정 (4.17/4.5)',
      },
    ],
  },
  {
    id: 'activities',
    title: 'Activities.',
    items: [
      {
        id: 'GDGoc HUFS 24-25',
        duration: '2024.08. — now',
        logo: <GDGLogo size={20} />,
        title: 'GDG on Campus HUFS 24-25',
        description: '코어 팀 멤버로 활동, 소모임 개설 및 운영',
        subItems: [
          {
            id: 'code_festival',
            title:
              '2024 제6회 코드페스티벌 페이지 개발 (<a href="https://codefestival.gdghufs.com" target="_blank" rel="noreferrer noopener">Link</a>, <a href="https://github.com/GDGHUFS/CodeFestival-Web" target="_blank" rel="noreferrer noopener">Github</a>)',
          },
          {
            id: 'boo_design',
            title:
              'Boo 디자인 시스템 개발 (<a href="https://github.com/GDGHUFS/boo-design" target="_blank" rel="noreferrer noopener">Github</a>)',
          },
        ],
      },
      {
        id: 'HUFStory',
        duration: '2023.03. — 2023.12.',
        logo: <HUFStoryLogo size={20} fill={theme.colors.background} />,
        title: '한국외국어대학교 학생 IT자치기구 훕스토리',
        description: `대학생 매칭 서비스 ‘외출’ 웹 프론트엔드 개발 (<a href="https://oechul.com" target="_blank" rel="noreferrer noopener">Link</a>)`,
      },
    ],
  },
];

export default RESUME;
