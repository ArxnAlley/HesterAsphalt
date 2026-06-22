/* HESTER ASPHALT — PROJECTS GALLERY FILTERING */

document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("projGrid");
  if (!grid) return;
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = grid.querySelectorAll(".proj-card");
  var empty = document.getElementById("projEmpty");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("is-on"); });
      btn.classList.add("is-on");
      var filter = btn.getAttribute("data-filter");
      var shown = 0;

      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-tags") || "").split(/\s+/);
        var show = filter === "all" || tags.indexOf(filter) !== -1;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          shown++;
          /* re-trigger reveal animation for cards entering view */
          card.classList.add("is-in");
        }
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });
});
