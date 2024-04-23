import CartSkeleton from "./CartSkeleton";
import SpedFormSkeleton from "./SpedFormSkeleton";
const SearchResultSkeleton: React.FC = () => {
  return (
    <section className="AvalableFile p-12 h-fit pt-24 pb-8 flex flex-col gap-4">
      <SpedFormSkeleton />
      <label className="AccentColor	text-center bgShade2">Search result</label>
      <CartSkeleton />
      <CartSkeleton />
      <CartSkeleton />
    </section>
  );
};
export default SearchResultSkeleton;
