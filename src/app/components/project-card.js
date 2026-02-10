'use client'

import React, { useState } from "react";
import "../index.css";
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";

export default function ProjectCard({ selectedData }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="project-card-container bg-primary w-full h-full sm:max-w-[360px] sm:h-[320px]">
            <div className="card-inner relative "
                onMouseEnter={() => setFlipped(true)}
                onMouseLeave={() => setFlipped(false)}>
                <div className="card-front">
                    <div className="image-container w-full h-full sm:w-[320px] sm:h-[320px] items-center justify-center">
                        {selectedData.thumbnailImg.endsWith('.mp4') || selectedData.thumbnailImg.endsWith('.mov') ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-center object-cover"
                            >
                                <source src={selectedData.thumbnailImg} type="video/mp4" />
                            </video>
                        ) : (
                            <Image
                                src={selectedData.thumbnailImg}
                                alt={selectedData.title}
                                fill
                                className="object-center object-contain"
                            />
                        )}
                    </div>
                </div>
                <div
                    className={`card-back absolute top-0 left-0 w-full flex items-center justify-center bg-primary/70 transition-all duration-500`}
                    style={{ opacity: flipped ? "100" : "0" }}
                >
                    <div className="image-container w-full h-full flex items-center justify-center">
                        <div className="hover-text text-center text-2xl p-[36px]">{selectedData.hoverText}</div>
                    </div>
                </div>
            </div>
            <Tags tags={selectedData.tags} end="false" />
            <h2 className="card-title text-3xl font-secondary font-semibold">{selectedData.title}</h2>
        </div>
    );
}