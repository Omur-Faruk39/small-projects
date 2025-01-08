import { useState } from "react";
import NumberButton from "./components/NumberButton";
import RenderPara from "./components/RenderPara";

function App() {
  const [value, setValue] = useState("");

  const numButtonClickHandelar = (num) => {
    setValue((pre) => pre + num);
  };

  const equalHandelar = () => {
    const result = eval(value);

    setValue(result);
  };

  const cleanerHandelar = () => {
    setValue("");
  };

  return (
    <div className="text-red-500 max-w-[200px]">
      <RenderPara value={value} />

      <div className="grid grid-cols-4">
        <button onClick={cleanerHandelar} className="text-green-400 text-4xl">
          c
        </button>
        <NumberButton buttonNum={"&#xd7;"} func={numButtonClickHandelar} color="text-green-400"/>
        <NumberButton buttonNum={"/"} func={numButtonClickHandelar} color="text-green-400"/>
        <NumberButton buttonNum={1} func={numButtonClickHandelar} color="text-black" />
        <NumberButton buttonNum={2} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={3} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={4} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={5} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={6} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={7} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={8} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={9} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={"-"} func={numButtonClickHandelar} />
        <NumberButton buttonNum={"+"} func={numButtonClickHandelar} />

        <button onClick={equalHandelar}>=</button>
      </div>
    </div>
  );
}

export default App;
