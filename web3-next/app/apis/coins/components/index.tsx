'use client'
import { useEffect, useState } from "react"
import Web3 from 'web3';

export default function Section () {
    const [coinbase, setCoinbase] = useState('')
    useEffect(() => {
        const web3 = new Web3('http://localhost:7545');
        // 获取创世区块
        web3.eth.getCoinbase().then(setCoinbase)
    }, [])
    return (
        <div>
            <h1> 获取创世区块的 api 方法：web3.eth.getCoinbase </h1>
            <div>
                <div>{ coinbase }</div>
            </div>

        </div>
    )
}