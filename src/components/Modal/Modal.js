import React from "react";

function Modal({ modalData, onClose }) {
  console.log(modalData);

  return (
    <>
      <div className="detaileContainer">
        <div className="detailItem">
          <div className="modalImg">
            <img src={modalData.sprites.front_default} alt="#" />
            <img src={modalData.sprites.back_default} alt="#" />
          </div>
          <h3>{modalData.name}</h3>
          <p>
            {modalData.abilities.map((ability) => {
              return <div>{ability.ability.name}</div>;
            })}
          </p>
          <div className="tableStats"></div>
          {modalData.stats.map((stat) => {
            return (
              <table>
                <tr>
                  <th>stat name</th>
                  <th>base stat</th>
                </tr>
                <tr>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              </table>
            );
          })}
          <button onClick={onClose}>閉じる</button>
        </div>
      </div>
      ;
    </>
  );
}

export default Modal;
