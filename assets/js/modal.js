// Get the modal
var modal = document.getElementById("modalOverlay");
var elem = $("#modalOverlay");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("modal-open");
    setTimeout(function () {
      elem.hide();
    }, 150);
  }
};

function popUp() {
  $("#modalOverlay").show().addClass("modal-open");
}

$("#close").click(function () {
  var elem = $("#modalOverlay");
  elem.removeClass("modal-open");
  setTimeout(function () {
    elem.hide();
  }, 200);
});
