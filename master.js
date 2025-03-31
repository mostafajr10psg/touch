let start = document.querySelector("#start");
let end = document.querySelector("#end");
let move = document.querySelector("#move");

start.addEventListener("touchstart", function () {
  start.style.backgroundColor = "red";
});

end.addEventListener("touchstart", function () {
  end.style.backgroundColor = "yellow";
});

move.addEventListener("touchstart", function () {
  move.style.backgroundColor = "blue";
});
