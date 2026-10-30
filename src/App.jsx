
import { useState } from "react";
import Envelope from "./components/envelope";
import Letter from "./components/letter";
import "./App.css";

function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpen) return;

    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
    }, 1200);
  };

  return (
    <main className="app">

      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}>♥</span>
        ))}
      </div>

      {!isOpen ? (
        <Envelope
          onOpen={handleOpen}
          isOpening={isOpening}
        />
      ) : (
        <Letter />
      )}

    </main>
  );
}

export default App;
