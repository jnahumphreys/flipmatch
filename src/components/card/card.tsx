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
  const sharedCardStyles =
    "absolute size-full rounded-[30%] backface-hidden bg-[#FDFDFD] dark:bg-gray-800 border-white dark:border-gray-700/20 border shadow-md";

  return (
    <button
      className={`aspect-square h-full max-h-30 w-full max-w-30 ${flipped ? `cursor-not-allowed` : `cursor-pointer`} perspective-near`}
      onClick={onClick}
      aria-label={label}
      aria-pressed={flipped}
      disabled={flipped}
    >
      <span className="sr-only">
        {flipped ? `Revealed: ${label}` : "Face down"}
      </span>

      <div
        className={`relative size-full transform-gpu transition-transform delay-150 duration-300 ease-in-out transform-3d ${flipped && "rotate-y-180"}`}
        onTransitionEnd={onTransitionEnd}
      >
        <div className={`${sharedCardStyles}`} />

        <div
          className={`${sharedCardStyles} + rotate-y-180 flex-col content-center justify-center`}
        >
          <img
            className="aspect-auto scale-90"
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
