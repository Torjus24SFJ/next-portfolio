// import Image from "next/image";
// import '@/styles/globals.css';

import { playfair_display } from "./layout";

export default function Home() {
  return (
    <>
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        rel="stylesheet"
      ></link> */}

      <section className={`flex flex-col items-center ${playfair_display.className}`}>
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
      {/* Image boxes */}
      <div className="mt-20">
        <div className="flex justify-end mb-10">
          <div className="bg-[#e9dfce] w-[300px] h-[200px] rounded-xl"></div>
        </div>

        <div className="flex justify-start">
          <div className="bg-[#e9dfce] w-[300px] h-[200px] rounded-xl"></div>
        </div>
      </div>
    </>
  );
}
