'use client'
import { useEffect, useState } from "react"
import Web3 from 'web3';

export default function Accounts () {
    const [accounts, setAccounts] = useState([''])
    useEffect(() => {
        const web3 = new Web3('http://localhost:7545');
        console.log(web3.eth.providers)
        // 获取账户
        web3.eth.getAccounts().then((accounts) => {
            setAccounts([...accounts])
        });


    }, [])
    return (
        <div>
            <h1> 获取账号的 api 方法：web3.eth.getAccounts() </h1>
            <div>
                <div>
                    web3.eth.getAccounts().then(console.log) 输出:
                </div>
                { accounts.map((item, index) => <div key={item}>账户{index + 1}的公钥：{item}</div>) }
            </div>

        </div>
    )
}