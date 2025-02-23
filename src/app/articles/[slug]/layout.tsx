import '@/styles/article.css';
import '@/styles/code-highlight.css';

import { FC, PropsWithChildren, ReactNode } from 'react';

const ArticleLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default ArticleLayout;
