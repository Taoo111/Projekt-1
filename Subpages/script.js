$(".click-action-overview").click(function () {
  $(".section-overview").show();
  $(".section-travel").hide();
});

$(".click-action-travel").click(function () {
  $(".section-overview").hide();
  $(".section-travel").show();
});

