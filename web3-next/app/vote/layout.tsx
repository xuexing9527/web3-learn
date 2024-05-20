import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "web3 vote",
  description: "Web3 vote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{ children }</section>
}
