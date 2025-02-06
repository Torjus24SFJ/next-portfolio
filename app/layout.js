import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="bg-slate-800 w-full h-[80px] flex justify-center place-items-center">
            <h1 className="text-cyan-500 font-bold mr-10">
              This is the header layout
            </h1>
            <NavBar />
          </div>
        </header>
        <main className="p-20">{children}</main>
      </body>
    </html>
  );
}
