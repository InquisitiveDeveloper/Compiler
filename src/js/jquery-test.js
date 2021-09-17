function bsCardsImgCover(){
    $(".bs-cards-group-container img").each(function () {
  var t = $(this),
  s = "url(" + t.attr("src") + ")",
  p = t.parent(),
  d = $("<div></div>");
  t.hide();
  p.append(d);
  d.css({
    height: 250, // Note: You can change it for your needs
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-image": s,
  });
});
}
bsCardsImgCover()