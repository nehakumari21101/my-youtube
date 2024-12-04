import React from 'react'
import { Link } from 'react-router-dom';

const VideoCart = ({info}) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-3 ms-5 ps-5  w-80 cursor-pointer'>
        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCart
