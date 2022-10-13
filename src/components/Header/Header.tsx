import { FC, memo } from "react";

const Header: FC = memo((): JSX.Element => {
  return (
    <div className="header">
      <h1>Header </h1>
    </div>
  );
});

export default Header;
