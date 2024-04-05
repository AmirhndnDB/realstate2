import LINK from "../NavBar/LINK";

const StartApp: React.FC = () => {
  return (
    <section className="start-app">
      <h3 className="date">June7/10AM/townAhal</h3>
      <h1 className="Main-title">Finde your Hous</h1>
      <div className="start-box">
        <div className="name-title-box">
          <h3 className="Company-name">Losantosina and brothers</h3>
          <h4 className="sec-title">the bigest realEstate in area</h4>
        </div>
        <LINK activeClassName="" className="start-btn" to="/recomend-file">
          Start Now &#8594;
        </LINK>
      </div>
    </section>
  );
};

export default StartApp;
