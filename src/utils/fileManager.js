import { processTextFile } from "./controllers";
import { getArrivals } from "./dataManager";

const _importFileCallback = () => {};

const handleSaveToPC = async (list) => {
  const jsonData = { arrivals: list };
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "database.json";
  link.href = url;
  link.click();
};

const handleImport = () => {
  const inputElement = document.getElementById("fileInput");
  const fileToImport = inputElement.files[0];
  if (!fileToImport) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    console.log("import");
    processTextFile(e.target.result, _importFileCallback);
  };
  reader.readAsText(fileToImport);
};

export { handleImport, handleSaveToPC };
