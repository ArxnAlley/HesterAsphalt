/* HESTER ASPHALT — MULTI-STEP ESTIMATE REQUEST
   Three steps + success state. Submissions route to the
   EstimateRequest workflow via the OHub bridge in global.js. */

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("estimateForm");
  if (!form) return;

  var panes = Array.prototype.slice.call(form.querySelectorAll(".est-pane"));
  var dots = document.querySelectorAll("[data-step-dot]");
  var bar = document.getElementById("estBar");
  var errNote = document.getElementById("estErr");
  var current = 1;

  function show(step) {
    current = step;
    panes.forEach(function (p) {
      p.classList.toggle("is-on", p.getAttribute("data-step") === String(step));
    });
    dots.forEach(function (d) {
      var n = parseInt(d.getAttribute("data-step-dot"), 10);
      d.classList.toggle("is-on", n === step);
      d.classList.toggle("is-done", typeof step === "number" && n < step);
    });
    if (bar) {
      var pct = step === "done" ? 100 : ((step - 1) / 2) * 100;
      bar.style.width = pct + "%";
    }
    var wrap = form.closest(".est-form-wrap");
    if (wrap) wrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validatePane(step) {
    var pane = form.querySelector('[data-step="' + step + '"]');
    var ok = true;

    pane.querySelectorAll(".chip-group").forEach(function (group) {
      var field = group.closest(".field");
      var anyRequired = group.querySelector("input[name=service], input[name=property]");
      if (!anyRequired) return;
      var chosen = group.querySelector("input:checked");
      field.classList.toggle("has-error", !chosen);
      if (!chosen) ok = false;
    });

    pane.querySelectorAll("input[required], select[required], textarea[required]").forEach(function (f) {
      var good = f.checkValidity() && f.value.trim() !== "";
      f.closest(".field").classList.toggle("has-error", !good);
      if (!good) ok = false;
    });
    return ok;
  }

  form.addEventListener("click", function (e) {
    if (e.target.closest("[data-next]")) {
      if (validatePane(current)) show(current + 1);
    }
    if (e.target.closest("[data-back]")) show(current - 1);
  });

  form.addEventListener("change", function (e) {
    var field = e.target.closest(".field");
    if (field) field.classList.remove("has-error");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validatePane(3)) return;

    var data = Object.fromEntries(new FormData(form).entries());
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;

    ohubSubmit("EstimateRequest", data)
      .then(function () {
        errNote.classList.remove("is-on");
        show("done");
      })
      .catch(function () {
        errNote.classList.add("is-on");
      })
      .finally(function () { btn.disabled = false; });
  });
});
