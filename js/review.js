/* HESTER ASPHALT — REVIEW FUNNEL
   4-5 stars  -> redirect immediately to the Google review prompt
                 (no extra confirmation step).
   1-3 stars  -> private CustomerFeedback workflow (OHub) so the
                 owner can resolve the issue before it goes public.
   Every rating selection is tracked as a ReviewFunnelEvent. */

var GOOGLE_REVIEW_URL =
  "https://www.google.com/search?sca_esv=7a6fa840886e82e7&rlz=1C1CHBF_enUS1028US1028&sxsrf=ANbL-n5IiiPC26M0qdD6Fu6Y60dbzm53Gg:1781285064242&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x3hfVLWqcxwmilWcuusxU2cCOkIVJl6D-wtCptvtWEfOfcRigt-GUx2TR2JIX6xY_CGxXU5KngB_thKJ17LiTu_nwjGKmzcqZK20vv1kqoIWMFGdhA%3D%3D&q=Hester+Asphalt+Sealcoating+Reviews&sa=X&ved=2ahUKEwiEtf37m4KVAxVCjIkEHeeNLaQQ0bkNegQIQBAH&biw=1096&bih=898&dpr=1#lrd=0x88472d6f4711c139:0xf09a6f9508305821,3,,,,";

document.addEventListener("DOMContentLoaded", function () {
  var starRow = document.getElementById("starRow");
  if (!starRow) return;

  var ratePane = document.getElementById("ratePane");
  var positivePane = document.getElementById("positivePane");
  var feedbackPane = document.getElementById("feedbackPane");
  var thanksPane = document.getElementById("thanksPane");
  var googleBtn = document.getElementById("googleReviewBtn");
  var hint = document.getElementById("starHint");
  var stars = starRow.querySelectorAll(".star-btn");
  var chosenRating = 0;

  googleBtn.href = GOOGLE_REVIEW_URL;

  var hints = {
    1: "Rough experience — tell us what happened",
    2: "Below expectations — we want to fix it",
    3: "Just okay — help us do better",
    4: "Good — thank you!",
    5: "Excellent — you made our day"
  };

  function light(n) {
    stars.forEach(function (s) {
      s.classList.toggle("is-lit", parseInt(s.getAttribute("data-rate"), 10) <= n);
    });
  }

  stars.forEach(function (star) {
    var val = parseInt(star.getAttribute("data-rate"), 10);
    star.addEventListener("mouseenter", function () { light(val); hint.textContent = hints[val]; });
    star.addEventListener("mouseleave", function () { light(chosenRating); });
    star.addEventListener("click", function () {
      chosenRating = val;
      light(val);
      ohubSubmit("ReviewFunnelEvent", { rating: val, routed: val >= 4 ? "google" : "internal" });
      if (val >= 4) {
        setTimeout(function () {
          window.location.href = GOOGLE_REVIEW_URL;
        }, 350);
        return;
      }
      setTimeout(function () {
        ratePane.classList.remove("is-on");
        feedbackPane.classList.add("is-on");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 450);
    });
  });

  googleBtn.addEventListener("click", function () {
    ohubSubmit("ReviewFunnelEvent", { rating: chosenRating, action: "clickedGoogleReview" });
  });

  /* ---- low-rating feedback form -> CustomerFeedback workflow ---- */
  var form = document.getElementById("feedbackForm");
  var errNote = document.getElementById("feedbackErr");

  function readPhoto(input) {
    return new Promise(function (resolve) {
      var file = input.files && input.files[0];
      if (!file || file.size > 2.5 * 1024 * 1024) {
        resolve(file ? { photoName: file.name, photoNote: "Too large to attach — request from customer" } : {});
        return;
      }
      var reader = new FileReader();
      reader.onload = function () { resolve({ photoName: file.name, photoData: reader.result }); };
      reader.onerror = function () { resolve({ photoName: file.name }); };
      reader.readAsDataURL(file);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    form.querySelectorAll("input[required], textarea[required]").forEach(function (f) {
      var good = f.checkValidity() && f.value.trim() !== "";
      f.closest(".field").classList.toggle("has-error", !good);
      if (!good) ok = false;
    });
    if (!ok) return;

    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;

    readPhoto(document.getElementById("fPhoto")).then(function (photo) {
      var data = Object.fromEntries(new FormData(form).entries());
      delete data.photo;
      var payload = Object.assign({}, data, photo, {
        rating: chosenRating,
        status: "New",
        assignedTo: "Owner",
        resolutionNotes: "",
        followUpDate: ""
      });
      return ohubSubmit("CustomerFeedback", payload);
    }).then(function () {
      feedbackPane.classList.remove("is-on");
      thanksPane.classList.add("is-on");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }).catch(function () {
      errNote.classList.add("is-on");
    }).finally(function () { btn.disabled = false; });
  });

  form.querySelectorAll("input, textarea").forEach(function (f) {
    f.addEventListener("input", function () { f.closest(".field").classList.remove("has-error"); });
  });
});
