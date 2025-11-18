import { Navbar } from "./_components/navbar";
import { MainHeader } from "./_components/main-header";

export function Header() {
  return (
    <header className="w-full">
      <Navbar />
      <MainHeader />
    </header>
  );
}

