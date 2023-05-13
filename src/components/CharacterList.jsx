/* eslint-disable react/prop-types */
import styled from "styled-components";

const CharacterSection = styled.section`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272b33;
  min-height: calc(50vh - 60px);
  opacity: 1; /* Inicialmente, ocultamos los cards */
  transition: opacity 0.5s ease-in-out; /* Agregamos una transición suave */

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1920px;
  }
`;
const CharacterList = ({ children }) => {
  return (
    <>
      <CharacterSection>
        <ul>{children}</ul>
      </CharacterSection>
    </>
  );
};

export default CharacterList;
