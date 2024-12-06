import { GDGLogo, HUFSLogo, HUFStoryLogo, KNTOLogo, NylonBricksLogo } from '@/components/icons';
import { theme } from '@/styles';

const Constants = [
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
        subItems: [
          {
            id: 'double-major',
            title: '언어와공학(Language&AI) 이중전공',
          },
        ],
      },
    ],
  },

  {
    id: 'experience',
    title: 'Experience.',
    items: [
      {
        id: 'nylon-bricks',
        duration: '2024.05. — Now',
        logo: <NylonBricksLogo height={13} width={20} />,
        title: '나일론브릭스 (개인사업자)',
        description: '생산성 향상을 위한 웹 기반 라이브러리 개발팀',
        subItems: [
          {
            id: 'semantic',
            title:
              '<a href="https://semantic.nylonbricks.com" target="_blank" rel="noreferrer noopener">semantic</a>: GatsbyJS 기반의 커스텀 블로그 테마',
          },
          {
            id: 'remark-blockquote-alerts',
            title:
              '<a href="https://github.com/nylon-bricks/remark-blockquote-alerts" target="_blank" rel="noreferrer noopener">remark-blockquote-alerts</a>: <a href="https://github.github.com/gfm/" target="_blank" rel="noreferrer noopener">GFM</a>과 동일한 블록 강조를 지원하는 remark 라이브러리',
          },
        ],
      },
    ],
  },

  {
    id: 'activities',
    title: 'Activities.',
    items: [
      {
        id: 'GDGoc HUFS 24-25',
        duration: '2024.08. — Now',
        logo: <GDGLogo height={12} width={20} />,
        title: 'GDG on Campus HUFS 24-25',
        description: '코어 팀 멤버로 활동, 소모임 개설 및 운영',
        subItems: [
          {
            id: 'code_festival',
            title:
              '2024 제6회 코드페스티벌 페이지 개발 및 운영 (<a href="https://codefestival.gdghufs.com" target="_blank" rel="noreferrer noopener">Link</a>, <a href="https://github.com/GDGHUFS/CodeFestival-Web" target="_blank" rel="noreferrer noopener">Github</a>)',
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

  {
    id: 'awards',
    title: 'Awards.',
    items: [
      {
        id: '2024-22th-topcit',
        duration: '2024.11.18.',
        logo: <HUFSLogo size={20} fill={theme.colors.hufs} />,
        title: '제22회 TOPCIT 정기평가 성적우수자',
        description: `한국외국어대학교 AI교육원`,
        subItems: [
          {
            id: '2024-22th-topcit-1',
            title: '단체접수 응시자 상위10%',
          },
        ],
      },
      {
        id: '2023-winter-hufstudy',
        duration: '2024.02.14.',
        logo: <HUFSLogo size={20} fill={theme.colors.hufs} />,
        title: '2023 겨울방학 HUFStudy 최우수상',
        description: '한국외국어대학교 교육혁신원',
        subItems: [
          {
            id: '2023-winter-hufstudy-1',
            title: '컴퓨터 공학, 외국어 학습, 비즈니스 상황에서의 ChatGPT 활용 사례 연구',
          },
        ],
      },
      {
        id: '2023-tourapi',
        duration: '2023.11.29.',
        logo: <KNTOLogo size={20} />,
        title: '2023 관광데이터 활용 공모전 장려',
        description: `한국관광공사, 카카오`,
        subItems: [
          {
            id: '2023-tourapi',
            title: `실시간 맞춤형 혼행 서비스 '타치(TACHI)' 백엔드 개발`,
          },
        ],
      },
    ],
  },
];

export default Constants;
