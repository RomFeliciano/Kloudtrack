// Get the modal
var modal = document.getElementById("modalOverlaySettings");
var elem = $("#modalOverlaySettings");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("modal-open");
    setTimeout(function () {
      elem.hide();
    }, 150);
  }
};

function popUpSettings() {
  $("#modalOverlaySettings").show().addClass("modal-open");
}

$("#closeSettings").click(function () {
  var elem = $("#modalOverlaySettings");
  elem.removeClass("modal-open");
  setTimeout(function () {
    elem.hide();
  }, 200);
});
