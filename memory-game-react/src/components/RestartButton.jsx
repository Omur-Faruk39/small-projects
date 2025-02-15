function RestartButton({ clickHandler }) {
  return (
    <div className="flex justify-center">
      <button onClick={clickHandler} className="font-bold border-1 p-3 border-black rounded-[6px] active:bg-gray-300">Re-Start Game</button>
    </div>
  );
}

export default RestartButton;
