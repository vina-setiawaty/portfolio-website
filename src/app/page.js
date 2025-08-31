// import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import "./index.css";
import { Footer } from "./components/footer";
import ProjectCard from "./components/project-card";
import { FINAL_DATA, WEB_DATA } from "./data";

export default function Home() {
  const mainBodyStyle = "flex flex-col m-auto items-center justify-start max-w-[2160px] w-full md:w-[80%] my-[52px] md:my-[80px] gap-12"

  return (
    <div className="font-secondary bg-primary text-accent flex flex-col min-h-screen items-start justify-start">
      <Navbar />
      <div className= {mainBodyStyle}>
        <div className="flex flex-col items-center justify-start w-full my-[48px] gap-4 md:gap-8">
          <h1 className="text-jump text-6xl md:text-8xl text-center font-secondary font-bold text-accent mb-4">
            <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>,</span><br />
            <span>I</span><span>&apos;</span><span>m</span><span>{'\u00A0'}</span><span>V</span><span>i</span><span>n</span><span>a</span>
          </h1>
          <h2 className="text-lg md:text-2xl text-center font-main text-accent mb-8 mx-[12px] md:mx-[48px] w-full">
            With a curious mind and a passion for design, I aim to blend technology into daily life in ways that feel natural and enriching.
          </h2>
          <hr className="h-[1px] w-[80%] px-[12px] md:px-[48px] w-[80%] md:w-full" />
        </div>
        <div id="projects" className="flex flex-col items-center justify-start w-full my-[24px]">
          <h1 className="text-3xl md:text-4xl font-main font-semibold text-accent mb-8">
            Web Development
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center w-full gap-[24px]">
            {WEB_DATA.map((data, i) => (
              <Link href={{ pathname: '/project', query: { msg: data.titleID } }} key={i}>
                <ProjectCard selectedData={data} />
              </Link>
            ))}
          </div>
        </div>
        <div id="projects" className="flex flex-col items-center justify-start w-full my-[24px]">
          <h1 className="text-3xl md:text-4xl font-main font-semibold text-accent mb-8">
            Design Projects
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center w-full gap-[24px]">
            {FINAL_DATA.map((data, i) => (
              <Link href={{ pathname: '/project', query: { msg: data.titleID } }} key={i}>
                <ProjectCard selectedData={data} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
