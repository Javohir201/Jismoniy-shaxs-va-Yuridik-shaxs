let physicalId = document.getElementById("physical");
let legalId = document.getElementById("legal");
let physical = document.querySelector(".physical");
let legal = document.querySelector(".legal");

physicalId.addEventListener("click", ()=> {
    physical.classList.remove("d-none");
    legal.classList.add("d-none");
});

legalId.addEventListener("click", ()=> {
    legal.classList.remove("d-none");
    physical.classList.add("d-none");
});