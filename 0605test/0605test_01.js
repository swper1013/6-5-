$(document).ready(function () {
  $(".nav > ul > li").on("mouseover", function () {
    $(".nav > ul > li > ul>li ").fadeIn({ display: "block" });
  });
  $(".nav > ul  ").on("mouseleave", function () {
    $(".nav > ul > li > ul>li ").fadeOut({ display: "none" });
  });
});
