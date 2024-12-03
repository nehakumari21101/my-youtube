import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className=" border grid grid-flow-col shadow ps-5 items-center">
      <div className="flex ms-5 col-span-1">
        <img
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt=""
          className="w-8"
          onClick={() => toggleMenuHandler()}
        />
        <img src="logo.png" alt="logo" className="w-32 h-16 ms-3" />
      </div>

      <div className=" col-span-10   h-10 ">
        <input
          type="text"
          placeholder="Search"
          className="border w-3/5 h-full rounded-s-full p-5"
        />
        <button className="border h-full px-4 rounded-e-full">🔍</button>
      </div>

      <div className="col-span-1 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAUg"
          alt=""
          className="w-8"
        />
      </div>
    </div>
  );
};

export default Head;
