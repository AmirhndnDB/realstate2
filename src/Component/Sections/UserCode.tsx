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
      <button className="BTN" onClick={handleClose}>
        OK
      </button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p className="text-gray-600	">
        if you want a code cal with tis number
        <a href="tel:+989124772282">989124772282</a>
      </p>
    </Modal>
  );

  return (
    <section
      className="User-code flex flex-col py-16 px-8 h-fit items-center gap-4	"
      id="user-code"
    >
      <h3 className="text-3xl italic font-thin">get user code</h3>
      <p className="text-sm font-thin">
        if yuo want a submit yuor File you must get user code for geting user
        code click the button and go through the mentined steps
      </p>
      <div>
        {showModal && modal}
        <button className="BTN rounded" onClick={handleClick}>
          get
        </button>
      </div>
    </section>
  );
};

export default UserCode;
