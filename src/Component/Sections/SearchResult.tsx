import React from "react";
import { useAppDispatc, useAppSelector } from "../../Store/storeIndex";
import SpeedFormPanel from "../Panel/SpeedFormPanel";
import ExternalApiCart from "../Crts/ExternalApiCart";
import { setDefult } from "../../Store/Slice/searchSlice";
import SearchResultSkeleton from "../Skeletonz/SearchResultSkeleton";

const SearchResult: React.FC = () => {
  const dispatch = useAppDispatc();
  const { isLoading, error, searchdata } = useAppSelector(
    (state) => state.search
  );

  if (isLoading) {
    return <SearchResultSkeleton />;
  }

  if (error) {
    return <div>fetching data has error</div>;
  }

  const searchData = searchdata?.data;

  const handleClick = () => {
    dispatch(setDefult());
  };
  const searchResult = searchData?.map((item) => (
    <ExternalApiCart
      key={item?.id}
      ID={item?.id}
      area={item?.availabilities[0]?.details[0]?.area}
      houseType={item?.availabilities[0]?.details[5]?.modelName}
      roomnumb={item?.availabilities[0]?.details[0]?.bedNum}
      bathnumb={item?.availabilities[0]?.details[0]?.baths}
      parking={item?.storyCount.toString()}
      nabor={item?.address?.lineOne}
    />
  ));

  const resultForShow = () =>
    searchResult ? (
      searchResult
    ) : (
      <div className="text-center	AccentColor ">no result for show</div>
    );

  return (
    <>
      <section className="AvalableFile p-12 h-fit pt-24  pb-8 flex flex-col gap-4">
        <SpeedFormPanel />
        {resultForShow()}
        <div className="BTN align-center" onClick={handleClick}>
          back to All Files
        </div>
      </section>
    </>
  );
};

export default SearchResult;
