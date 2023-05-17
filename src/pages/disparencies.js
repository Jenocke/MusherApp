import { useEffect, useState } from "react";
import "../css/disparencies.css";
import { getArrivals } from "../utils/dataManager";

const DisparenciesDetector = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArrivals().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="disparenciesDetector">
      <table>
        <thead>
          <tr>
            <th>Disparencies detector</th>
          </tr>
          <tr>
            <th>musher Number</th>
            <th>Dogs Leg 1</th>
            <th>Dogs Leg 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            console.log(element);
            return (
              <tr>
                <th>{element.musherNumber}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export { DisparenciesDetector };
