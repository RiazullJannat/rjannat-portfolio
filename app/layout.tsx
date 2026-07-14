import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AosInit from "./components/AosInit";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

export const metadata: Metadata = {
  title: "RJannat | Portfolio",
  description: "This is Riazull Jannat's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} antialiased mx-auto min-h-full flex flex-col`}>
        <ToastContainer autoClose={1000}></ToastContainer>
        <AosInit />
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
