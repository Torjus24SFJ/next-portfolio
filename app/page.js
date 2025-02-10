// import Image from "next/image";
// import '@/styles/globals.css';

import { playfair_display } from "./layout";

export default function Home() {
  return (
    <>
      <section
        className={`flex flex-col items-center ${playfair_display.className}`}
      >
        <div className="text-center">
          <h3 className="text-sm custom_text_gradient">Front end developer</h3>
          <h1 className="capitalize text-8xl font-bold text-[var(--header-text)]">
            <span className="">creating</span>{" "}
            <span className="border_text">inspiring</span>
          </h1>
          <h2 className="capitalize text-7xl font-bold">
            & <span className="custom_text_gradient">beautiful</span> websites
          </h2>
          <h3 className="capitalize text-5xl font-bold">for your business</h3>
        </div>
      </section>
      <div className={`flex flex-col items-center custom_text_gradient ${playfair_display.className}`}>
        <div className="capitalize text-5xl mt-20">
        <h2>projects</h2>
        <h2>experience</h2>
        </div>
      </div>
      
    </>
  );
}
