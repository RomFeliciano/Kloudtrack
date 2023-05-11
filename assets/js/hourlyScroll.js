var button = document.getElementById("next");
button.onclick = function () {
  var container = document.getElementById("hourlyContainer");
  sideScroll(container, "right", 10, 500, 10);
};

var back = document.getElementById("prev");
back.onclick = function () {
  var container = document.getElementById("hourlyContainer");
  sideScroll(container, "left", 10, 500, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
