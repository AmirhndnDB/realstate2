import AXha from "../../Store/Imagez/hose.jpg";
import LINK from "../LINKS/LINK";
const AboutSec: React.FC = () => {
  return (
    <section className="About h-fit	px-8	py-4 flex flex-col justify-center items-center gap-2">
      <h1 className="About-title italic font-thin	text-3xl	">
        Losantos & Brothers Realty in Vancouver
      </h1>
      <p className="About-description text-sm	font-thin">
        In the heart of Vancouver, Losantos & Brothers Realty stands out as a
        premier destination for exquisite office and residential buildings for{" "}
        <LINK
          activeClassName="bg-white p-2"
          className="About-link bg-transparent	"
          to="/recomend-file"
        >
          <b className="font-normal	no-underline	">sale and rent.</b>
        </LINK>
        With a perfect blend of elegance and functionality, our properties
        redefine luxury living in Vancouver Experience unparalleled quality and
        service as you explore the exceptional offerings by Losantos & Brothers
        Realty.
      </p>
      <img src={AXha} alt="ax" className="image w-64 h-40" />
    </section>
  );
};

export default AboutSec;
