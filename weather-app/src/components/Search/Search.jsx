import React from 'react';
import "../../assets/styles/components/search.scss";


function Search({ value, data, change, submit }) {
  return (
    <>
      <form className="search__container" onSubmit={submit}>
        <input type="text" value={value} onChange={change} placeholder="e.g. Kyiv,Ukraine" className="search__input" />
      </form>
    </>
  )
}

export default Search;