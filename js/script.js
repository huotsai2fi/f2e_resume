$(function () {
  // Typed Initiate
  if ($(".header h2").length == 1) {
    var typed_strings = $(".header .typed-text").text();
    var typed = new Typed(".header h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Skills
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );
});
