/* HESTER ASPHALT — BLOG CATEGORY FILTERING */

document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("blogGrid");
  if (!grid) return;
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = grid.querySelectorAll(".post-card");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("is-on"); });
      btn.classList.add("is-on");
      var filter = btn.getAttribute("data-filter");

      cards.forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-cat") === filter;
        card.classList.toggle("is-hidden", !show);
        if (show) card.classList.add("is-in");
      });
    });
  });
});
