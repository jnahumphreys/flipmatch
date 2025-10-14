import { Card } from "../card";

function Stage() {
  return (
    <div className="grid max-w-166 grid-cols-5 grid-rows-4 gap-2 sm:gap-4">
      {[...Array(25)].map((_, i) => (
        <Card
          key={i}
          label="Item"
          onClick={() => {}}
          onLoad={() => {}}
          onTransitionEnd={() => {}}
          flipped={false}
          imagePath="/images/bumble_bee.png"
        />
      ))}
    </div>
  );
}

export { Stage };
