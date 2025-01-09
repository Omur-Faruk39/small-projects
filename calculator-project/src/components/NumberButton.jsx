import DOMPurify from 'dompurify';

function NumberButton({ buttonNum, func, color }) {
  const html = DOMPurify.sanitize(buttonNum);

  let num;

  switch (buttonNum) {
    case "&#xF7;": num = '/'; break;
    case "&#xd7;": num = '*'; break;
    default: num = buttonNum;
  }

  return (
    <>
      <button
        className={`${color} text-3xl rounded-full hover:bg-gray-200 p-2 pr-4 pl-4 active:bg-gray-300 `}
        onClick={() => {
          func(num);
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export default NumberButton;
