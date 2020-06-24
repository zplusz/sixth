"use strict";

$(document).ready(function () {
  $('#cart').click(function () {
    localStorage.setItem("id", "#exampleModal");
    localStorage.setItem("show", "show");
  });
  $(localStorage.getItem("id")).modal(localStorage.getItem("show"));
  console.log(localStorage.getItem("id"));
  localStorage.clear();
});
//# sourceMappingURL=all.js.map
