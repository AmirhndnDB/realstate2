interface QuotePanelProps {
  Text: string;
  Title: string;
  Date: string;
  feadback: number;
}
const QutePanel: React.FC<QuotePanelProps> = ({
  Text,
  Title,
  Date,
  feadback,
}) => {
  return (
    <blockquote className="coment-box border border-slate-100	border-solid	h-fit flex flex-col p-4	gap-2">
      <h4 className="text-sm">{Title}</h4>
      <q className="quot  text-xs font-thin">{Text}</q>
      <div className="text-xs flex  gap-4">
        <p>Scre out of 10 &#8594; </p>
        <p>{feadback}</p>
      </div>
      <div>
        <div className="text-xs flex flex-col justify-center items-center	 gap-1">
          <p className="self-start	">Date register:</p>
          <p>{Date}</p>
        </div>
      </div>
      <h5 className="quoter text-sm p-2">~Powell Finwood</h5>
    </blockquote>
  );
};
export default QutePanel;
