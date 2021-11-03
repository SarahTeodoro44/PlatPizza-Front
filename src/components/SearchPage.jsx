import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"77%", background:"#000000", border:"none", padding:"0.9rem"};
  return (
    <input 
     style={{width:"84%", background:"#000000", border:"none", padding:"0.9rem" , color:"white", margin: "0 18px"}}
     key="random1"
     value={keyword}
     placeholder={"Digite oque deseja"}

    />
  );
}

export default SearchBar