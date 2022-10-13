import Button from "../../common/Button";
import UserCard from "../UserCard";
import { useEffect, useMemo, useState, useDeferredValue, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHook";

import { IUser } from "../../models/IUser";
import { RootState } from "../../store";

import { fetchUsers } from "../../store/FetchUsersList";

import { sortUsersList } from "../../store/UserListSlice";
//helpers
import { filterBySearch } from "../../helpers";
import SearchInput from "../SearchInput";

const UsersList: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { users, isLoading, error } = useAppSelector(
    (state: RootState) => state.UserListSlice
  );

  const [searchValue, setSearchValue] = useState<string>("");

  const defferedValue = useDeferredValue<string>(searchValue);

  const getListBySearch = useMemo(() => {
    if (defferedValue === "") {
      return users;
    }

    return filterBySearch(users, defferedValue);
  }, [defferedValue, users]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users]);

  const handleSortUsersList = () => dispatch(sortUsersList());

  const isLoad = isLoading && <h1>LOADING, PLEASE WAIT</h1>;

  const isError = error && <h1>ERROR</h1>;

  return (
    <div>
      <Button onClick={handleSortUsersList}>SORT LIST</Button>
      {isLoad}
      {isError}
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {getListBySearch.map((item: IUser) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default UsersList;
