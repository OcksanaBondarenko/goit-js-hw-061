function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEL = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = Number(document.querySelector("input").value);
  let arreyBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const boxItem = document.createElement("div");
    boxItem.style.width = `${i * 10 + 30}px`;
    boxItem.style.height = `${i * 10 + 30}px`;
    boxItem.textContent = `${i}`;
    boxItem.style.backgroundColor = getRandomHexColor();
    boxItem.style.margin = "5px";

    arreyBoxes.push(boxItem);
  }

  boxesEL.append(...arreyBoxes);
}

function destroyBoxes() {
  boxesEL.innerHTML = "";
  document.querySelector("input").value = 0;
}

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);
