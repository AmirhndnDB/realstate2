import StartApp from "../Sections/StartApp";
import AboutSec from "../Sections/AboutSec";
import Reviews from "../Sections/Reviews";
import Footer from "../Sections/Footer";
import UserCode from "../Sections/UserCode";
const Main: React.FC = () => {
  return (
    <main>
      <StartApp />
      <AboutSec />
      <UserCode />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Main;
