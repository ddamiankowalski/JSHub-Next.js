'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HubMenu() {
  const pathName = usePathname();

  const menuItems = [
    { id: 0, name: 'Tutorials', link: '/tutorials' },
    { id: 1, name: 'Articles', link: '/articles' },
    { id: 2, name: 'ECMAScript', link: '/ecmascript' },
    { id: 3, name: 'Angular', link: '/angular' },
  ];

  return (
    <menu className='flex items-center gap-x-10 text-xs font-semibold'>
      {menuItems.map(({ id, name, link }) => (
        <Link href={link} key={id}>
          <li
            style={{ color: '#333333' }}
            className={clsx('transition-all hover:opacity-100', {
              'opacity-50': pathName !== link,
            })}
          >
            {name}
          </li>
        </Link>
      ))}
    </menu>
  );
}
