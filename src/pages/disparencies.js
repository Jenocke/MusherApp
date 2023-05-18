import { useEffect, useState } from "react";
import "../css/disparencies.css";
import { getArrivals, compareArrivals } from "../utils/dataManager";

const FaultyMusher = (props) => {
  const musher = props.musher;
  const longestArray =
    musher.dogsIDLeg1.length < musher.dogsIDLeg2.length
      ? musher.dogsIDLeg2
      : musher.dogsIDLeg1;
  return (
    <>
      <tr>
        <th rowSpan={musher.dogsIDLeg2.length.toString()} className="musherId">
          {musher.musherNumber}
        </th>
        <td>{musher.dogsIDLeg1[0]}</td>
        <td>{musher.dogsIDLeg2[0]}</td>
      </tr>
      {longestArray.map((item, index) => {
        const day1dog = musher.dogsIDLeg1[index];
        const day2dog = musher.dogsIDLeg2[index];
        if (
          day1dog === musher.dogsIDLeg1[0] ||
          day2dog === musher.dogsIDLeg2[0]
        ) {
          return <></>;
        }
        return (
          <tr>
            <td className="empty"></td>
            <td>{day1dog}</td>
            <td>{day2dog}</td>
          </tr>
        );
      })}
    </>
  );
};

const NoDisparencies = () => {
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
        <tbody></tbody>
      </table>
    </div>
  );
};

const DisparenciesTable = (props) => {
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
          {props.data.map((element, index) => {
            return <FaultyMusher musher={element} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const DisparenciesDetector = (props) => {
  const [faultyMushers, setFaultyMushers] = useState([]);

  useEffect(() => {
    compareArrivals().then((data) => {
      data && setFaultyMushers(data);
    });
  }, []);

  return (
    <>
      {faultyMushers.length === 0 && <NoDisparencies />}
      {faultyMushers.length > 0 && <DisparenciesTable data={faultyMushers} />}
    </>
  );
};
export { DisparenciesDetector };
