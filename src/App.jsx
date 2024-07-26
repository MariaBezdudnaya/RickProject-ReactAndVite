import { useState } from "react";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationList } from "./components/presentational/LocationList";
import "./App.css";
import "./components/Locations.css";
import "./components/Episodes.css";

function App() {

  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
    setShowLocations(false);
  };

  const toggleLocations = () => {
    setShowLocations(!showLocations);
    setShowEpisodes(false);
  };

  return (
    <div className="ShowCard_conatainer">
      <div className="ShowCard" onClick={toggleEpisodes}>Episodes</div>
      {showEpisodes && <EpisodeList />}
      <div className="ShowCard" onClick={toggleLocations}>Locations</div>
      {showLocations && <LocationList />}
    </div>
  );
}

export default App
