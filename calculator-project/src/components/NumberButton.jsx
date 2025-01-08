import DOMPurify from 'dompurify';

function NumberButton({ buttonNum, func, color }) {
  const html = DOMPurify.sanitize(buttonNum);

  return (
    <>
      <button
        className={`${color} hover:text-black`}
        onClick={() => {
          func(buttonNum);
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export default NumberButton;
