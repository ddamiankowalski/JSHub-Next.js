import Image from 'next/image';
import logo from '@/../public/img/hub-logo.png';
import Link from 'next/link';

export default function HubLogo() {
  return (
    <Link href="/">
      <div className="flex justify-center items-center gap-x-1">
        <div>
          <Image src={logo} alt="JavaScript hub logo" priority></Image>
        </div>
        <div>
          <span className="font-semibold select-none">hub</span><span className="select-none">.dev</span>
        </div>
      </div>
    </Link>
  );
}