const getLegArrivals = async (leg) => {
  const filteredData = fetch("http://localhost:4000/arrivals")
    .then((res) => res.json())
    .then((data) => {
      const result = data.filter((element) => element.arrivalDay === leg);
      return result;
    });
  return filteredData;
};

const getArrivals = async () => {
  const data = await fetch("http://localhost:4000/arrivals")
    .then((res) => res.json())
    .then((data) => {
      const result = data;
      return result;
    });
  return data;
};

const compareArrivals = async (data) => {
  const dataLeg1 = await getLegArrivals(1);
  console.log(dataLeg1);
  const dataLeg2 = await getLegArrivals(2);
  console.log(dataLeg2);
  const faultyDataSet = [];

  //passing through each leg 2 arrival to compare with leg 1 arrival
  dataLeg2.forEach((element) => {
    let isElementLegit = true;
    const matchData = dataLeg1.find(
      (item) => item.musherNumber === element.musherNumber
    );
    //comparing dog lists
    element.dogsIDs.forEach((chipId) => {
      if (isElementLegit) {
        const isFound = matchData.dogsIDs.includes(chipId);
        if (!isFound) {
          isElementLegit = false;
        }
        if (!isElementLegit) {
          const faultyElement = {
            musherNumber: element.musherNumber,
            dogsIDLeg1: matchData.dogsIDs,
            dogsIDLeg2: element.dogsIDs,
          };
          console.log(faultyElement);
          faultyDataSet.push(faultyElement);
          return;
        }
      }
    });
  });
  console.log(faultyDataSet);
  return faultyDataSet;
};

export { getArrivals, getLegArrivals, compareArrivals };
