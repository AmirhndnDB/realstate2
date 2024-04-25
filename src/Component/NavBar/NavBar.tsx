import { IoHome, IoQrCodeSharp } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import LINK from "../LINKS/LINK";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar fixed flex justify-between items-center p-4 rounded-3xl	mt-2 mx-2	">
      <LINK
        activeClassName="bg-white rounded-full p-2"
        className="w-8	hover:bg-white hover:p-2 hover:rounded-full  h-8 Link flex"
        to="/"
      >
        <IoHome className="iconz" />
      </LINK>
      <LINK
        activeClassName="bg-white rounded-full p-2"
        className="w-8	hover:bg-white hover:p-2 hover:rounded-full  h-8 Link flex"
        to="/recomend-file"
      >
        <BsFillGrid3X3GapFill className="iconz" />
      </LINK>
      <LINK
        activeClassName="bg-white rounded-full p-2"
        className="w-8	hover:bg-white hover:p-2 hover:rounded-full  h-8 Link flex"
        to="/Regesteration-File"
      >
        <FaFolderPlus className="iconz" />
      </LINK>
      <a
        className="w-8	hover:bg-white hover:p-2 hover:rounded-full  h-8 flex items-center justify-center Link"
        href="#user-code"
      >
        <IoQrCodeSharp className="iconz" />
      </a>
      <a
        className="w-8	hover:bg-white hover:p-2 hover:rounded-full h-8 flex items-center justify-center Link"
        href="#contact"
      >
        <MdContactPhone className="iconz" />
      </a>
    </nav>
  );
};

export default NavBar;
