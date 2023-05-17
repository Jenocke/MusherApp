const processTextFile = (fileContent) => {
  //TODO
  /* slice the text by lines
      process each line
          slice the line in segments
          process each segment
          return an object with the segments data
    return an array of objects
   */
  const linesArray = fileContent.split("\r\n");
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
