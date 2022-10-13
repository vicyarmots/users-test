import { FC } from "react";

import UserFormModal from "./UserFormModal";
import UsersList from "./UsersList/index";

const Layout: FC = () => {
  return (
    <div className="App">
      <UsersList />
      <UserFormModal />
    </div>
  );
};

export default Layout;
