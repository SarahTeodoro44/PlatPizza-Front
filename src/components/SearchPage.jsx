import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"100%", background:"#000000", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Digite oque deseja"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar