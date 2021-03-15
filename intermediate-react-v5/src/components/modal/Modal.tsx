import React, { ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

const rootModal = document.getElementById("modal");

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props): ReactPortal | null => {
  return rootModal ? createPortal(<div>{children}</div>, rootModal) : null;
};

export default Modal;
