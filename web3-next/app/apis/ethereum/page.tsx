'use client'
import { useEffect, useState } from 'react';
import Web3 from 'web3';
declare global {
  interface Window {
    ethereum?: {
      isMeteMask?: boolean
      request?: (args: { method: string, params?: any[] }) => Promise<any>
    }
  }
}
let i = 0

export default function Home() {
  useEffect(() => {
    console.log(++i)
    const web3 = new Web3('http://localhost:7545');
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      // 确保 window.ethereum 存在
      // 获取当前用户的账户 eth_requestAccounts
      window.ethereum.request?.({ method: 'eth_requestAccounts' })
        .then(accounts => {
          console.log(accounts);
          web3.eth.getBalance(accounts[0]).then((balance) => {
            console.log('Account balance in Wei:', balance);
            console.log('Account balance in Ether:', web3.utils.fromWei(balance, 'ether'))
          });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.log('MetaMask is not installed');
    }
  }, [])
  return (
    <main>
      <div>{}</div>
    </main>
  );
}
