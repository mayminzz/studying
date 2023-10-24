const userName = document.querySelector("#userName");
const major = document.querySelector("#major");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let tbody = document.querySelector("tbody");
  console.log(tbody);
  let newTr = document.createElement("tr");
  let nameTd = document.createElement("td");
  nameTd.innerText = userName.value;
  userName.value = "";

  let majorTd = document.createElement("td");
  majorTd.innerText = major.value;
  major.value = "";

  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  
  tbody.appendChild(newTr);
});
