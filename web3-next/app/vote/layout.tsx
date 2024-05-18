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
  return <html><body className="s">{children}</body></html>;
}
