import StartApp from "../Sections/StartApp";
import AboutSec from "../Sections/AboutSec";
import Reviews from "../Sections/Reviews";
import Footer from "../Sections/Footer";
import UserCode from "../Sections/UserCode";
import { reviewsThunk, useAppDispatc } from "../../Store/storeIndex";
import { useEffect } from "react";
const Main: React.FC = () => {
  const dispatch = useAppDispatc();
  useEffect(() => {
    dispatch(reviewsThunk());
  }, []);
  return (
    <main className="text-slate-100">
      <StartApp />
      <AboutSec />
      <UserCode />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Main;
