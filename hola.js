const nameUser = document.getElementById("nameUser");
const title = document.getElementsByClassName("title");
const subTitle = document.getElementsByClassName("subTitle");

const btnSubmit = document.getElementById("btnSubmit");
const labelConvert = document.getElementById("labelConvert");

btnSubmit.addEventListener("click", function () {
  for (let index = 0; index < title.length; index++) {
    const elementTitle = title[index];
    const elementSubTitle = subTitle[index];
    elementTitle.innerText = nameUser.value;
    elementSubTitle.innerText = `Bienvenido`;
  }
});

const switchConvert = document.getElementById("switchConvert");
const btnConvert = document.getElementById("btnConvert");
const payload = document.getElementById("payload");
const response = document.getElementById("response");

let isDollar = true;

btnConvert.addEventListener("click", function (e) {
  if (isDollar) {
    response.value = (Number(payload.value) / 6.97).toFixed(2);
  } else if (!isDollar) {
    response.value = (Number(payload.value) * 6.97).toFixed(2);
  }
});

btnSubmit.addEventListener("click", function () {
  for (let index = 0; index < title.length; index++) {
    const elementTitle = title[index];
    const elementSubTitle = subTitle[index];
    elementTitle.innerText = nameUser.value;
    elementSubTitle.innerText = `Bienvenido`;
  }
});
switchConvert.addEventListener("change", function (e) {
  if (e.currentTarget.checked) {
    isDollar = false;
    labelConvert.innerText = `INTRODUCIR MONTO EN DOLARES ($):`;
  } else {
    isDollar = true;
    labelConvert.innerText = `INTRODUCIR MONTO EN BOLIVIANOS (Bs.):`;
  }
});
