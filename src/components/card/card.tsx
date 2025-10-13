import React from "react";

type CardProps = {
  flipped: boolean;
  label: string;
  imagePath: string;
  onClick: (event: React.PointerEvent<HTMLButtonElement>) => void;
  onLoad: (event: React.UIEvent<HTMLImageElement>) => void;
  onTransitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => void;
};

function Card({
  flipped,
  label,
  imagePath,
  onClick,
  onLoad,
  onTransitionEnd,
}: CardProps) {
  return (
    <button
      className="size-20 cursor-pointer perspective-near"
      onClick={onClick}
      aria-label={label}
      aria-pressed={flipped}
    >
      <span className="sr-only">
        {flipped ? `Revealed: ${label}` : "Face down"}
      </span>
      <div
        className={`relative size-full transform-gpu transition-transform delay-150 duration-300 ease-in-out transform-3d ${flipped && "rotate-y-180"}`}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="absolute size-full rounded-md bg-blue-500 backface-hidden"></div>
        <div className="absolute flex size-full rotate-y-180 flex-col content-center justify-center rounded-md bg-red-500 backface-hidden">
          <img
            className="aspect-auto"
            src={imagePath}
            srcSet={`${imagePath} 1x, ${imagePath.replace(/(\.[\w\d_-]+)$/i, "@2x$1")} 2x, ${imagePath.replace(/(\.[\w\d_-]+)$/i, "@3x$1")} 3x `}
            alt=""
            onLoad={onLoad}
            aria-hidden={true}
          />
        </div>
      </div>
    </button>
  );
}

export { Card };
