import "./tailwind.css";

const dur = "10s";
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
    <li className="m-1 flex-1" key={color}>
      <svg width="50" height="50" className={stroke[i]}>
        <circle cx="25" cy="25" r="20" strokeWidth="5" />
      </svg>
    </li>
  );
});

function Marquee() {
  return (
    <div className="m-auto flex w-96 overflow-x-hidden rounded border">
      <ol className="flex animate-marquee" style={{ animationDuration: dur }}>
        {listItems}
      </ol>
      <ol className="flex animate-marquee" style={{ animationDuration: dur }}>
        {listItems}
      </ol>
      <ol className="flex animate-marquee" style={{ animationDuration: dur }}>
        {listItems}
      </ol>
    </div>
  );
}

export default Marquee;
