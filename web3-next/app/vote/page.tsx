// import { useEffect } from "react"
// import { useClient } from 'next-swc'

export default function Home() {
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  // setTimeout(() => {
  //   alert(1)
  //   console.log(1)
  //   // window.onload = () => {
  //   //   console.log(window)
  //     // console.log(window.Web3)
  //   // }
  // }, 3000)
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js";
  //   script.defer = true; // 设置 defer 属性
  //   document.body.appendChild(script);

  //   return () => {
  //     // 组件卸载时移除脚本
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <main>
      <div>
        <p>web3 投票项目</p>
        <ul>
          <li>投票</li>
        </ul>
      </div>
    </main>
  );
}
