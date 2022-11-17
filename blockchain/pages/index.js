
import { ConnectWallet, useAddress, useMetamask } from "@thirdweb-dev/react";
import styles from '../styles/Home.module.css'

export default function Home() {
  const connectMeta = useMetamask()
  const adress = useAddress()
console.log(adress)
  return (
    <div className={styles.container}>
      <p>hello</p>
      {/* we can use either a specific function to open a wallet or use the connectWallet component */}
    <button onClick={connectMeta}>connect metamasc</button>
    <ConnectWallet />

    </div>
  )
}
