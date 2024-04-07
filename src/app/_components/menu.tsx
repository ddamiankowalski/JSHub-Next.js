export default function HubMenu() {
  const menuItems = ['Tutorials', 'Articles', 'ECMAScript', 'Angular'];

  return (
    <menu className="flex items-center gap-x-10 font-medium text-xs">
      {menuItems.map((item, index) => <li key={index}>{item}</li>)}
    </menu>
  )
}