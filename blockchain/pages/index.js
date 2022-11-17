
import { useAddress, useContract, ConnectWallet } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import Listing from '../components/Listing'
import styles from '../styles/Home.module.css'

function Home() {
  const userAddress = useAddress()
  const { contract, isLoading } = useContract("0xEde2c80b714A41c513431599D787Acb230Ab215C", "marketplace")
 const [listings, setListings] = useState() 
 async function buyOutToken(listingId){
  if(!isLoading){
    try{
      await contract?.buyoutListing(listingId, 1)
      console.log('success buying')
    }catch(err){
      alert('cannot buy token', err)
    } 
  }
 }
 useEffect(()=> {
  async function getListings(){
    try{
      if(!isLoading){
        const getlistings = await contract?.getAllListings()
        setListings(getlistings)
        console.log(listings)
      }
    }catch(err){
      return alert('didnt work')
    }
  }
  getListings()
 })
  return (
    <div className={styles.container}>
            <ConnectWallet />

      {listings?.map(listing => {return <Listing name={listing.asset.name} image={listing.asset.image} 
      buyOutPrice={(listing?.currencyContractAddress / 1e81)} buyToken={() => buyOutToken(listing?.asset?.id)}/>})}
      </div>
  )
}

export default Home

