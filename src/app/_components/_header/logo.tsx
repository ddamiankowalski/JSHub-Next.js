import Image from 'next/image';
import logo from '@/../public/img/hub-logo.png';
import Link from 'next/link';

export default function HubLogo() {
  return (
    <Link href='/'>
      <div className='flex h-full items-center justify-center gap-x-1'>
        <div>
          <Image src={logo} alt='JavaScript hub logo' priority></Image>
        </div>
        <div style={{ color: '#333333' }}>
          <span className='select-none font-semibold'>hub</span>
          <span className='select-none'>.dev</span>
        </div>
      </div>
    </Link>
  );
}
