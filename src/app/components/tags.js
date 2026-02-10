import "../index.css";

export default function Tags({ tags, end }) {
    return (
        <div className={"flex flex-wrap gap-[8px]" + (end === "false" ? "" : " justify-end")}>
            {tags.map((tag, i) => (
                <span className="card-tag rounded-[4px] text-xs px-[12px] py-[4px] fit-content bg-white" key={i}>
                    {tag}
                </span>
            ))}
        </div>
    );
}