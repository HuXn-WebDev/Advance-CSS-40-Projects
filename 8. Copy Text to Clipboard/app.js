const textInput = document.getElementById("input");
const copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", () => {
  textInput.select();
  document.execCommand("copy");
});
