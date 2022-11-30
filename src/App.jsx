import React from "react";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center"> Rick and Morty</h1>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
