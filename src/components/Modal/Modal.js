import React from "react";

function Modal(modalData, closeModal) {
  console.log(modalData);

  const handleCloseModal = () => {
    closeModal(false);
  };

  return (
    <>
      <div className="detaileContainer">
        <div className="detailItem">
          <p>モーダルウィンドです</p>
          <h3>{modalData.modalData.name}</h3>
          <p>
            <button onClick={handleCloseModal}>閉じる</button>
          </p>
        </div>
      </div>
      ;
    </>
  );
}

export default Modal;
