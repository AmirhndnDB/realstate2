import React from "react";
import { useAppSelector } from "../../Store/storeIndex";
import QutePanel from "../Panel/QuotePanel";
import ReviewsSkeleton from "../Skeletonz/ReviewsSkeleton";

const Reviews: React.FC = () => {
  const { isLoading, error, reviewsdata } = useAppSelector(
    (state) => state.reviews
  );
  let renderedRewsData;
  if (isLoading) {
    return <ReviewsSkeleton />;
  }
  if (error) {
    return (
      <section className="Reviews h-fit px-8 py-12 flex flex-col justify-center gap-6 items-center">
        <h2 className="comment-Title italic text-3xl font-thin">
          Client Reviews
        </h2>
        <div>Error Fetching Data</div>
      </section>
    );
  }
  if (reviewsdata && reviewsdata.data) {
    renderedRewsData = reviewsdata?.data.map((review) => (
      <QutePanel
        key={review.key}
        Text={review.text}
        Title={review.title}
        Date={review.submissionDate}
        feadback={review.positiveFeedbackCount}
      />
    ));
  }

  return (
    <section className="Reviews h-fit px-8 py-12 flex flex-col justify-center gap-6 items-center">
      <h2 className="comment-Title italic text-3xl font-thin">
        Client Reviews
      </h2>
      {renderedRewsData}
    </section>
  );
};

export default Reviews;
