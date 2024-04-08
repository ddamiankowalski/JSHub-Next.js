import Image from 'next/image';
import logo from '@/../public/img/github-logo.png';
import Link from 'next/link';

export default function HubActions() {
  return (
    <Link style={{ color: '#333333' }} className="group flex flex items-center gap-x-2" href="https://github.com/ddamiankowalski">
      <Image className="w-8" src={logo} alt="JavaScript hub logo" priority></Image>
      <span className="font-semibold text-xs transition-all opacity-50 group-hover:opacity-100">GitHub</span>
    </Link> 
  )
}