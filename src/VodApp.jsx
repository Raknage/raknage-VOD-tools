import React from "react";
import VodList from "./VodList";

/* const clientId = "4p88hsspd6ulqdrx8cunxt2x6tpivz";
const accessToken = "5maqx91cpijn26ogwij524ilxh0cx9"; //KEEP THIS SECRET!!!
const userId = "31138353"; */

console.log(import.meta.env.VITE_clientId);
console.log(import.meta.env.accessToken);
console.log(import.meta.env.userId);

function VodApp() {
  const [vods, setVods] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.twitch.tv/helix/videos?user_id=${userId}&first=5`, {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVods(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleClick(vodId) {
    fetch(`https://api.twitch.tv/helix/videos/markers?video_id=${vodId}`, {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const csvData = data.data.map((marker) => {
          return `${marker.description},${marker.position_seconds}`;
        });
        const blob = new Blob([csvData.join("\n")], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "markers.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Choose a VOD:</h1>
      <VodList vods={vods} handleClick={handleClick} />
    </div>
  );
}

export default VodApp;
