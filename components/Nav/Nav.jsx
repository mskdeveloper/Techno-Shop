import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col justify-center items-center relative">
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </nav>
  );
};

export default Nav;
