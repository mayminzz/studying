const element = document.querySelector("#myText");
const log = document.querySelector(".log");
const handleChange = (e) => {
  let value = e.target.value;
  log.innerText = value;
};

element, addEventListener("input", handleChange);
const value = element.value;
console.log(value);
