import { IoHome, IoQrCodeSharp } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import LINK from "./LINK";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <LINK activeClassName="bg-white rounded-full p-2" className="Link" to="/">
        <IoHome className="iconz cliced " />
      </LINK>
      <LINK
        activeClassName="bg-white rounded-full p-2"
        className="Link"
        to="/recomend-file"
      >
        <BsFillGrid3X3GapFill className="iconz" />
      </LINK>
      <LINK
        activeClassName="bg-white rounded-full p-2"
        className="Link"
        to="/Regesteration-File"
      >
        <FaFolderPlus className="iconz" />
      </LINK>
      <a className="bg-white" href="#user-code">
        <IoQrCodeSharp className="iconz" />
      </a>
      <a className="bg-white" href="#contact">
        <MdContactPhone className="iconz" />
      </a>
    </nav>
  );
};

export default NavBar;
