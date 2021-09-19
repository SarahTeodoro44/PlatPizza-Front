import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"100%", background:"#000000", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={{width:"100%", background:"#000000", border:"none", padding:"0.5rem" , color:'white'}}
     key="random1"
     value={keyword}
     placeholder={"Digite oque deseja"}

    />
  );
}

export default SearchBar