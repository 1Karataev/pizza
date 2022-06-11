import React from 'react'
import ContentLoader from "react-content-loader"
function Skeleton() {
  return (
      <ContentLoader 
    speed={1}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className='pizza-block'
  >
     <rect x="21" y="20" rx="0" ry="0" width="4" height="4" /> 
    <rect x="26" y="22" rx="0" ry="0" width="0" height="1" /> 
    <circle cx="107" cy="84" r="4" /> 
    <rect x="-1" y="228" rx="0" ry="0" width="280" height="27" /> 
    <rect x="105" y="181" rx="0" ry="0" width="2" height="4" /> 
    <rect x="56" y="185" rx="0" ry="0" width="51" height="1" /> 
    <rect x="22" y="239" rx="0" ry="0" width="9" height="0" /> 
    <rect x="12" y="262" rx="0" ry="0" width="18" height="1" /> 
    <rect x="9" y="381" rx="8" ry="8" width="100" height="30" /> 
    <rect x="125" y="374" rx="22" ry="22" width="152" height="45" /> 
    <rect x="-2" y="273" rx="0" ry="0" width="280" height="88" /> 
    <circle cx="128" cy="106" r="101" />
    </ContentLoader>
  )
}

export default Skeleton