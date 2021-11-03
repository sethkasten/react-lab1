interface Props {
  flavor: string;
  fPercent: string;
  fVotes: number;
  backgroundColor: string;
}

const Bar = ({ flavor, fPercent, fVotes, backgroundColor }: Props) => {
  return (
    <>
      <p className="flavor-title">
        {flavor}: {fVotes} ({fPercent})
      </p>
      <div
        className="bar"
        style={{ width: fPercent, backgroundColor: backgroundColor }}
      ></div>
    </>
  );
};

export default Bar;
