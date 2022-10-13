import { FC, useState } from "react";
import Modal from "../Modal";
import { ModalProps } from "../Modal/Modal";
import UserForm from "../UserForm/UserForm";
import Button from "../../common/Button";

const UserFormModal: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<ModalProps["open"]>(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>ADD USER</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <UserForm setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default UserFormModal;
