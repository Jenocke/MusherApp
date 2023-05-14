const ArrivalList = (props) => {
  return (
    <div>
      <p>Arrival list Leg {props.leg}</p>
    </div>
  );
};

const ArrivalListPage = (props) => {
  return (
    <div className="arrivalListPage">
      <p>Arrival list page layout</p>
      <p>leg : {props.leg}</p>
      {!props.data && (
        <div className="noList">
          <p>No list imported yet</p>
        </div>
      )}
      {props.data && <ArrivalList leg={props.leg} />}
    </div>
  );
};

export { ArrivalListPage };
