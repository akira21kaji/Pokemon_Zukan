import React from "react";
import "./Modal.css";

function Modal({ modalData, onClose }) {
  // console.log(modalData);

  return (
    <>
      <div className="detaileContainer">
        <div className="detailItem">
          <div className="modalImg">
            <img src={modalData.sprites.front_default} alt="#" />
            <img src={modalData.sprites.back_default} alt="#" />
          </div>
          <h3>{modalData.name}</h3>
          <div>
            {modalData.abilities.map((ability) => {
              return (
                <div key={ability.ability.name}>
                  <span>
                    能力属性{ability.index}：{ability.ability.name}
                  </span>
                </div>
              );
            })}
          </div>

          <table className="pokemonTable">
            <thead>
              <tr>
                <th>stat name</th>
                <th>base stat</th>
              </tr>
            </thead>
            {modalData.stats.map((stat) => (
              <tbody key={stat.stat.name}>
                <tr>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <button onClick={onClose}>閉じる</button>
        </div>
      </div>
      ;
    </>
  );
}

export default Modal;
