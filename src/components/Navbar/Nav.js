import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { Dropdown } from "../dropdown/Dropdown";
import NvLink from "./NvLink";
import { Search } from "../search/Search";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <button className="md:hidden" onClick={() => setShow(!show)}>
        <CgMenu size="2rem" />
      </button>
      <ul
        className="fixed left-0 p-5 right-0 min-h-screen space-y-5 translate-x-full bg-oxfordBlue md:relative md:min-h-0 md:p-0 md:space-y-0 md:flex md:space-x-5 md:translate-x-0 transition-all duration-200 delay-200 z-20"
        style={{ transform: show ? "translateX(0)" : "" }}
      >
        <li className="md:mr-8 lg:mr-48">
          <Search show={() => setShow(!show)} />
        </li>
        <li onClick={() => setShow(!show)}>
          <NvLink to="/">Home</NvLink>
        </li>
        <li onClick={() => setShow(!show)}>
          <NvLink to="/world">World</NvLink>
        </li>
        <li>
          <Dropdown show={() => setShow(!show)} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
