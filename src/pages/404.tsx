import { HeadFC } from 'gatsby';
import React from 'react';

import Layout from '@/components/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={sprinkles({ layout: 'columnCenterX' })}>
        <a
          href="https://youtu.be/0kx2KBD34CM"
          target="_blank"
          className={sprinkles({
            textDecoration: 'underline',
          })}
        >
          뭔가 잘못됐어 단단히..
        </a>
        <button
          className={sprinkles({
            marginTop: 'xxxl',
          })}
        >
          돌아가기
        </button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
