'use client';
import Image from "next/image";
import { Navbar } from "../components/navbar";
import "../index.css";
import { Footer } from "../components/footer";
import { FINAL_DATA } from "../data";
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const message = searchParams.get('msg');
  const selectedData = FINAL_DATA.find(data => data.titleID === message);
  const mainBodyStyle = "flex flex-col m-auto items-center justify-start max-w-[2160px] w-full md:w-[80%] my-[52px] md:my-[80px]"

  return (
    <div className="font-secondary bg-primary text-accent flex flex-col min-h-screen items-start justify-start">
      <Navbar />
      <div className= {mainBodyStyle}>
        <div className="flex flex-col items-center justify-start w-full my-[48px] gap-4 md:gap-8">
          <Image src={selectedData.projectImg} width={16}  height={9} className="w-full aspect-video" />
          <div id="project-heading">
            
          </div>
        </div>
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
    </div>
  );
}
