import { useEffect, useState } from "react";
import { fetchEpisodes } from "../../api";
import { EpisodeList } from "../presentational/EpisodeList";
import "../Episodes.css";

export const EpisodesContainer = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetchEpisodes().then((data) => {
      setEpisodes(data);
    });
  }, []);

  return <EpisodeList episodes={episodes} />;
};