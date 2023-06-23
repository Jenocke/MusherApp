import { useEffect, useState } from "react";
import "../css/arrivals.css";
import { getLegArrivals } from "../utils/dataManager";
import { handleImport, handleSaveToPC } from "../utils/fileManager";

const ArrivalList = (props) => {
  return (
    <div className="arrivalList">
      <table>
        <thead>
          <tr>
            <th>Arrival list Leg {props.leg}</th>
          </tr>
          <tr>
            <th>musher number</th>
            <th>category</th>
            <th>scanning time</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((element, index) => {
            return (
              <tr key={index}>
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
    getLegArrivals(props.leg).then((data) => {
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
        <input type="file" accept=".txt" id="fileInput" />
        <button onClick={handleImport}>Import arrival file</button>
      </div>
    </div>
  );
};

export { ArrivalListPage };
