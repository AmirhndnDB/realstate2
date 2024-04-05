import AXha from "../../Store/Imagez/hose.jpg";
import LINK from "../NavBar/LINK";
const AboutSec: React.FC = () => {
  return (
    <section className="About">
      <h1 className="About-title"> Losantos & Brothers Realty in Vancouver</h1>
      <p className="About-description">
        In the heart of Vancouver, Losantos & Brothers Realty stands out as a
        premier destination for exquisite office and residential buildings for{" "}
        <LINK
          activeClassName="bg-white p-2"
          className="About-link"
          to="/recomend-file"
        >
          <b>sale and rent.</b>
        </LINK>
        With a perfect blend of elegance and functionality, our properties
        redefine luxury living in Vancouver Experience unparalleled quality and
        service as you explore the exceptional offerings by Losantos & Brothers
        Realty.
      </p>
      <img src={AXha} alt="ax" className="image" />
    </section>
  );
};

export default AboutSec;
