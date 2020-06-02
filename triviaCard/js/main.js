//When the hint box is clicked on, we want the HTML element containing the hint to slide into view.
$(".hint-box").on("click", () => {
  $(".hint").slideToggle(300);
});
//animating the wrong answers- When the user clicks on a wrong answer, we want the text of the wrong answer to fade out.
//When someone guesses the wrong answer, we also want a frowny face to appear at the bottom of the screen.
$(".wrong-answer-one").on("click", () => {
  $(".wrong-text-one").fadeOut("slow");
  $(".frown").show();
});
$(".wrong-answer-two").on("click", () => {
  $(".wrong-text-two").fadeOut("fast");
  $(".frown").show();
});
$(".wrong-answer-three").on("click", () => {
  $(".wrong-text-three").fadeOut();
  $(".frown").show();
});
// a user gets the answer correct, we want to hide the frowny face image and show the smiley face image.
//when the user clicks on the correct answer, the wrong answers should fade away. 
$(".correct-answer").on("click", () => {
  $(".frown").hide();
  $(".smiley").show();
  $(".wrong-answer-one").fadeOut("slow");
  $(".wrong-answer-two").fadeOut("fast");
  $(".wrong-answer-three").fadeOut("fast");
});
//button to reset the quiz and make the wrong answers reappear
$(".reset").on("click", () => {
  $(".wrong-answer-one").toggle();
  $(".wrong-answer-two").toggle();
  $(".wrong-answer-three").toggle();
});