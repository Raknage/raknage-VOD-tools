import React from "react";

function VodList({ vods, handleClick }) {
  return (
    <ul>
      {vods.map((vod) => (
        <li key={vod.id}>
          <a href="#" onClick={() => handleClick(vod.id)}>
            {vod.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default VodList;
