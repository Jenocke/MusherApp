const getArrivals = (leg) => {
  const filteredData = fetch("http://localhost:4000/arrivals")
    .then((res) => res.json())
    .then((data) => {
      const result = data.filter((element) => element.arrivalDay === leg);
      console.log("result");
      console.log(result);
      return result;
    });
  return filteredData;
};

export { getArrivals };
