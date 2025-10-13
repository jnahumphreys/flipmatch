import { useState } from "react";

function Card() {
  const [flipped, setFlipped] = useState(false);

  const handleOnClick = () => setFlipped(!flipped);

  return (
    <button
      className="size-20 cursor-pointer perspective-normal"
      onClick={handleOnClick}
    >
      <div
        className={`relative size-full transform-gpu transition-transform delay-150 duration-300 ease-in-out transform-3d ${flipped && "rotate-y-180"}`}
      >
        <div className="absolute size-full rounded-md bg-blue-500 backface-hidden"></div>
        <div className="absolute size-full rotate-y-180 rounded-md bg-red-500 backface-hidden"></div>
      </div>
    </button>
  );
}

export { Card };
