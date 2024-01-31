import React, { useState, useEffect } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'; // Adjust the import based on actual package structure

const WalletConnect = () => {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);

  const connectWallet = async () => {
    const extensions = await web3Enable('YourAppName');
    if (extensions.length === 0) {
      // Handle the case where no extensions are found or permissions are denied
      console.log('No extension found or access denied.');
      return;
    }

    const allAccounts = await web3Accounts();
    setAccounts(allAccounts);
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      {accounts.length > 0 ? (
        accounts.map((account) => (
          <div key={account.address}>{account.meta.name ? account.meta.name : 'Unnamed Account'} - {account.address}</div>
        ))
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  )
}

export default WalletConnect;
