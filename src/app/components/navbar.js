import "../index.css";
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {
    const listStyle = {
        listStyleType: "none",
        margin: 0,
        fontFamily: "Sora, sans-serif",
    }

    return (
        <nav className="fixed w-full text-sm md:text-lg bg-white text-accent font-main z-1000">
            <div className="m-auto flex w-full max-w-[2160px] items-center justify-between px-[12px] md:px-[48px] py-[12px] md:py-[24px]">
                <div className="text-lg font-bold">
                    <Link href="/">
                    <Image src="/assets/icon.svg" alt="Logo" width={48} height={48} className="h-6 md:h-8 inline-block" />
                    </Link>
                </div>
                <ul className="flex space-x-[24px] md:space-x-[48px]" style={listStyle}>
                    <li>
                        <Link href="/" className="hover:underline">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}