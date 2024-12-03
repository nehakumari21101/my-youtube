import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name={"All"} />
      <Button name={"Music"}/>
      <Button name={"Podecasts"}/>
      <Button name={"Horoscope"}/>
      <Button name={"Mixes"}/>
      <Button name={"News"}/>
      <Button name={"Web series"}/>
      <Button name={"All"}/>
      <Button name={"Music"}/>
      <Button name={"Podecasts"}/>
      {/* <Button name={"Horoscope"}/> */}
    </div>
  )
}

export default ButtonList;
