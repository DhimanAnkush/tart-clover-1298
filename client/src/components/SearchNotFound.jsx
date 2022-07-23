import React from 'react'

const SearchNotFound = () => {
 const style={
    display: "grid",
    gridTemplateColumn:"auto auto",
    justifyContent:"center",
    alignItems: "center",
    padding:"100px"
 } 
  return (
    <div style={style} >
        <img style={{width:200,height:160}}  src="https://in.sugarcosmetics.com/ic_empty_search_result.png" alt="Search Not found" />
        <p>Oops! We came up empty-handed.</p>
        <p>Sure you typed in the right spelling?</p>
    </div>
  )
}

export default SearchNotFound