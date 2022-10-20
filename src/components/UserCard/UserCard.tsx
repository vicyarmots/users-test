import { FC, MouseEvent, memo } from 'react';
import { useAppDispatch } from '../../hooks/useReduxHook';
import { IUser } from '../../models/IUser';
import { removeUser } from '../../store/users/UserListSlice';
import Card from '../../common/Card';
import Button from '../../common/Button';
import userIcon from '../../assets';
import styles from './UserCard.module.scss';

const UserCard: FC<IUser> = memo(({ id, name, email, phone }): JSX.Element => {
   const dispatch = useAppDispatch();

   const handleRemoveUser =
      (id: IUser['id']) => (event: MouseEvent<HTMLButtonElement>) => {
         event.preventDefault();
         dispatch(removeUser(id));
      };

   return (
      <Card className={styles.card}>
         <img
            src={userIcon}
            style={{ width: '30px', height: '30px' }}
            alt="user-icon"
         />
         <span style={{ color: 'yeallow' }}>{name}</span>
         <span style={{ color: 'blue' }}>{email}</span>
         <span style={{ color: 'green' }}>{phone}</span>
         <Button onClick={handleRemoveUser(id)} className={styles.button}>
            X
         </Button>
      </Card>
   );
});

export default UserCard;
