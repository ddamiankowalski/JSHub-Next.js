import HubLogo from "@/app/_components/logo";
import Header from "./_components/header";
import HubMenu from './_components/menu';

export default function Home() {
  return (
    <Header>
      <HubLogo />
      <HubMenu />
    </Header>
  );
}
