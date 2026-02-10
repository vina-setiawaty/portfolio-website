'use client';
import Head from 'next/head';
import { Navbar } from "../components/navbar";
import "../index.css";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { HeroWeb } from "../components/hero_web";
import { FINAL_DATA, WEB_DATA } from "../data";
import { React, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";


function Home() {
  const searchParams = useSearchParams();
  const typeMessage = searchParams.get('type');
  const message = searchParams.get('msg');
  const selectedData = typeMessage === "web" ? WEB_DATA.find(data => data.titleID === message) : FINAL_DATA.find(data => data.titleID === message);
  const mainBodyStyle = "flex flex-col m-auto items-center justify-start max-w-[2160px] w-full md:w-[80%] my-[52px] md:my-[80px]"

  useEffect(() => {
    document.title = selectedData?.title || 'Project'
  }, []);

  return (
    <>
    <div className="font-secondary bg-primary text-accent flex flex-col min-h-screen items-start justify-start">
        <Navbar />
        <div className={mainBodyStyle}>
          {typeMessage === "web" ? (<HeroWeb selectedData={selectedData} />) : (<Hero selectedData={selectedData} />)}
          {/* <div id="projects" className="flex flex-col items-center justify-start w-full my-[24px]">
      <h1 className="text-3xl md:text-4xl font-main font-semibold text-accent mb-8">
        Design Projects
      </h1>
      <div className="flex flex-row items-center justify-center w-full gap-[24px]">
        {FINAL_DATA.map((data, i) => (
          <Link href={{ pathname: '/project', query: { msg: data.titleID } }}>
          <ProjectCard image={data.thumbnailImg} title={data.title} tags={data.tags} hoverText={data.hoverText} />
          </Link>
        ))}
      </div>
    </div> */}
        </div>
        <Footer />
      </div></>
  );
}


export default function ProjectPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
