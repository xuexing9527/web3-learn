import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "web3 learn",
  description: "Web3 learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script async src='https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'></script>
      </head>
      <body className="s">
        { children }
      </body>
    </html>
  )
}
