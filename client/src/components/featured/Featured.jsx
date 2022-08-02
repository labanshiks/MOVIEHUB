import { PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { Link } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [isHovered, setIsHovered] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div
      className="featured"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.logo} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link
            to={{ pathname: "/watch", content: content }}
            style={{ textDecoration: "none" }}
          >
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
        </div>
      </div>
      {isHovered && (
        <>
          <video src={content.trailer} autoPlay={true} loop />
          <div className="info">
            <img src={content.logo} alt="" />
            <span className="desc">{content.desc}</span>
            <div className="buttons">
              <Link
                to={{ pathname: "/watch", content: content }}
                style={{ textDecoration: "none" }}
              >
                <button className="play">
                  <PlayArrow />
                  <span>Play</span>
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
