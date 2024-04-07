import Link from "next/link";

export default function HubMenu() {
  const menuItems = [
    { id: 0, name: 'Tutorials', link: '/tutorials' },
    { id: 1, name: 'Articles', link: '/articles' },
    { id: 2, name: 'ECMAScript', link: '/ecmascript' },
    { id: 3, name: 'Angular', link: '/angular' }
  ];

  return (
    <menu className="flex items-center gap-x-10 font-semibold text-xs">
      {menuItems.map(({ id, name, link }) => <Link href={link} key={id}><li>{name}</li></Link>)}
    </menu>
  )
}