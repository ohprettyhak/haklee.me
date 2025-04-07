import {
  ContentlayerLogo,
  GDGLogo,
  GovernmentLogo,
  HUFSLogo,
  KDataLogo,
  KNTOLogo,
  MDNLogo,
  NylonBricksLogo,
  ThymedeskLogo,
  TossLogo,
  VercelLogo,
} from '@haklee/icon';

import { theme } from '@/styles';

export const REACH = {
  id: 'reach',
  title: 'Reach.',
  items: [
    {
      id: 'phone',
      title: 'Phone',
      value: '+82-10-6454-9806',
      link: 'tel:+82-10-6454-9806',
    },
    {
      id: 'email',
      title: 'Email',
      value: 'me@haklee.me',
      link: 'mailto:me@haklee.me',
    },
    {
      id: 'address',
      title: 'Address',
      value: '서울, 대한민국',
    },
  ],
};

export const RESUME = [
  {
    id: 'education',
    title: 'Education.',
    items: [
      {
        id: 'HUFS GLOBAL',
        duration: '2019.03. - 2025.02. (수료)',
        logo: <HUFSLogo size={20} style={{ color: theme.color.brand.hufs }} />,
        title: '한국외국어대학교 글로벌캠퍼스',
        description: '컴퓨터.전자시스템공학부 학부과정 수료 (GPA 4.05/4.5)',
        subItems: [
          {
            id: 'double-major',
            title: '언어와공학(Language&AI) 이중 전공',
          },
          {
            id: 'description',
            title:
              '데이터 통신, 운영체제를 비롯한 컴퓨터 공학에 대해 이해하고 있으며, 이중 전공을 통해 자연어 처리 및 AI 개론을 이해했습니다.',
          },
        ],
      },
    ],
  },

  {
    id: 'open-source',
    title: 'Open Source Contribution.',
    items: [
      {
        id: 'vercel',
        duration: '',
        logo: <VercelLogo height={17} width={20} />,
        title: 'Vercel',
        description: '코드 개선 및 문서 불일치 문제 해결',
        subItems: [
          {
            id: 'vercel-2',
            title:
              'Merged <a href="https://github.com/vercel/turborepo/pull/10297" target="_blank" rel="noreferrer noopener">vercel/turborepo#10297</a> fix(docs): fix SVG attribute casing to remove React warnings',
          },
          {
            id: 'vercel-1',
            title:
              'Issue Closed <a href="https://github.com/vercel/analytics/issues/150" target="_blank" rel="noreferrer noopener">vercel/analytics#150</a> Add Usage Guide for `@vercel/analytics` Exports in next and server Environments',
          },
        ],
      },
      {
        id: 'toss',
        duration: '',
        logo: <TossLogo height={16} width={20} />,
        title: 'Toss',
        description: '코드 개선 및 문서 수정',
        subItems: [
          {
            id: 'toss-3',
            title:
              'Merged <a href="https://github.com/toss/es-toolkit/pull/1106" target="_blank" rel="noreferrer noopener">toss/es-toolkit#1106</a> fix(docs): update dark theme `color-scheme` for `Sandpack`',
          },
          {
            id: 'toss-2',
            title:
              'Merged <a href="https://github.com/toss/frontend-fundamentals/pull/124" target="_blank" rel="noreferrer noopener">toss/frontend-fundamentals#124</a> fix: update giscus theme to change dynamically based on page theme',
          },
          {
            id: 'toss-1',
            title:
              'Merged <a href="https://github.com/toss/frontend-fundamentals/pull/87" target="_blank" rel="noreferrer noopener">toss/frontend-fundamentals#87</a> typo: standardize \'한눈에\' phrasing for clarity',
          },
        ],
      },
      {
        id: 'asdf-vm',
        duration: '',
        logo: <span style={{ width: 20, textAlign: 'center' }}>📦</span>,
        title: 'asdf-vm',
        description: 'asdf version manager 가이드 문서 수정',
        subItems: [
          {
            id: 'asdf-vm-1',
            title:
              'Merged <a href="https://github.com/asdf-vm/asdf/pull/1938" target="_blank" rel="noreferrer noopener">asdf-vm/asdf#1938</a> fix: correct typo in `Upgrading to 0.16.0` documentation',
          },
        ],
      },
      {
        id: 'contentlayer',
        duration: '',
        logo: <ContentlayerLogo height={20} width={20} />,
        title: 'Contentlayer',
        description: '패키지 버전 문제로 인한 의존성 오류 해결',
        subItems: [
          {
            id: 'contentlayer-1',
            title:
              'Merged <a href="https://github.com/timlrx/contentlayer2/pull/60" target="_blank" rel="noreferrer noopener">timlrx/contentlayer2#60</a> build: update `@opentelemetry` dependencies',
          },
        ],
      },
      {
        id: 'mdn',
        duration: '',
        logo: <MDNLogo height={15.5} width={20} />,
        title: 'MDN Web Docs',
        description: 'Web 기술 문서 번역 및 기여',
        subItems: [
          {
            id: 'mdn-5',
            title:
              'Merged <a href="https://github.com/mdn/translated-content/pull/26141" target="_blank" rel="noreferrer noopener">mdn/translated-content#26141</a> [ko] update web/css/color_value/oklab',
          },
          {
            id: 'mdn-4',
            title:
              'Merged <a href="https://github.com/mdn/translated-content/pull/26130" target="_blank" rel="noreferrer noopener">mdn/translated-content#26130</a> [ko] update web/api/mediastream_recording_api',
          },
          {
            id: 'mdn-3',
            title:
              'Merged <a href="https://github.com/mdn/yari/pull/12183" target="_blank" rel="noreferrer noopener">mdn/yari#12183</a> fix(i10n): localize secureContext header and inline text in ko',
          },
          {
            id: 'mdn-2',
            title:
              'Merged <a href="https://github.com/mdn/content/pull/37111" target="_blank" rel="noreferrer noopener">mdn/content#37111</a> fix(i10n): add Korean localization for secure_context text',
          },
          {
            id: 'mdn-1',
            title:
              'Merged <a href="https://github.com/mdn/translated-content/pull/24616" target="_blank" rel="noreferrer noopener">mdn/translated-content#24616</a> [ko] update web/api/web_share_api',
          },
        ],
      },
      {
        id: 'nylon-bricks',
        duration: '',
        logo: <NylonBricksLogo height={13} width={20} />,
        title: '나일론브릭스',
        description: '생산성 향상을 위한 웹 기반 라이브러리 개발팀',
        subItems: [
          {
            id: 'remark-blockquote-alerts',
            title:
              '<a href="https://www.npmjs.com/package/remark-blockquote-alerts" target="_blank" rel="noreferrer noopener">remark-blockquote-alerts</a>: <a href="https://github.github.com/gfm/" target="_blank" rel="noreferrer noopener">GFM</a>과 동일한 블록 강조를 지원하는 remark 라이브러리',
          },
          {
            id: 'semantic',
            title:
              '<a href="https://semantic.nylonbricks.com" target="_blank" rel="noreferrer noopener">semantic</a>: GatsbyJS 기반의 커스텀 블로그 테마',
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
        id: 'GDGoc HUFS 24-25',
        duration: '2024.08. - Now',
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
              '웹 심화 스터디에서 JavaScript 및 React의 작동 방식과 근본에 대해 관심을 가지고 학습',
          },
        ],
      },
      {
        id: 'thymedesk',
        duration: '2023.01. - now',
        logo: <ThymedeskLogo size={20} style={{ color: theme.color.text }} />,
        title: '타임데스크(Thymedesk)',
        description: `타임데스크 사내 프로젝트 개발 참여 및 외주 용역 수행`,
        subItems: [
          {
            id: 'sfom',
            title:
              '마인크래프트 컨텐츠 공유 커뮤니티 스폼(SFOM) 웹 개발 및 운영 (<a href="https://storeforminecraft.com/" target="_blank" rel="noreferrer noopener">Link</a>)',
          },
          {
            id: 'outsourcing',
            title: '아웃소싱 개발 용역 (TypeScript, React를 이용한 관리자 콘솔 페이지 개발)',
          },
        ],
      },
    ],
  },

  {
    id: 'awards',
    title: 'Award.',
    items: [
      {
        id: '2024-22th-topcit',
        duration: '2024.11.18.',
        logo: <HUFSLogo size={20} style={{ color: theme.color.brand.hufs }} />,
        title: '제22회 TOPCIT 정기평가 성적우수자',
        description: `한국외국어대학교 AI교육원`,
        subItems: [
          {
            id: '2024-22th-topcit-1',
            title: '단체접수 응시자 상위 10%',
          },
        ],
      },
      {
        id: '2023-winter-hufstudy',
        duration: '2024.02.14.',
        logo: <HUFSLogo size={20} style={{ color: theme.color.brand.hufs }} />,
        title: '2023 겨울방학 HUFStudy 최우수상',
        description: '한국외국어대학교 교육혁신원',
        subItems: [
          {
            id: '2023-winter-hufstudy-1',
            title:
              '컴퓨터 공학, 외국어 학습, 비즈니스 상황에서의 ChatGPT 활용 사례 연구 (팀 센토사)',
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

  {
    id: 'certificate',
    title: 'Certificate.',
    items: [
      {
        id: '2024-sqld',
        duration: '2024.06.21.',
        logo: <KDataLogo width={20} height={15.5} />,
        title: 'SQL 개발자(SQLD)',
        description: '한국데이터산업진흥원장, SQLD-053003462',
        subItems: [],
      },
      {
        id: '2022-historyexam',
        duration: '2022.06.24.',
        logo: <GovernmentLogo size={20} />,
        title: '한국사능력검정시험 1급',
        description: '국사편찬위원회, 59-104890',
        subItems: [],
      },
    ],
  },
];
