import React from "react";
import { createPortal } from "react-dom";

const rootModal = document.getElementById("modal");

const Modal = ({ children }) => {
  return createPortal(<div>{children}</div>, rootModal);
};

export default Modal;
