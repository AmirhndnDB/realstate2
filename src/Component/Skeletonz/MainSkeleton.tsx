import CartSkeleton from "./CartSkeleton";
import SpedFormSkeleton from "./SpedFormSkeleton";
const MainSkeleton: React.FC = () => {
  return (
    <section className="AvalableFile p-12 h-fit pt-24 pb-8 flex flex-col gap-4">
      <SpedFormSkeleton />
      <label className="AccentColor	text-center bgShade2">apartmantRent</label>
      <CartSkeleton />
      <CartSkeleton />
      <label className="AccentColor	text-center bgShade2">apartmantSale</label>
      <CartSkeleton />
      <label className="AccentColor	text-center bgShade2">Office Rent</label>
      <CartSkeleton />
      <label className="AccentColor	text-center bgShade2">Office Sale</label>
      <CartSkeleton />
    </section>
  );
};
export default MainSkeleton;
