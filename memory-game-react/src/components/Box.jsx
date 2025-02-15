import { useEffect, useState } from "react";
import Button from "./Button";
import randomIndex from "../fuctionality/random-index";

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
const initState = () => {
  const state = [];

  while (numArray.length > 0) {
    const randomInd = randomIndex(numArray.length);
    state.push({
      value: numArray[randomInd],
      isRender: false,
      result: false,
    });
    numArray.splice(randomInd, 1);
  }

  return state;
};

function Box() {
  const [num, setNum] = useState(initState());
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    if (clickCounter % 2 === 0 && clickCounter !== 0) {
      setClickCounter(0);
      const editedNum = [];

      setNum((pre) => {
        pre.forEach((item, i) => {
          if (!item.result && item.isRender) {
            editedNum.push({ ...item, index: i });
          }
        });



        if (editedNum[0].value === editedNum[1].value) {
          const newState = [...pre];
          newState[editedNum[0].index] = {
            ...pre[editedNum[0].index], isRender: true, result: true
          };
          newState[editedNum[1].index] = {
            ...pre[editedNum[1].index], isRender: true, result: true
          };
          return newState;
          
        } else {
          const newState = [...pre];
          newState[editedNum[0].index] = {
            ...pre[editedNum[0].index], isRender: false
          };
          newState[editedNum[1].index] = {
            ...pre[editedNum[1].index], isRender: false
          };
          return newState;
        }


      });
    }
  }, [clickCounter]);

  const clickHandler = (position) => {
    setClickCounter((pre) => pre + 1);
    setNum((pre) => {
      return pre.map((item, i) =>
        i === position ? { ...item, isRender: true } : item
      );
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 max-w-100 m-auto">
      {num.map((item, i) => (
        <Button
          key={i}
          number={item.value}
          handler={clickHandler}
          position={i}
          isRender={item.isRender}
        />
      ))}
    </div>
  );
}

export default Box;
