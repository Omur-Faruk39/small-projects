function Button({ number, handler, position, isRender }) {
  return (
    <button
      onClick={() => handler(position)}
      className="bg-green-600 p-1 h-22 w-22 rounded-xl shadow-2xl flex justify-center items-center"
    >
      <p className={`${isRender ? "" : "invisible"} text-[28px]`}>{number}</p>
    </button>
  );
}

export default Button;
