export default function Header({
  children,
// eslint-disable-next-line no-undef
}: Readonly<{ children: React.ReactNode }>) {
  return <header className='flex justify-between'>{children}</header>;
}
