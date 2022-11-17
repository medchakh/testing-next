
import { ConnectWallet, useAddress, useMetamask } from "@thirdweb-dev/react";
import { marketplace } from "../components/variables";
import styles from '../styles/Home.module.css'

export default function Home() {
  const connectMeta = useMetamask()
  const getMarketplace = useMarketplace(marketplace)
  const adress = useAddress()
console.log('this is user address', adress)
console.log('this is market place data', getMarketplace)

  return (
    <div className={styles.container}>
      <p>hello</p>
      {/* we can use either a specific function to open a wallet or use the connectWallet component */}
    <button onClick={connectMeta}>connect metamasc</button>
    <ConnectWallet />

    </div>
  )
}
