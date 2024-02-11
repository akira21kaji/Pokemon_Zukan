import React from "react";
import "./Card.css";

const Card = ({ pokemon, onClickCard }) => {
  const setPokemonName = () => {
    const id = pokemon.name;
    onClickCard(id);
  };

  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="#" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ:{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ:{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ:{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
      <button className="detailButton" onClick={setPokemonName}>
        詳細
      </button>
    </div>
  );
};

export default Card;
