import { FC } from "react";

import UsersList from "./UsersList/index";
import UserFormModal from "./UserFormModal";

const Layout: FC = () => {
  return (
    <div className="App">
      <UsersList />
      <UserFormModal />
    </div>
  );
};

export default Layout;
