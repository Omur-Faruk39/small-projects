export default function ({ resust, crossOver }) {
  let text = "";
  if (crossOver) {
    text = "the circule fully cover";
  } else {
    if (resust < 0) {
      text = `It is tuoch in ${Math.abs(resust).toFixed(3)}px`;
    } else if (resust > 0) {
      text = `It is not tuoch for ${resust.toFixed(3)}px`;
    }
  }

  return <h1 className="font-bold text-4xl">{text}</h1>;
}
