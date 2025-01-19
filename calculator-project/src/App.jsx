import { useState } from "react";
import NumberButton from "./components/NumberButton";
import RenderPara from "./components/RenderPara";

function App() {
  const [value, setValue] = useState("");

  const numButtonClickHandelar = (num) => {
    setValue((pre) => pre + num);
  };

  const equalHandelar = () => {
    let result;

    if(value.includes('%')) {
      const newValue = value.replace('%', '/100*');
      result = eval(newValue);      
    } else {
      result = eval(value);
    }
    setValue(result);
  };

  const cleanerHandelar = () => {
    setValue("");
  };

  const clearOne = () => {
    setValue(value.toString().slice(0, (value.length -1)));
  }

  return (
    <div className="text-red-500 max-w-[200px]">
      <RenderPara value={value} />

      <div className="grid grid-cols-4">
        <button onClick={cleanerHandelar} className="text-green-400 text-4xl">
          c
        </button>
        <NumberButton buttonNum={"&#xF7;"} func={value ? numButtonClickHandelar : null} color="text-green-500"/>
        <NumberButton buttonNum={"&#xd7;"} func={value ? numButtonClickHandelar : null} color="text-green-500"/>
        <button onClick={clearOne} className="text-green-400 text-[20px] font-bold rounded-full hover:bg-gray-200 p-2 pr-5 pl-3 active:bg-gray-300 ">&#x232B;</button>
        <NumberButton buttonNum={7} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={8} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={9} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={"-"} func={value ? numButtonClickHandelar : null} color="text-green-500" />
        <NumberButton buttonNum={4} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={5} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={6} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={"+"} func={value ? numButtonClickHandelar : null} color="text-green-500"/>
        <NumberButton buttonNum={1} func={numButtonClickHandelar} color="text-black" />
        <NumberButton buttonNum={2} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={3} func={numButtonClickHandelar} color="text-black"/>
        <button onClick={value ? equalHandelar : null} className="bg-green-500  text-white row-span-4 rounded-xl active:bg-green-600 text-4xl">=</button>
        <NumberButton buttonNum={'%'} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={'0'} func={numButtonClickHandelar} color="text-black"/>
        <NumberButton buttonNum={'.'} func={numButtonClickHandelar} color="text-black"/>
      </div>
    </div>
  );
}

export default App;
