import "../css/arrivals.css";

const ArrivalList = (props) => {
  return (
    <div className="arrivalList">
      <p>Arrival list Leg {props.leg}</p>
      <table></table>
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
  return (
    <div className="arrivalListPage">
      {!props.data && <NoList />}
      {props.data && <ArrivalList leg={props.leg} />}
      <div className="buttonArea">
        <button>Import arrival List</button>
      </div>
    </div>
  );
};

export { ArrivalListPage };
