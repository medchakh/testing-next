
import { ConnectWallet, useAddress, useContract,  useListings,  useMetamask } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { marketplace, nftCollection } from "../components/variables";
import styles from '../styles/Home.module.css'

 export default function Home() {
//   const userAdress = useAddress()
//   const getMarketplace = useContract(marketplace)
//   const {contract, isLoading} = getMarketplace
//   const [activeListings, setActiveListing] = useState(null)

useEffect(() => {
  if(userAddress) 
}, [userAddress])
  return (
    <div className={styles.container}>
     <p>to continue log in first with your wallet</p>
      <ConnectWallet/>
    </div>
  )
}
