// import Image from "next/image";
import { Navbar } from "./navbar";
import "./index.css";

export default function Home() {
  return (
    <div className="font-secondary bg-primary text-accent flex flex-col min-h-screen items-start justify-start">
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen max-w-[2160px] w-full my-[52px] md:my-[80px]">
        <div className="flex flex-col items-center justify-start min-h-screen max-w-[2160px] w-full my-[48px] gap-4 md:gap-8">
          <h1 className="text-jump text-6xl md:text-8xl text-center font-main font-bold text-accent mb-4">
            <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>,</span><br />
            <span>I</span><span>'</span><span>m</span><span>{'\u00A0'}</span><span>V</span><span>i</span><span>n</span><span>a</span>
          </h1>
          <h2 className="text-lg md:text-2xl text-center font-main text-accent mb-8 mx-[12px] md:mx-[48px] max-w-[1280px]">
            With a curious mind and a passion for design, I aim to blend technology into daily life in ways that feel natural and enriching.
          </h2>
          <hr className="h-[1px] w-[80%] px-[12px] md:px-[48px] xl:max-w-[1280px]" />
        </div>
      </div>
    </div>
  );
}
