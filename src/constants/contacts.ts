interface Contacts {
  title: string;
  content: string;
  link: string;
}

export const CONTACTS: Contacts[] = [
  {
    title: 'Email',
    content: 'me@haklee.me',
    link: 'mailto:me@haklee.me',
  },
  {
    title: 'Phone',
    content: '+82-10-6454-9806',
    link: 'tel:+82-10-6454-9806',
  },
  {
    title: 'LinkedIn',
    content: 'hak-lee',
    link: 'https://www.linkedin.com/in/hak-lee',
  },
  {
    title: 'Github',
    content: '@ohprettyhak',
    link: 'https://github.com/ohprettyhak',
  },
  {
    title: 'Resume',
    content: 'PDF',
    link: '/resume/haklee-resume-20240529.pdf',
  },
];
