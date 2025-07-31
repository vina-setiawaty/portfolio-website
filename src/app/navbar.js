import "./index.css";
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {
    const listStyle = {
        listStyleType: "none",
        margin: 0,
        fontFamily: "Sora, sans-serif",
    }

    return (
        <nav className="flex items-center justify-between text-lg px-[48px] py-[24px] bg-primary text-accent font-main">
        <div className="text-lg font-bold">
            <Image src="/assets/icon.svg" alt="Logo" width={48} height={48} className="h-8 w-8 inline-block" />
        </div>
        <ul className="flex space-x-[48px]" style={listStyle}>
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
        </nav>
    );
}