import QoutSkeleton from "./QoutSkeleton";

const ReviewsSkeleton: React.FC = () => {
  return (
    <section className="Reviews h-fit px-8 py-12 flex flex-col justify-center gap-6 items-center">
      <h2 className="comment-Title italic text-3xl font-thin">
        Client Reviews
      </h2>
      <QoutSkeleton />
      <QoutSkeleton />
      <QoutSkeleton />
      <QoutSkeleton />
    </section>
  );
};
export default ReviewsSkeleton;
