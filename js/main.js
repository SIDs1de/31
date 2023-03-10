"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var e, t, a;
  document.querySelector("#vk_groups") &&
    VK.Widgets.Group(
      "vk_groups",
      { mode: 3, width: "auto", color2: "521A9F", color3: "8B03ED" },
      201538565
    ),
    (function () {
      if (document.querySelector(".main__label-select")) {
        var e = document.querySelector(".main__label-select-wrapper"),
          t = e.parentNode.querySelector(".main__label-text");
        e.closest(".main__label").addEventListener("click", function () {
          e.classList.contains("_open")
            ? (e.classList.remove("_open"),
              t.classList.remove("main__label-text--active"))
            : (e.classList.add("_open"),
              t.classList.add("main__label-text--active"));
        }),
          document.addEventListener("click", function (a) {
            a.composedPath().includes(e.closest(".main__label")) ||
              (e.classList.remove("_open"),
                t.classList.remove("main__label-text--active"));
          });
      }
    })(),
    (e = document.querySelector(".main__label-input")) &&
    (e.addEventListener("focus", function () {
      e.parentNode
        .querySelector(".main__label-text")
        .classList.add("main__label-text--active");
    }),
      e.addEventListener("blur", function () {
        e.parentNode
          .querySelector(".main__label-text")
          .classList.remove("main__label-text--active");
      })),
    (t = document.querySelector("form")),
    document.querySelector(".main__label-input") &&
    t &&
    t.addEventListener("submit", function (e) {
      e.preventDefault();
      var a = document.querySelector(".main__label-input"),
        o = document.querySelector(".main__label-select"),
        r = !0;
      a.parentNode
        .querySelector(".main__label-error")
        .classList.remove("_active"),
        o.parentNode.parentNode
          .querySelector(".main__label-error")
          .classList.remove("_active"),
        "" === a.value.trim() &&
        ((r = !1),
          a.parentNode
            .querySelector(".main__label-error")
            .classList.add("_active")),
        "Выбрать товар" === o.value &&
        ((r = !1),
          o.parentNode.parentNode
            .querySelector(".main__label-error")
            .classList.add("_active")),
        r && t.submit();
        if (r) {
          window.location.href = "payments.html"
        }
    }),
    (function () {
      var e = document.querySelectorAll("[data-open-popup]"),
        t = document.querySelectorAll("[data-popup]"),
        a = document.querySelector("html");
      document.querySelector(".burger"),
        t &&
        (e.forEach(function (e) {
          e.addEventListener("click", function () {
            event.preventDefault(),
              t.forEach(function (t) {
                if (t.dataset.popup === e.dataset.openPopup) {
                  t.classList.add("active");
                  var o = t.querySelector(".popup__inner-close"),
                    r = t.querySelector(".popup__bg");
                  a.classList.add("lock"),
                    o.addEventListener("click", function () {
                      t.classList.remove("active"),
                        a.classList.remove("lock");
                    }),
                    r.addEventListener("click", function () {
                      t.classList.remove("active"),
                        a.classList.remove("lock");
                    });
                  var n = t.querySelector(".popup__body"),
                    c = t.querySelector(".popup__inner");
                  n.addEventListener("click", function (e) {
                    (e.target !== c && e.target !== n) ||
                      (t.classList.remove("active"),
                        a.classList.remove("lock"));
                  });
                }
              });
          });
        }),
          t.forEach(function (e) {
            var t = e.querySelector(".popup__body"),
              a = e.querySelector(".popup__inner");
            t.style.minHeight = a.offsetHeight + "px";
          }));
    })(),
    (a = document.querySelector(".g-recaptcha")) &&
    a.setAttribute("data-theme", "dark"),
    document.querySelectorAll(".wow").forEach(function (e) {
      e.classList.remove("wow");
    }),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: function (e) { },
      scrollContainer: null,
      resetAnimation: !0,
    }).init(),
    new NativejsSelect({ selector: ".main__label-select" });
});
//# sourceMappingURL=main.js.map
