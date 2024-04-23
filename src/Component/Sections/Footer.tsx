import peaple from "../../Store/Imagez/hous2.jpg";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
const Footer: React.FC = () => {
  return (
    <footer
      className="Footer py-4 px-8 flex flex-col justify-center items-start h-fit gap-16	"
      id="contact"
    >
      <h5 className="company-name font-semibold	text-slate-100		self-start">
        LOSANTOSINA AND BROTHERS
      </h5>
      <div className="contact-box flex gap-12	">
        <div>
          <h3 className="title-contact mb-4 font-thin	text-slate-100 ">
            Contact Us
          </h3>
          <address className="company-adreses font-thin	leading-3	flex flex-col gap-3 ">
            <p className="adres">
              123 Anywhere St.
              <br /> Any City, ST 12345
            </p>
            <a className="phone-number no-underline	" href="tel:+98 9309916688">
              (123) 456-7890
            </a>
            <a
              className="email-ad no-underline"
              href="mailto:raalstatinRangim@gmail.com"
            >
              hello@reallygreatsite.com
            </a>
          </address>
        </div>
        <div>
          <h3 className="ofis-hours-title text-slate-100	font-thin	mb-4">
            Office Hours
          </h3>
          <div className="description-OHB-box font-thin	leading-3	flex flex-col gap-3 italic">
            <p className="work-time">
              Monday to Friday <br />
              9:00 am to 6:00 pm <br />
              Saturday <br />
              9:00 am to 12 noon
            </p>
            <p className="work-time">Sunday by appointment only.</p>
          </div>
        </div>
      </div>
      <div className="sotial-box gap-2 flex flex-col items-center">
        <h3 className="sotial-title font-thin	mb-3">Get Social</h3>

        <ul className="social-links 	flex gap-4 mb-6">
          <li className="sotial-item flex items-center justify-center">
            <a
              href="#"
              className="footer-link border border-solid	border-slate-100	rounded-full	p-0.5	"
            >
              <PiInstagramLogoFill className="text-fuchsia-600	 footer-icons" />
            </a>
          </li>
          <li className="sotial-item flex items-center justify-center">
            <a
              href="#"
              className="footer-link border border-solid	border-slate-100	rounded-full	p-0.5	"
            >
              <BiLogoFacebookCircle className="text-blue-700	 footer-icons " />
            </a>
          </li>
          <li className="sotial-item flex items-center justify-center">
            <a
              href="#"
              className="footer-link border border-solid	border-slate-100	rounded-full	p-0.5	"
            >
              <BsTwitter className="text-blue-500	 footer-icons" />
            </a>
          </li>
        </ul>
        <img className="footer-imge w-80	" src={peaple} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
