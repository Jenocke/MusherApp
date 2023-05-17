const processTextFile = (fileContent) => {
  const staffWatchIds = ["001", "002", "003"];
  const leg1Day = "11";
  const leg2Day = "12";
  //TODO
  /* slice the text by lines
      process each line
          slice the line in segments
          check the first segment's data
            if it's starting by 0056 => new musher
              start new object
              process next lines until another 056 => close musher
          return the object
    return an array of objects
   */
  const linesArray = fileContent.split("\r\n");

  //main loop. Loop through the whole file. We exit when we reach the "End" part or when we reach the end of the file
  let i = 0;
  const musherList = [];
  while (i < linesArray.length && !linesArray[i].startsWith("End")) {
    const lineSegments = linesArray[i].split(" ");
    //checking that it's a watch
    const isAWatch = lineSegments[0].startsWith("056");
    if (isAWatch) {
      const watchId = lineSegments[0].slice(lineSegments[0].length - 3);
      //checking if it's a staff's watch, to be sure
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

        //subloop. that loop goes through an arrival until the staff's watch is scanned
      } else {
        //if it's a staff's watch, we need to add the musher object to the list, and reset it
        console.log(musherList);
      }
    }

    i++;
  }
};

const handleImport = () => {
  const inputElement = document.getElementById("fileInput");
  const fileToImport = inputElement.files[0];
  if (!fileToImport) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    processTextFile(e.target.result);
  };
  const fileContent = reader.readAsText(fileToImport);
};

export { handleImport };
