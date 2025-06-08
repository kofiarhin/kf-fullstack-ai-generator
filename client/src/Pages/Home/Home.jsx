import { useEffect, useState } from "react";
import "./home.styles.scss";
import { generate } from "../../utility/lib";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const init = async () => {
      const response = await generate();
      setData(response);
    };
    init();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      alert(` copied: ${data}`);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleRefresh = async () => {
    const res = await generate();
    setData(res);
  };
  return (
    <div id="home">
      {data && <h1>Today's Joke</h1>}
      <div className="text-wrapper">
        <p>{data && data}</p>
      </div>
      <div className="button-wrapper">
        {data && (
          <>
            <button onClick={handleRefresh} className="refresh">
              More
            </button>{" "}
            <button onClick={handleCopy}>Copy</button>
          </>
        )}
      </div>
      {/* {data && <p> {data} </p>} */}
    </div>
  );
};

export default Home;
