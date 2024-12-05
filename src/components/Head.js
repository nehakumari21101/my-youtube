import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(" ");
  const [suggestions, setSuggetions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () =>{
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async() =>{
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
    // console.log(json);
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" border grid grid-flow-col shadow ps-5 items-center sticky top-0 bg-white">
      <div className="flex ms-5 col-span-1">
        <img
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="hamberger"
          className="w-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img src="logo.png" alt="logo" className="w-32 h-16 ms-3" />
        </a>
      </div>

      <div className=" col-span-10   h-10 ">
        <input
          type="text"
          placeholder="Search"
          className="border w-3/5 h-full rounded-s-full p-5 border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className="border h-full px-4 rounded-e-full border-gray-300">
          🔍
        </button>

        {showSuggestion && <div className="fixed w-[34rem] bg-white rounded-xl my-2  shadow-2xl h-[28rem]">
          <ul className="mt-3">
            {suggestions.map( (s, index) => <li key={index} className="py-2 ms-5  hover:bg-gray-100">{s}</li>)}
            
          </ul>
        </div>}

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
