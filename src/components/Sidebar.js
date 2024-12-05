import React from 'react'
import { useSelector } from 'react-redux';

const  Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='shadow w-46 p-5 h-4/5 sticky top-16'  style={{height:"511px"}}>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h2 className='font-bold mt-5'>Subscription</h2>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h2 className='font-bold mt-5'>Watch Later</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;
