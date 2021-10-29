import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"77%", background:"#000000", border:"none", padding:"0.9rem"};
  return (
    <input 
     style={{width:"70%", background:"#000000", border:"none", padding:"0.9rem" , color:"white", margin: "0 181px"}}
     key="random1"
     value={keyword}
     placeholder={"Digite oque deseja"}

    />
  );
}

export default SearchBar