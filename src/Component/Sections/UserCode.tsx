import React, { useState } from "react";
import Modal from "../Panel/Modal";

const UserCode: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button className="btn" onClick={handleClose}>
        OK
      </button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        if you want a code cal with tis number
        <a href="tel:+989124772282">989124772282</a>
      </p>
    </Modal>
  );

  return (
    <section className="User-code" id="user-code">
      <h3>get user code</h3>
      <div className="relative">
        <button className="btn" onClick={handleClick}>
          get
        </button>
        {showModal && modal}
      </div>
    </section>
  );
};

export default UserCode;
