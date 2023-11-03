
import { useState } from "react";

const names = ["Dog", "Ice Cream", "Fish", "Jug", "Kite"];
const images = ["dog.jpeg", "icecream.jpeg", "fish.jpeg", "jug.jpeg", "kite.jpeg"];

const InteractiveCards = () => {
  const [state, setState] = useState({
    currentIndex: 0,
  });

  const handleClick = () => {
    setState({ currentIndex: (state.currentIndex + 1)%names.length });
  };

  const currentName = names[state.currentIndex];
  const currentImage = '/images/' + images[state.currentIndex];

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow aspect-[9/16]" onClick={handleClick}>
    <a href="#">
        <img className="rounded-t-lg" src={currentImage} alt={currentName} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center">{currentName}</h5>
        </a>
    </div>
  </div>
  );
};

export default InteractiveCards;