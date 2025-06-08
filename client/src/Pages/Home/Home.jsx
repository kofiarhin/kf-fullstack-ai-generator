import { useEffect, useState } from "react";
import "./home.styles.scss";
import { generate } from "../../utility/lib";
import { init } from "groq-sdk/_shims/index.mjs";

const Home = () => {
  const [data, setData] = useState(
    "this is a tesing joke variable thate i can"
  );
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
  return (
    <div id="home">
      <h1>Today's Joke</h1>
      <div className="text-wrapper">
        <p>{data && data}</p>
      </div>
      <div className="button-wrapper">
        <button onClick={handleCopy}>Copy</button>
      </div>
      {/* {data && <p> {data} </p>} */}
    </div>
  );
};

export default Home;
