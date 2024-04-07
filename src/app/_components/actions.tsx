import Image from 'next/image';
import logo from '@/../public/img/github-logo.png';
import Link from 'next/link';

export default function HubActions() {
  return (
    <div className="flex flex items-center gap-x-1.5">
      <Image src={logo} alt="JavaScript hub logo" priority></Image>
      <Link href="https://github.com/ddamiankowalski">
        <span className="font-semibold text-xs transition-all opacity-50 hover:opacity-100">GitHub</span>
      </Link> 
    </div>
  )
}