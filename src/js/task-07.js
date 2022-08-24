const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("mousemuve", () => {
  span.style.fontSize = `${input.value}px`;
});
