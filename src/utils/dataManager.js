const getLegArrivals = (leg) => {
  const filteredData = fetch("http://localhost:4000/arrivals")
    .then((res) => res.json())
    .then((data) => {
      const result = data.filter((element) => element.arrivalDay === leg);
      return result;
    });
  return filteredData;
};

const getArrivals = () => {
  const data = fetch("http://localhost:4000/arrivals")
    .then((res) => res.json())
    .then((data) => {
      const result = data;
      return result;
    });
  return data;
};

export { getArrivals, getLegArrivals };
