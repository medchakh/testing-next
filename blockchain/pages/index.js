
import { useContract } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

function Home() {
  const { contract, isLoading } = useContract("0xEde2c80b714A41c513431599D787Acb230Ab215C", "marketplace")
 const [listings, setListings] = useState() 
 useEffect(()=> {
  async function getListings(){
    try{
      if(!isLoading){
        const getlistings = await contract?.getAllListings()
        setListings(getlistings)
      }
    }catch(err){
      return alert('didnt work')
    }
  }
  getListings()
 })
  return (
    <div className={styles.container}>
      {JSON.stringify(listings)}
      </div>
  )
}

export default Home

