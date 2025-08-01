import "../index.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-white text-accent font-main py-4">
            <div className="m-auto flex w-full max-w-[2160px] items-center justify-between px-[12px] md:px-[48px]">
                <div className="text-lg font-bold">
                    <Image src="/assets/icon.svg" alt="Logo" width={48} height={48} className="h-6 md:h-8 inline-block" />
                </div>
                <p className="text-sm md:text-base">
                    © {new Date().getFullYear()} Vina. All rights reserved.
                </p>
            </div>
        </footer>
    );
};