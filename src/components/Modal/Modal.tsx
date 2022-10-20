import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../common/Button';
import styles from './Modal.module.scss';

export type ModalProps = {
   children?: ReactNode;
   open: boolean;
   onClose: () => void;
   setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const root = document.getElementById('portal') as HTMLElement;

const Modal: FC<ModalProps> = ({
   children,
   open,
   onClose,
}): JSX.Element | null => {
   if (!open) return null;

   return createPortal(
      <>
         <div className={styles.overlay}></div>
         <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            MODAL WINDOW
            {children}
            <Button onClick={onClose}>CLOSE MODAL</Button>
         </div>
      </>,
      root
   );
};

export default Modal;
