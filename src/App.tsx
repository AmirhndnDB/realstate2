import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import Main from "./Component/Pages/Min";
import Router from "./Component/Router";
import AvalableFile from "./Component/Pages/AvalableFile";
import RegesterationFile from "./Component/Pages/RegesterationFile";
import FilePage from "./Component/Pages/FilePage";
import Test from "./test";
import Stortest from "./Stortest"

const App: React.FC = () => {
  return (
    <>
      <Router path="/">
        <NavBar />
        <Main />
        <Test/>
        <Stortest/>
      </Router>
      <Router path="/recomend-file">
        <AvalableFile />
        <NavBar />
      </Router>
      <Router path="/Regesteration-File">
        <RegesterationFile />
        <NavBar />
      </Router>
      <Router path="/recomend-file/filePage">
        <FilePage />
      </Router>

      
    </>
  );
};
export default App;