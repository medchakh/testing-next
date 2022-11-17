import Image from 'next/image'
function Listing({name, image, price, buyToken}) {
  return (
    <div className="listing__container">
        <Image src={image} width="500" height="500"/>
        <div className='flex__container'>
            <h1>{title}</h1>
            <p>{price}</p>
            <button onClick={buyToken}>Buy Now</button>
        </div>
    </div>
  )
}

export default Listing