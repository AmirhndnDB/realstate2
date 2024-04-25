import LINK from "../LINKS/LINK";

const StartApp: React.FC = () => {
  return (
    <section className="start-app bg-cover bg-no-repeat text-slate-100 p-16	pt-24 px-6 flex flex-col justify-center items-center	gap-4">
      <h3 className="date italic font-light	">June7/10AM/2024</h3>
      <h1 className="Main-title text-3xl">Finde your Hous</h1>
      <div className="start-box mt-6 gap-6 flex flex-col font-light	">
        <div className="name-title-box flex flex-col ">
          <h3 className="Company-name text-base font-extralight	">
            Losantosina and brothers
          </h3>
          <h4 className="sec-title text-xs font-thin">
            the bigest realEstate in area
          </h4>
        </div>
        <LINK activeClassName="" className="BTN rounded" to="/recomend-file">
          Start Now &#8594;
        </LINK>
      </div>
    </section>
  );
};

export default StartApp;
