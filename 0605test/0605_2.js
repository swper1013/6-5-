$(document).ready(function () {
  $(".go").click(function () {
    var temp = $(".in").val();
    $("tr").css("background", "");
    if (temp === "아동") {
      $("tr:eq(1)").css("background", "red");
    } else if (temp === "청소년") {
      $("tr:eq(2)").css("background", "red");
    } else if (temp === "성인") {
      $("tr:eq(3)").css("background", "red");
    } else {
      alert("다시 시도해주세요");
    }
  });
});
