import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/qa"}>Q&A</Link>
      </nav>
    </header>
  );
};

export default Header;
