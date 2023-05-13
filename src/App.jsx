/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character/Character";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const WhiteText = styled.h2`
  text-align: center;
  font-size: 28px;
  padding: 3rem 0;
`;

const API = `https://rickandmortyapi.com/api/character`;

function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    getCharacters();
  }, []);

  function getCharacters() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const url = `${API}?page=${page}`;
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      const newCharacters = data.results;
      setCharacters([...characters, ...newCharacters]);
      setIsLoading(false);
      setPage(page + 1);
    }
    getData();
  }

  useEffect(() => {
    async function getAllEpisodes() {
      let allEpisodes = [];
      let page = 1;
      let totalPages = 0;

      do {
        const url = `https://rickandmortyapi.com/api/episode?page=${page}`;
        const episodes = await fetch(url);
        const { results, info } = await episodes.json();

        allEpisodes = [...allEpisodes, ...results];
        totalPages = info.pages;
        page++;
      } while (page <= totalPages);
      setEpisodes(allEpisodes);
    }
    getAllEpisodes();
  }, []);

  function handleScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const distanceToBottom = fullHeight - (scrollY + viewportHeight);
    if (distanceToBottom < 200) {
      getCharacters();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const findCharacter = (e) => {
    let url = `https://rickandmortyapi.com/api/character/?name=${e.target.value}`;

    async function getSearchedCharacter() {
      const result = await fetch(url);
      const data = await result.json();
      if (data.results != undefined) {
        setCharacters(data.results);
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    }
    getSearchedCharacter();
  };

  return (
    <>
      <Header />
      <SearchBar findCharacter={findCharacter} />
      {showComponent ? (
        <CharacterList>
          {characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              url={character.url}
              location={character.location.name}
              UrlLocation={character.location.url}
              firstAppearance={episodes.map((episode) => {
                if (character.episode[0] === episode.url) {
                  return episode.name;
                }
              })}
              urlEpisode={character.episode[0]}
            />
          ))}
        </CharacterList>
      ) : (
        <WhiteText>Character not found</WhiteText>
      )}
    </>
  );
}

export default App;
