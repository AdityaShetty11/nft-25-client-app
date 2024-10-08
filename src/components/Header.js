import react, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const [connectWalletBtnLabel, setConnectWalletBtnLabel] = useState('Connect Wallet');

    const handleWallet = () => {
      activateBrowserWallet();
      console.log(account); 
      account?setConnectWalletBtnLabel(account):setConnectWalletBtnLabel('Connect Wallet');
      // account: wallet address
  
    }

    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Start Hunting</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Craft NFT</a>

          <button id="connect-wallet" onClick={handleWallet}>{connectWalletBtnLabel}</button>
        </div>
      </div>
    );
}

export default Header;
