import "./index.css";

export const Navbar = () => {
    const listStyle = {
        listStyleType: "none",
        margin: 0,
        fontFamily: "Sora, sans-serif",
    }

    return (
        <nav className="flex items-center justify-between px-[48px] py-[24px] bg-primary text-accent font-main">
        <div className="text-lg font-bold">
            <img src="/assets/icon.svg" alt="Logo" className="h-8 inline-block mr-2" />
        </div>
        <ul className="flex space-x-[48px]" style={listStyle}>
            <li>
            <a href="/" className="hover:underline">
                Projects
            </a>
            </li>
            <li>
            <a href="/about" className="hover:underline">
                About
            </a>
            </li>
        </ul>
        </nav>
    );
}