import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex text-center pt-[1px]'>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAUg"
      alt=""
      className="w-8 h-8 "
    />
      <span className='pl-2 font-bold'>{name}</span>
      <span className='pl-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
