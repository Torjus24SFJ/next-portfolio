import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { NavBar } from "@/components/Navbar";
import "./globals.css";


export const playfair_display = Playfair_Display({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="text-[var(--primary-text)]"
      >
        <header>
          <div className="">
            <NavBar />
          </div>
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
