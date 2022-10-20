import Button from '../../common/Button';
import UserCard from '../UserCard';
import { useEffect, useMemo, useState, useDeferredValue, FC } from 'react';
// redux hooks
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
// ts models
import { IUser } from '../../models/IUser';
import { RootState } from '../../store';
// store
import { fetchUsers } from '../../store/users/FetchUsersList';
import { setFilterType } from '../../store/users/UserListSlice';
import { sortUsersList } from '../../helpers/selectors';
//helpers
import { filterBySearch } from '../../helpers';
import SearchInput from '../SearchInput';
// styles
import styles from './UsersList.module.scss';

const UsersList: FC = (): JSX.Element => {
   const dispatch = useAppDispatch();

   const { users, isLoading, error } = useAppSelector(
      (state: RootState) => state.UserListSlice
   );

   const useSortUsers = useAppSelector(sortUsersList);

   const [searchValue, setSearchValue] = useState<string>('');

   const defferedValue = useDeferredValue<string>(searchValue);

   const getListBySearch = useMemo(() => {
      if (defferedValue === '') {
         return users;
      }

      return filterBySearch(users, defferedValue);
   }, [defferedValue, users]);

   useEffect(() => {
      if (users.length === 0) {
         dispatch(fetchUsers());
      }

      if (searchValue) {
         dispatch(setFilterType(''));
      }
   }, [dispatch, users, searchValue]);

   const handleSortUsersList = () => dispatch(setFilterType('sort'));

   const getUsersList = useSortUsers
      ? useSortUsers.map((item: IUser) => <UserCard key={item.id} {...item} />)
      : getListBySearch.map((item: IUser) => (
           <UserCard key={item.id} {...item} />
        ));

   const isLoader = isLoading && <h1>LOADING, PLEASE WAIT</h1>;

   const isError = error && <h1>ERROR</h1>;

   return (
      <div className={styles.list}>
         <Button onClick={handleSortUsersList}>SORT LIST</Button>
         {isLoader}
         {isError}
         <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />
         {getUsersList}
      </div>
   );
};

export default UsersList;
