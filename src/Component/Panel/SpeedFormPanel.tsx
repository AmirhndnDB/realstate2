const SpeedFormPanel: React.FC = () => {
  return (
    <form className="flex flex-col gap-2">
      <nav className="insaiden-nav flex justify-center gap-9 bg-slate-400 p-2">
        <p className="bg-white w-16 text-center">Buy</p>
        <p className="bg-white w-16 text-center">Rent</p>
      </nav>
      <nav className="insaiden-nav flex justify-between bg-slate-400 p-2">
        <p className="bg-white w-16 text-center">All</p>
        <p className="bg-white w-16 text-center">Edary</p>
        <p className="bg-white w-16 text-center">Maskoni</p>
      </nav>
      <nav className="insaiden-nav flex flex-col gap-2 bg-slate-400 justify-between p-2 text-xs h-36">
        <p className="justify-self-center self-center">how meter</p>
        <div className="grid grid-cols-2 gap-1">
          <p className="bg-white text-center">20m-50m</p>
          <p className="bg-white text-center">51m-80m</p>
          <p className="bg-white text-center">81m-110m</p>
          <p className="bg-white text-center">111m-140m</p>
          <p className="bg-white text-center">141m-170m</p>
          <p className="bg-white text-center">171m-220m</p>
          <p className="bg-white text-center">221m-400m</p>
          <p className="bg-white text-center">400m-1km</p>
          <p className="bg-white text-center">1km-5km</p>
          <p className="bg-white text-center">5km-10km</p>
        </div>
      </nav>
      <nav className="insaiden-nav flex justify-between bg-slate-400 p-2">
        <input type="number" className="w-12" />
        <p>max old</p>
      </nav>
      <nav className="insaiden-nav flex justify-between bg-slate-400 p-2">
        <input type="number" className="w-28" />
        <p>max budget</p>
      </nav>
      <nav className="insaiden-nav flex justify-between bg-slate-400 p-2">
        <input type="number" className="w-28" />
        <p>max budget</p>
      </nav>
      <button className="start-btn"> search</button>
    </form>
  );
};
export default SpeedFormPanel;
