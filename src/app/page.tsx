import HubLogo from "@/app/_components/logo";
import Header from "./_components/header";
import HubMenu from './_components/menu';
import HubActions from "./_components/actions";

export default function Home() {
  return (
    <Header>
      <HubLogo />
      <HubMenu />
      <HubActions />
    </Header>
  );
}
