/* eslint-disable react/prop-types */
import CharacterDetail from "./Character-styled-component";
const Character = ({
  name,
  image,
  status,
  species,
  url,
  location,
  UrlLocation,
  firstAppearance,
  urlEpisode,
}) => {
  return (
    <CharacterDetail isDead={status}>
      <div className="character-img">
        <img src={image} alt={name} />
      </div>
      <div className="character-detail">
        <div className="section">
          <a href={url}>
            <h2>{name}</h2>
          </a>
          <span className="status">
            <span className="status-icon"></span>
            {status} - {species}
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          <a href={UrlLocation}>{location}</a>
        </div>
        <div className="section">
          <span className="text-gray">First seen in:</span>
          <a href={urlEpisode}>{firstAppearance}</a>
        </div>
      </div>
    </CharacterDetail>
  );
};

export default Character;
