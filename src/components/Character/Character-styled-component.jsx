import styled from "styled-components";

const CharacterDetail = styled.li`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .character-img {
    flex: 2 1 0%;
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0px;
      opacity: 1;
      transition: opacity 0.5s ease 0s;
      object-position: center center;
      object-fit: cover;
    }
  }

  .character-detail {
    flex: 3 1 0%;
    position: relative;
    padding: 1.5rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;

    .section {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-weight: 900;
      }

      &:first-child {
        justify-content: flex-start;
      }

      &:last-child {
        justify-content: flex-end;
      }

      a {
        color: #f5f5f5;
        font-weight: bold;

        &:hover {
          color: #ff9800;
        }
      }

      .status {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 500;
        .status-icon {
          height: 0.5rem;
          width: 0.5rem;
          margin-right: 0.375rem;
          background: ${(props) =>
            props.isDead === "Dead" ? "#d63d2e" : "#55cc44"};
          border-radius: 50%;
        }
      }

      .text-gray {
        color: #9e9e9e;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  @media (width < 650px) {
    flex-direction: column;
    height: initial;
    width: 100%;

    .character-img {
      img {
        height: 300px;
      }
    }

    .section + .section {
      margin-top: 1.25rem;
    }
  }
`;

export default CharacterDetail;
