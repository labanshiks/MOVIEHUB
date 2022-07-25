import "./widgetLg.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetLg() {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const getNewMovies = async () => {
      try {
        const res = await axios.get("/movies?new=true", {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewMovies();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Movies</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Movie</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {newMovies.map((movie) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
               src={movie.img} alt="" className="widgetLgImg"
              />
              <span className="widgetLgName">{movie.title}</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
              {movie.isSeries}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
