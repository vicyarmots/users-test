import { FC, MouseEvent } from "react";
import { useAppDispatch } from "../../hooks/useReduxHook";
import { IUser } from "../../models/IUser";
import { removeUser } from "../../store/UserListSlice";
import Card from "../../common/Card";
import Button from "../../common/Button";

const UserCard: FC<IUser> = ({ id, name, email, phone }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRemoveUser =
    (id: number) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(removeUser(id));
    };

  return (
    <Card>
      <span style={{ color: "yeallow" }}>{name}</span>
      <span style={{ color: "blue" }}>{email}</span>
      <span style={{ color: "green" }}>{phone}</span>
      <Button onClick={handleRemoveUser(id)}>DELETE USER</Button>
    </Card>
  );
};

export default UserCard;
