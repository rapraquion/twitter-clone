$(document).ready(function() {
  //initial state
  $(".actions").hide();
  $("#composeInput").on("focus", function() {
    $(".input-button").hide();
    $(".actions").show();
    $(this).addClass("expanded");

    //start on focus
    $(this).on("input", function() {
      if ($(this).val().length > 0) {
        $(".post-tweet").attr("disabled", false);
      } else {
        $(".post-tweet").attr("disabled", true);
      }
      //message-count
      let msgCount = $("#composeInput").attr("maxlength");
      let count = msgCount - $(this).val().length;
      $(".message-count").text(count);
      if (msgCount <= 10) {
        $(".message-count").addClass("danger");
      } else {
        $(".message-count").removeClass("danger");
      }
    }); //on key press
  }); //on focus end

  //on click tweet post
  $(".post-tweet").on("click", function() {
    let post = `<div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="img/funwatercat.jpg" />
    </div>
    <div class="message">
      <div class="posted-by">
        <span class="display-name">Michael</span>
        <span class="handle">@sometwitterguy</span>
      </div>
      <div class="content">
        <p>${$("textarea[id*='composeInput']").val()}</p>
      </div>
      <div class="tweet-actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>`;
    $(".tweets").prepend(post);
    $(".actions").hide();
    $(".input-button").show();
    $("#composeInput")
      .removeClass("expanded")
      .val("");
    $(".message-count").text("280");
    $(".post-tweet").attr("disabled", true);
  });

  //start on blur
  $("#composeInput").on("blur", function() {
    if ($(this).val() === "") {
      $(".input-button").show();
      $(".actions").hide();
      $("#composeInput").removeClass("expanded");
    }
  }); //on blur end
}); //document end
