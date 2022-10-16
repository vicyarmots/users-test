import { FC, useState, lazy, Suspense } from "react";
import { ModalProps } from "../Modal/Modal";
import UserForm from "../UserForm/UserForm";
import Button from "../../common/Button";

const Modal = lazy(() => import("../Modal"));

const UserFormModal: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<ModalProps["open"]>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>ADD USER</Button>
      <Suspense fallback={null}>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <UserForm setIsOpen={setIsOpen} />
        </Modal>
      </Suspense>
    </>
  );
};

export default UserFormModal;
