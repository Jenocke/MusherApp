import { useEffect, useState } from "react";
import "../css/arrivals.css";
import { getArrivals } from "../utils/dataManager";
import { handleImport } from "../utils/controllers";

const ArrivalList = (props) => {
  return (
    <div className="arrivalList">
      <table>
        <thead>
          <tr>
            <th colspan="3">Arrival list Leg {props.leg}</th>
          </tr>
          <tr>
            <th>musher number</th>
            <th>category</th>
            <th>scanning time</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((element) => {
            return (
              <tr>
                <th>{element.musherNumber}</th>
                <th></th>
                <th>{element.scanningTime}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const NoList = () => {
  return (
    <div className="noList">
      <p>
        There's no registered arrivals yet.
        <br />
        Please import an arrival file.
      </p>
    </div>
  );
};

const ArrivalListPage = (props) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getArrivals(props.leg).then((data) => {
      setFilteredData(data);
    });
  }, [props.leg]);

  return (
    <div className="arrivalListPage">
      {filteredData.length === 0 && <NoList />}
      {filteredData.length > 0 && (
        <ArrivalList leg={props.leg} data={filteredData} />
      )}
      <div className="buttonArea">
        <button onclick={handleImport}>Import arrival List</button>
      </div>
    </div>
  );
};

export { ArrivalListPage };
