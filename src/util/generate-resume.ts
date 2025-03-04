type HandleResumeGeneration = { blob: Blob; device: "mobile" | "desktop" };

const openPDF = (blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const fiveMinInMilliseconds = 60000 * 5;
  window.open(url, "_blank");

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, fiveMinInMilliseconds);
};

const downloadPDF = (blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Isaque Duarte - Resume.pdf";
  a.click();
  URL.revokeObjectURL(url);
};

export const handleResumeGeneration = ({
  blob,
  device,
}: HandleResumeGeneration) => {
  switch (device) {
    case "mobile":
      downloadPDF(blob);
      break;
    case "desktop":
      openPDF(blob);
      break;
    default:
      break;
  }
};
