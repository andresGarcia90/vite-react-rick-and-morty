import React, { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const data = await response.json();
      console.log(data.results);
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  const changePage = (page) => {
    console.log("Character list ", page);
  }

  if (loading) {
    return <div>Loading</div>;
  }



  return (
    <div className="container">
      <div className="row">
        <NavPage page={page} setPage={setPage}></NavPage>
        {characters.map((character) => (
          <div key={character.id} className="col-md-4">
            <Character character={character} />
          </div>
        ))}
        <NavPage page={page} setPage={setPage}></NavPage>
      </div>
    </div>
  );
}

export default CharacterList;
