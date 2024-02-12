import React from "react";

function Modal(modalData, { onClose }) {
  console.log(modalData);

  return (
    <>
      <div className="detaileContainer">
        <div className="detailItem">
          <div className="modalImg">
            <img src={modalData.modalData.sprites.front_default} alt="#" />
            <img src={modalData.modalData.sprites.back_default} alt="#" />
          </div>
          <h3>{modalData.modalData.name}</h3>
          <p>
            {modalData.modalData.abilities.map((ability) => {
              return <div>{ability.ability.name}</div>;
            })}
          </p>
          <p>
            {modalData.modalData.stats.map((stat) => {
              return (
                <table>
                  <tr>
                    <th>{stat.stat.name}</th>
                    <td>{stat.base_stat}</td>
                  </tr>
                </table>
              );
            })}
          </p>
          <p>
            <button onClick={onClose}>閉じる</button>
          </p>
        </div>
      </div>
      ;
    </>
  );
}

export default Modal;
