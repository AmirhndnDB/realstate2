import Cart from "../Crts/cart";
import SpeedFormPanel from "../Panel/SpeedFormPanel";
const RecomendFile: React.FC = () => {
  return (
    <section className="AvalableFile p-12 h-fit">
      <SpeedFormPanel />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </section>
  );
};
export default RecomendFile;
