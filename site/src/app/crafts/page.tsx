import dayjs from 'dayjs';
import Link from 'next/link';

import { allCrafts, type Craft } from 'contentlayer/generated';

import { PATH } from '@/constants';

import { Cover } from './_components/cover';

const Craft = () => {
  const list = getSortedCrafts(allCrafts);

  return (
    <div className="grid grid-cols-1 w-full px-[var(--spacing-inline)] gap-[1rem] mobile:grid-cols-2">
      {list.map((craft) => {
        const path: string = `${PATH.CRAFT}/${craft.slug}`;

        return (
          <Link
            key={craft.slug}
            className="opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-70"
            href={path}
          >
            <Cover key={craft.slug} src={craft.cover} alt={craft.title} />
            <h3 className="w-full mt-[0.75rem] text-[var(--color-text)] text-sm text-center font-mono font-medium leading-relaxed break-keep">
              {craft.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Craft;

const getSortedCrafts = (crafts: Craft[]): Craft[] => {
  return crafts.sort((a, b) => (dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1));
};
