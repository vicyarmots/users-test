import { FC, ChangeEvent } from "react";
import Input from "../../common/Input";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: FC<SearchInputProps> = ({
  searchValue,
  setSearchValue,
}): JSX.Element => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  return (
    <Input
      type="text"
      label="search"
      placeholder="search for user ... "
      value={searchValue}
      onChange={handleSearch}
      name={"search"}
    />
  );
};

export default SearchInput;
