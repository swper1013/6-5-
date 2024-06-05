$(document).ready(function () {
  $(".nav > ul > li").on("mouseover", function () {
    $(".nav > ul > li > ul > li > a").css({ display: "block" });
  });

  $(".nav > ul > li").on("mouseout", function () {
    $(".nav > ul > li > ul > li > a").css({ display: "none" });
  });
  $(".open").on("click", function () {
    $("#gong > ul > li > a").css({ display: "block" });
  });
  $(".op2").on("click", function () {
    $(".op2").css({ color: "black", "text-shadow": "none" });
    $("#contents").fadeIn({ display: "block" });
  });
  $(".input").on("mouseover", function () {
    $(this).find(".onput").css({ display: "block" });
  });
  $(".input").on("mouseout", function () {
    $(this).find(".onput").css({ display: "none" });
  });
});
