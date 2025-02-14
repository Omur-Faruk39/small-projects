function Button({ number, handler, position, isRender }) {
  return (
    <button
      onClick={handler}
      data-index={position}
      className="bg-green-600 ml-1 p-1"
    >
      <div className={`${isRender ? "" : "invisible"}`}>
        {number}
      </div>
    </button>
  );
}

export default Button;
