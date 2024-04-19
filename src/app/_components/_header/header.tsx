export default function Header({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <header className='flex justify-between'>{children}</header>;
}
