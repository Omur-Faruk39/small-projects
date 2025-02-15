import { useEffect, useState } from "react";

function RenderResult({state}) {
  const [result, setResult] = useState('');

  useEffect(() => {
     const res = state.every((item) => item.result);

     if (res) {
      setResult('You are win the game')
     }
  }, [state])

  return(
    <div className="text-center m-8 text-2xl font-bold">
      {result}
    </div>
  );
}

export default RenderResult;