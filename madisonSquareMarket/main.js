//show the dropdown items
$("#cart").on("click", () => {
  $("#cartMenu").show();
});
//now, all the dropdown items are shown, hide when you mouseleave each menu item
$(".dropdown").on("mouseleave", () => {
  $("#cartMenu").hide();
});
$("#account").on("click", () => {
  $("#accountMenu").show();
});
$(".dropdown").on("mouseleave", () => {
  $("#accountMenu").hide();
});
$("#help").on("click", () => {
  $("#helpMenu").show();
});
$(".dropdown").on("mouseleave", () => {
  $("#helpMenu").hide();
});