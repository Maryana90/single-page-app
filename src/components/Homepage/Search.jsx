import * as React from "react";
import q from './SearchStyles.module.css';
import SearchInput from './SearchInput';


const Search = () => {
  return (
    <div>
      <div className={q.filters}>Filter by keywords</div>
      <SearchInput />
      <div className={q.filters + ' ' + q.result}>Results: 6</div>
      <hr className={q.line}/>
    </div>
  );
};

export default Search;