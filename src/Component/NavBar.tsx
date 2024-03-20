import { IoHome  ,IoQrCodeSharp } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const NavBar : React.FC = ()=> {
    return (
        <nav className='nav-bar'>
          <div className="cliced-box"><IoHome className='iconz cliced '/></div>
          <div><BsFillGrid3X3GapFill  className='iconz'/></div>
          <div><FaFolderPlus className='iconz'/></div>
          <div><IoQrCodeSharp className='iconz'/></div>
          <div><MdContactPhone className='iconz' /></div>
        </nav>
    )
  }
  
  export default NavBar;
  