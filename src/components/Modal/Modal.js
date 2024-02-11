import React from "react";

function Modal(modalData, selectedPokemon) {
  console.log(modalData);

  const handleSelect = () => {
    selectedPokemon(null);
  };

  return (
    <>
      <div className="detaileContainer">
        <div className="detailItem">
          <p>モーダルウィンドです</p>
          <h3>{modalData.modalData.name}</h3>
          <p>
            <button>閉じる</button>
          </p>
        </div>
      </div>
      ;
    </>
  );
}

export default Modal;
