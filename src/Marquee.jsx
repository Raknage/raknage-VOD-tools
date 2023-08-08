import "./tailwind.css";
import "./marque.css";

const colors = ["red", "green", "blue", "white", "gray"];
const stroke = [
  "stroke-rose-500",
  "stroke-slate-500",
  "stroke-pink-500",
  "stroke-fuchsia-500",
  "stroke-indigo-500",
];

function Marquee() {
  return (
    <div className="flex justify-center border rounded w-max m-auto overflow-hidden">
      <ol className="flex gap-2 marquee">
        {colors.map((color, i) => {
          return (
            <li className="flex-1" key={color}>
              <svg width="50" height="50" className={stroke[i]}>
                <circle cx="25" cy="25" r="20" strokeWidth="5" />
              </svg>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Marquee;
