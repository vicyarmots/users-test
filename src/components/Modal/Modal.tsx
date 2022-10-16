import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const root = document.getElementById("portal") as HTMLElement;

const OVERLAY_STYLES: any = {
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.4)",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: " scale(1)",
  top: 0,
  left: 0,
  transition: 0.5,
  zIndex: 1000,
};

const MODAL_STYLES: any = {
  position: "fixed",
  top: "30%",
  left: "20%",
  background: "#FFF",
  padding: "100px",
  zIndex: 1001,
};

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
}): JSX.Element | null => {
  if (!open) return null;

  return createPortal(
    <>
      <div style={OVERLAY_STYLES}>OVERLAY</div>
      <div
        className="modal"
        style={MODAL_STYLES}
        onClick={(e) => e.stopPropagation()}
      >
        MODAL WINDOW
        {children}
        <button onClick={onClose}>CLOSE MODAL</button>
      </div>
    </>,
    root
  );
};

export default Modal;
