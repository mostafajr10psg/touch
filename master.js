let start = document.querySelector("#start");
let end = document.querySelector("#end");
let move = document.querySelector("#move");

start.addEventListener("click", function () {
  if (start.style.backgroundColor === "red") {
    start.style.backgroundColor = "blue";
  } else {
    start.style.backgroundColor = "red";
  }
});

end.addEventListener("touchstart", function () {
  end.style.backgroundColor = "yellow";
});

move.addEventListener("touchstart", function () {
  move.style.backgroundColor = "blue";
});
