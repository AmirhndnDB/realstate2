import peaple from "../../Store/Imagez/hous2.jpg";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
const Footer: React.FC = () => {
  return (
    <footer className="Contact" id="contact">
      <h5 className="company-name">LOSANTOSINA AND BROTHERS</h5>
      <div className="contact-box">
        <h3 className="title-contact">Contact Us</h3>
        <address className="company-adreses">
          <p className="adres">
            123 Anywhere St.
            <br /> Any City, ST 12345
          </p>
          <a className="phone-number" href="tel:+98 9309916688">
            (123) 456-7890
          </a>
          <a className="email-ad" href="mailto:raalstatinRangim@gmail.com">
            hello@reallygreatsite.com
          </a>
        </address>
        <h3 className="ofis-hours-title">Office Hours</h3>
        <div className="description-OHB-box">
          <p className="work-time">
            Monday to Friday <br />
            9:00 am to 6:00 pm <br />
            Saturday <br />
            9:00 am to 12 noon
          </p>
          <p className="work-time">Sunday by appointment only.</p>
        </div>
      </div>
      <div className="sotial-box gap-2">
        <h3 className="sotial-title">Get Social</h3>

        <ul className="social-links">
          <li className="sotial-item">
            <a href="#" className="footer-link">
              <PiInstagramLogoFill className="INS footer-icon" />
            </a>
          </li>
          <li className="sotial-item">
            <a href="#" className="footer-link">
              <BiLogoFacebookCircle className="FB footer-icon" />
            </a>
          </li>
          <li className="sotial-item">
            <a href="#" className="footer-link">
              <BsTwitter className="X footer-icon" />
            </a>
          </li>
        </ul>
        <img className="footer-imge" src={peaple} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
