import { useEffect, useState } from "react";
import Div from "./components/Div";
import Result from "./components/Result";
import { chackPosition, randomNum,  crossOverCheck} from "./functionality/functionality";

function App() {
  const [num, setNum] = useState([]);
  const [position, setPosition] = useState([]);
  const [result, setResult] = useState(0);
  const [crossOver, setCrossOver] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      setNum((prev) => {
        const newNum =
          prev.length === 2 ? [randomNum()] : [...prev, randomNum()];

        setPosition((prevPositions) => {
          const newPos =
            prev.length === 2
              ? [[e.clientX, e.clientY]]
              : [...prevPositions, [e.clientX, e.clientY]];
          setResult(() => {
            const newResult = chackPosition(newNum, newPos);

            setCrossOver(crossOverCheck(newNum, newResult));
            return newResult;
          });
          return newPos;
        });
        return newNum;
      });
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {" "}
      <Result resust={result} crossOver={crossOver} />{" "}
      {num.map((num, index) => (
        <Div key={index} radious={num} position={position[index]} />
      ))}{" "}
    </>
  );
}

export default App;


