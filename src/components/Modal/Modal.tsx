import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

export type ModalProps = {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const root = document.getElementById("portal") as HTMLElement;

const OVERLAY_STYLES: any = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transform: "translate (-50%, -50%)",
  background: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const MODAL_STYLES: any = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate (-50%, -50%)",
  background: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
}): JSX.Element | null => {
  if (!open) return null;

  return ReactDOM.createPortal(
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
