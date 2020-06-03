// use the keyup event handler to update the preview text, so we don’t need a submit button.
$("#text").on("keyup", (event) => {
  $(".preview").html($(event.currentTarget).val());
});
// The change event handler will fire anytime the selected value of the '#font' menu changes.
$("#font").on("change", (event) => {
  $(".preview").css({
    fontFamily: $(event.currentTarget).val()
  });
});

$("#weight").on("change", (event) => {
  $(".preview").css({
    fontWeight: $(event.currentTarget).val()
  });
});

$("#size").on("keyup", (event) => {
  let fontSize = $(event.currentTarget).val() + "px"
  $(".preview").css({
    fontSize: fontSize
  });
});