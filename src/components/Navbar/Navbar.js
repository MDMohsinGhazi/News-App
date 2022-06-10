import { MdFlutterDash } from "react-icons/md";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-oxfordBlue text-white font-semibold flex items-center justify-between px-5 ">
      <div className="flex items-center space-x-2">
        <MdFlutterDash size="2rem" />
        <div className="text-md sm:text-lg md:text-2xl font-redHat text">
          Flutter News
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Navbar;
