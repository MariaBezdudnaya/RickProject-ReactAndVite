import { useState } from "react";
// import { Rick } from "./components/Rick";
// import { EpisodesContainer } from "./components/containers/EpisodesContainer";
import { EpisodeList } from "./components/presentational/EpisodeList";
// import { Locations } from "./components/Locations";
// import { LocationsContainer } from "./components/containers/LocationsContainer";
import { LocationList } from "./components/presentational/LocationList";
import "./App.css";
import "./components/Locations.css";
import "./components/Episodes.css";

function App() {

  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const toggleRick = () => {
    setShowEpisodes(!showEpisodes);
    setShowLocations(false);
  };

  const toggleLocations = () => {
    setShowLocations(!showLocations);
    setShowEpisodes(false);
  };

  return (
    <div className="ShowCard_conatainer">
      <div className="ShowCard" onClick={toggleRick}>Episodes</div>
      {showEpisodes && <EpisodeList />}
      <div className="ShowCard" onClick={toggleLocations}>Locations</div>
      {showLocations && <LocationList />}
    </div>
  );
}

export default App
