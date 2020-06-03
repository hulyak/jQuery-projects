// .on() method binds the event listener to a jQuery object. /callback function
$(".menu").on("mouseenter", () => {
  $('.nav-menu').show();
});
$(".nav-menu").on("mouseleave", () => {
  $('.nav-menu').hide();
});
$(".btn").on("mouseenter", (event) => {
  $(event.currentTarget).addClass("btn-hover");
}).on("mouseleave", (event) => {
  $(event.currentTarget).removeClass("btn-hover");
});
// limit a User's Post to 140 Characters
$(".postText").on("keyup", (event) => {
  let post = $(event.currentTarget).val();
  let remaining = 140 - post.length;
  if (remaining <= 0) {
    $(".wordcount").addClass("red");
  } else {
    $(".wordcount").removeClass("red");
  }
  // change 140 characters with the each keyup event
  $('.characters').html(remaining);
});
// This will cause the <textarea> to expect typed text as soon as the page loads.
$('.postText').focus();