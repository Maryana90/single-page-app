import * as React from "react";
import q from "./SearchStyles.module.css";

const SearchInput = () => {
  return (
    <div className={q.inputBox}>
      <input
        className={q.inputSearch}
        type="text"
        placeholder="The most successful IT companies in 2020"
      />
    </div>
  );
};

export default SearchInput;
