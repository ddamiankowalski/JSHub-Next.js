import Image from 'next/image';
import logo from '@/../public/img/article/1.png';

export default function ArticlePicture() {
  return (
    <Image
      className='my-16 w-full rounded-lg'
      src={logo}
      alt='JavaScript hub logo'
      priority
    ></Image>
  );
}
