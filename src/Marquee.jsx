import "./tailwind.css";

const colors = ["red", "green", "blue", "white", "gray"];
const stroke = [
  "stroke-rose-500",
  "stroke-slate-500",
  "stroke-pink-500",
  "stroke-fuchsia-500",
  "stroke-indigo-500",
];

const listItems = colors.map((color, i) => {
  return (
    <li className="flex-1 m-1" key={color}>
      <svg width="50" height="50" className={stroke[i]}>
        <circle cx="25" cy="25" r="20" strokeWidth="5" />
      </svg>
    </li>
  );
});

function Marquee() {
  return (
      <div className="flex border rounded w-96 m-auto overflow-clip">
        <ol className="flex animate-marquee">{listItems}</ol>
        <ol className="flex animate-marquee">{listItems}</ol>
        <ol className="flex animate-marquee">{listItems}</ol>
      </div>
  );
}

export default Marquee;
