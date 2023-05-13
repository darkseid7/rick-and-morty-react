/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputSearch = styled.section`
  width: 100%;
  padding: 3rem 0.5rem 2rem 0.5rem;
  display: flex;
  justify-content: center;

  input {
    width: 50%;
    background-color: #595959;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #ffffff;

    &::placeholder {
      color: gray;
    }
  }

  @media (width <= 800px) {
    padding: 4rem 1.5rem 1rem 1.5rem;
    input {
      width: 100%;
    }
  }
`;

const SearchBar = ({ findCharacter }) => {
  return (
    <InputSearch className="">
      <input onChange={findCharacter} placeholder="Search Character" />
    </InputSearch>
  );
};

export default SearchBar;
