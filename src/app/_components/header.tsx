export default function Header({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <header className="flex justify-between container mx-auto w-3/4 mt-10">
      {children}
    </header>
  )
}