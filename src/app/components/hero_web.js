import "../index.css";
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";
import parse from 'html-react-parser';
import { Video } from "lucide-react";

// For web dev projects

export const HeroWeb = ({ selectedData }) => {
    return (
        <div className="flex flex-col items-center justify-start w-full my-[48px] gap-4 md:gap-8">
            <Image src={selectedData.projectImg} width={16} height={9} alt="landscape_hero" className="w-full" />
            <div id="project-heading" className="flex flex-col gap-4 w-full mb-4 md:mb-8 px-[16px] md:px=[0px]">
                <div id="title-and-tags" className="flex flex-col md:flex-row-reverse items-start justify-between w-full gap-4">
                    <Tags tags={selectedData.tags} end="true" />
                    <h1 className="text-3xl md:text-6xl font-main font-bold text-accent">
                        {selectedData.title}
                    </h1>
                </div>
                <div id="project-details" className="flex flex-col md:flex-row items-start justify-between w-full gap-4 md:gap-12 mb-4">
                    <div className="flex-1">
                        <p className="text-sm md:text-lg text-left font-secondary text-accent italic">
                            {selectedData.year}
                        </p>
                        <p className="text-sm md:text-lg text-left font-secondary text-accent font-italic">
                            {parse(selectedData.projectDescription)}
                        </p>
                    </div>
                    {/* <div className="flex-1 flex flex-wrap md:flex-row gap-4 md:gap-8 md:justify-end">
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
                    </div> */}
                </div>
                <hr></hr>
            </div>
        </div>
    )
}