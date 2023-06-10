import { getLegArrivals } from "./dataManager";

const _importFileCallback = () => {};

const compareLists = (databaseList, importedList) => {
  const updatedList = JSON.parse(JSON.stringify(databaseList));
  importedList.forEach((element) => {
    if (!updatedList.find((item) => item.musherNumber === element.musherNumber))
      updatedList.push(element);
  });
  return updatedList;
};

const handleImportComparison = async (importedMushers) => {
  //First we slice the imported mushers in two arrays. Leg1 and Leg2
  const importedMushersLeg1 = importedMushers.filter(
    (element) => element.arrivalDay === 1
  );
  const importedMushersLeg2 = importedMushers.filter(
    (element) => element.arrivalDay === 2
  );
  //then we retrieve the arrays for leg1 and Leg2 that are already in the database
  const Leg1List = await getLegArrivals(1);
  const Leg2List = await getLegArrivals(2);
  //Then we call the function to compare
  const updatedListLeg1 = compareLists(Leg1List, importedMushersLeg1);
  const updatedListLeg2 = compareLists(Leg2List, importedMushersLeg2);
};

const processTextFile = (fileContent) => {
  const staffWatchIds = ["001", "002", "003"];
  const leg1Day = "11";
  const leg2Day = "12";
  const linesArray = fileContent.split("\r\n");

  //main loop. Loop through the whole file. We exit when we reach the "End" part or when we reach the end of the file
  let i = 0;
  const musherList = [];
  let currentMusherIndex = 0;
  while (i < linesArray.length && !linesArray[i].startsWith("End")) {
    const lineSegments = linesArray[i].split(" ");
    //checking that it's a watch
    const isAWatch = lineSegments[0].startsWith("056");
    if (isAWatch) {
      const watchId = lineSegments[0].slice(lineSegments[0].length - 3);
      //checking if it's the watch type (musher or staff)
      const isStaffWatch = staffWatchIds.includes(watchId);
      if (!isStaffWatch) {
        const musher = {};
        //this is a watch ID, and it's a musher's watch => we can start creating the object
        musher.musherNumber = watchId;
        if (lineSegments[1].startsWith(leg1Day)) {
          musher.arrivalDay = 1;
        } else if (lineSegments[1].startsWith(leg2Day)) {
          musher.arrivalDay = 2;
        }
        musher.scanningTime =
          lineSegments[2].slice(0, 2) + ":" + lineSegments[2].slice(2, 4);

        musher.dogsIDs = [];
        musherList.push(musher);
      } else {
        //if it's a staff's watch, we increase the currentMusherIndex for the next one. If there's no next one, this index will just not be used
        currentMusherIndex++;
      }
    } else {
      //it's not a watch, it's not end => should be a dog
      //we add the id segment to the dogs list
      musherList[currentMusherIndex].dogsIDs.push(lineSegments[0]);
    }

    i++;
  }
  handleImportComparison(musherList);
};

const handleImport = () => {
  const inputElement = document.getElementById("fileInput");
  const fileToImport = inputElement.files[0];
  if (!fileToImport) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    processTextFile(e.target.result, _importFileCallback);
  };
  reader.readAsText(fileToImport);
};

export { handleImport };
