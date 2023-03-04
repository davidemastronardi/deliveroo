import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Restaurant = () => {

    const [test] =useSearchParams();
    console.log(test.get("test"));
  return (
    <div>Restaurant</div>
  )
}

export default Restaurant