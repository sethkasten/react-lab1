import { useState } from "react";
import Bar from "./Bar";
import "./Votes.css";

const Votes = () => {
  const [cVotes, setcVotes] = useState(0);
  const [vVotes, setvVotes] = useState(0);
  const [sVotes, setsVotes] = useState(0);

  const total: number = sVotes + vVotes + cVotes;
  const cPercent: string = `${((100 * cVotes) / total).toFixed(2)}%`;
  const vPercent: string = `${((100 * vVotes) / total).toFixed(2)}%`;
  const sPercent: string = `${((100 * sVotes) / total).toFixed(2)}%`;

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={() => setcVotes((prev) => prev + 1)}>Chocolate</button>
        <button onClick={() => setvVotes((prev) => prev + 1)}>Vanilla</button>
        <button onClick={() => setsVotes((prev) => prev + 1)}>
          Strawberry
        </button>
      </div>
      {total ? (
        <>
          <Bar
            flavor="Chocolate"
            fPercent={cPercent}
            fVotes={cVotes}
            backgroundColor="#4f2c2c"
          />
          <Bar
            flavor="Vanilla"
            fPercent={vPercent}
            fVotes={vVotes}
            backgroundColor="#cbc0ac"
          />
          <Bar
            flavor="Strawberry"
            fPercent={sPercent}
            fVotes={sVotes}
            backgroundColor="#de8c91"
          />
        </>
      ) : (
        <p>No votes yet.</p>
      )}
    </div>
  );
};

export default Votes;
