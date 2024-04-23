import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import Main from "./Component/Pages/Min";
import Router from "./Component/Routers/Router";
import AvalableFile from "./Component/Pages/AvalableFile";
import RegesterationFile from "./Component/Pages/RegesterationFile";
import FilePage from "./Component/Pages/FilePage";
import { useAppSelector } from "./Store/storeIndex";
import ReviewsSkeleton from "./Component/Skeletonz/ReviewsSkeleton";

const App: React.FC = () => {
  const inASID = useAppSelector((state) => state.apasel.FilePageID);

  const exID = useAppSelector((state) => state.property.ExFilePageID);
  const ID = inASID || exID;
  return (
    <>
      <Router path="/">
        <NavBar />
        <Main />
      </Router>
      <Router path="/recomend-file">
        <NavBar />
        <AvalableFile />
      </Router>
      <Router path="/Regesteration-File">
        <NavBar />
        <RegesterationFile />
      </Router>
      <Router path={`/recomend-file/filePage${ID}`}>
        <FilePage />
      </Router>
      <Router path={`/Test`}>
        <ReviewsSkeleton />
      </Router>
    </>
  );
};
export default App;
