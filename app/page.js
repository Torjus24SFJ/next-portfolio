// import Image from "next/image";
// import '@/styles/globals.css';

import { playfair_display } from "./layout";

export default function Home() {
  return (
    <>
      <div className="scroll-container">
        <section className="section-normal section-1">
          <div
            className={`flex flex-col items-center text-center ${playfair_display.className}`}
          >
            <h3 className="text-sm bg-gradient-to-b from-[#e9dfce] to-[#caa35f] bg-clip-text text-transparent">
              Front end developer
            </h3>
            <h1 className="capitalize text-8xl font-bold text-[var(--header-text)]">
              <span className="">creating</span>{" "}
              <span className="border_text">inspiring</span>
            </h1>
            <h2 className="capitalize text-7xl font-bold">
              &{" "}
              <span className="bg-gradient-to-b from-[#e9dfce] to-[#caa35f] bg-clip-text text-transparent">
                beautiful
              </span>{" "}
              websites
            </h2>
            <h3 className="capitalize text-5xl font-bold">for your business</h3>
          </div>
        </section>
        <section className="section-full section-2">
          <div
            className={`flex flex-col items-center font-bold bg-gradient-to-b from-[#e9dfce] to-[#caa35f] bg-clip-text text-transparent ${playfair_display.className}`}
          >
            <div className="capitalize text-5xl mt-10">
              <h2>projects</h2>
            </div>
          </div>
        </section>
        <section className="section-full section-3">
          <div
            className={`flex flex-col items-center font-bold bg-gradient-to-b from-[#e9dfce] to-[#caa35f] bg-clip-text text-transparent ${playfair_display.className}`}
          >
            <div className="capitalize text-5xl mt-10">
              <h2>experience</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
