import "./Ad.css";

interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

const Ad = ({ flavor, fontSize, darkTheme }: Props) => {
  return (
    <div className="Ad">
      <div className={`ad ${darkTheme ? "dark" : ""}`}>
        <p className="vote">Vote For</p>
        <p
          className="flavor"
          style={{
            fontSize: fontSize,
          }}
        >
          {flavor}
        </p>
      </div>
    </div>
  );
};

export default Ad;
