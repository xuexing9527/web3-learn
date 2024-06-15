'use client'
import { useEffect } from "react"
import Web3 from 'web3';

declare global {
    interface Window {
        Web3: typeof Web3;
    }
}

export default function Section () {
    useEffect(() => {
        // var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        // var web3 = new Web3('http://localhost:7545');
        var web3 = new Web3('http://localhost:8551');
        console.log(web3.eth.providers)
        web3.eth.getCoinbase().then(console.log);
        web3.eth.getAccounts().then(console.log);


    }, [])
    console.log(1)
    return <div>...</div>
}