import "../index.css";
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";

export const Hero = ({ selectedData }) => {
    return (
        <div className="flex flex-col items-center justify-start w-full my-[48px] gap-4 md:gap-8">
            <Image src={selectedData.projectImg} width={16} height={9} alt="landscape_hero" className="w-full aspect-video" />
            <div id="project-heading" className="flex flex-col gap-4 w-full mb-4 md:mb-8 px-[16px] md:px=[0px]">
                <div id="title-and-tags" className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between w-full gap-4">
                    <Tags tags={selectedData.tags} end="true"/>
                    <h1 className="text-3xl md:text-6xl font-main font-bold text-accent">
                        {selectedData.title}
                    </h1>
                </div>
                <div id="project-details" className="flex flex-col md:flex-row items-start justify-between w-full gap-4 md:gap-12 mb-4">
                    <div className="flex-1">
                        <p className="text-sm md:text-lg text-left font-secondary text-accent">
                            {selectedData.projectDescription}
                        </p>
                    </div>
                    <div className="flex-1 flex flex-wrap md:flex-row gap-4 md:gap-8 md:justify-end">
                        {selectedData.supervisor &&
                            <div>
                                <h1 className="text-lg md:text-2xl font-semibold font-main">Supervisor</h1>
                                <p className="text-sm md:text-md">{selectedData.supervisor}</p>
                            </div>
                        }

                        {selectedData.teamMembers &&
                            <div>
                                <h1 className="text-lg md:text-2xl font-semibold font-main">Team Members</h1>
                                <ul>
                                    {selectedData.teamMembers.map((member, index) => (
                                        <li className="text-sm md:text-md" key={index}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <hr></hr>
            </div>
            {selectedData["project-section"]?.map((section, idx) => (
  <div 
    key={idx} 
    className="w-full my-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4"
  >
    {/* Always first square = text (fills its grid cell) */}
    <div className="p-4 flex flex-col  h-full w-full">
      <h2 className="text-xl md:text-2xl font-bold font-main mb-2">{section.heading}</h2>
      {section.paragraphs.map((para, i) => (
        <p key={i} className="text-sm md:text-base mb-2">{para}</p>
      ))}
    </div>

    {/* Case: Only 2 images → push them into bottom row */}
    {section.pictures.length === 2 ? (
      <>
        {/* Empty top-right on desktop, hidden on mobile */}
        <div className="hidden md:block"></div>
        {section.pictures.map((pic, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <div className="relative w-full aspect-video">
              <Image
                src={pic.img_link}
                alt={pic.caption}
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="text-sm md:text-md mt-2 text-center">{pic.caption}</p>
          </div>
        ))}
      </>
    ) : (
      /* Case: 3+ images → fill remaining slots */
      section.pictures.slice(0, 3).map((pic, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          <div className="relative w-full aspect-video">
            <Image
              src={pic.img_link}
              alt={pic.caption}
              fill
              className="object-cover rounded"
            />
          </div>
          <p className="text-sm md:text-md mt-2 text-center">{pic.caption}</p>
        </div>
      ))
    )}
  </div>
))}

            {/* Video Section */}
            <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={selectedData.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    )
}