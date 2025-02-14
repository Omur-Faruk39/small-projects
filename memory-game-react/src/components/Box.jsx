import { useEffect, useState } from "react";
import Button from "./Button";

function Box() {
  const [position, setPosition] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const randomNumber = (value) => {
    return Math.floor(Math.random() * value);
  };

  useEffect(() => {
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    const state = [];

    while (numArray.length > 0) {
      const value = randomNumber(numArray.length);
      state.push([numArray[value], false, false]);
      numArray.splice(value, 1);
    }

    setPosition(state);
  }, []);

  useEffect(() => {
    if (clickCount % 2 === 0 && clickCount !== 0) {
      setPosition((pre) => {
        let newArray = pre.filter((item) => item[1]);

        if (newArray.length === 2 && newArray[0][0] === newArray[1][0]) {
          return pre.map((item) =>
            item[0] === newArray[0][0] ? [item[0], true, true] : item
          );
        }


        setTimeout(() => {
          setPosition((pre) =>
            pre.map((item) =>
              item[1] && !item[2] ? [item[0], false, false] : item
            )
          );
        }, 1000);

        return pre;
      });
    }
  }, [clickCount]);

  const handler = (e) => {
    setClickCount((pre) => pre + 1);
    const index = Number(e.target.getAttribute("data-index"));
    setPosition((pre) =>
      pre.map((item, i) => (i === index ? [item[0], true, item[2]] : item))
    );
  };

  return (
    <div>
      {position.map((num, index) => (
        <Button
          number={num[0]}
          key={index}
          position={index}
          handler={handler}
          isRender={num[1]}
        />
      ))}
    </div>
  );
}

export default Box;
