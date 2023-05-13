import styled from "styled-components";
import { ReactComponent as Rick } from "../assets/rick.svg";
const Head = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(50vh - 60px);
  text-align: center;
  position: relative;

  h1 {
    margin: 0;
    color: #202329;
    border: none;
    font-weight: 900;
    z-index: 1;
    font-size: 5.625rem;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    position: absolute;

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: #c9c8c8;
      }
    }
  }

  @media (width < 890px) {
    h1 {
      font-size: 3.75rem;
    }
  }
  @media (width < 650px) {
    padding: 0 1.25rem;
    height: calc(40vh - 50px);
    h1 {
      font-size: 3rem;
    }
  }
`;

const Header = () => {
  return (
    <>
      <Head>
        <h1>The Rick and Morty APP</h1>
        <div className="hero-image">
          <Rick />
        </div>
      </Head>
    </>
  );
};

export default Header;
