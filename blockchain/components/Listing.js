import React from 'react'
import Image from 'next/image'
function Listing({image, name, buyOutPrice, buyToken}) {

  return (
    <div>
        <Image src={image} width={400} height={400} alt=""/>
        <div className='flex__container'>
            <h1>{name}</h1>
            <p>Price: {buyOutPrice}</p>
            <button onClick={buyToken}>Buy it?</button>
        </div>
    </div>
  )
}

export default Listing