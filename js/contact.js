/* HESTER ASPHALT — CONTACT FORM
   Validates and routes messages through the OHub bridge (global.js). */

function hesterValidateField(field) {
  var wrap = field.closest(".field");
  var ok = field.checkValidity() && field.value.trim() !== "";
  if (!field.required) ok = field.checkValidity();
  if (wrap) wrap.classList.toggle("has-error", !ok);
  return ok;
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) return;
  var okNote = document.getElementById("contactOk");
  var errNote = document.getElementById("contactErr");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll("input, select, textarea").forEach(function (f) {
      if (!hesterValidateField(f)) valid = false;
    });
    if (!valid) return;

    var data = Object.fromEntries(new FormData(form).entries());
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;

    ohubSubmit("ContactMessage", data)
      .then(function () {
        okNote.classList.add("is-on");
        errNote.classList.remove("is-on");
        form.reset();
      })
      .catch(function () {
        errNote.classList.add("is-on");
      })
      .finally(function () { btn.disabled = false; });
  });

  form.querySelectorAll("input, textarea").forEach(function (f) {
    f.addEventListener("input", function () { f.closest(".field").classList.remove("has-error"); });
  });
});
