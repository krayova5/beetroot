$(document).ready(function () {
  $(".js-news__slider").slick({
    autoplay: false,
    dots: true,
    infinite: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  });
  $(".js-prev").click(function () {
    $(".js-news__slider").slick("slickPrev");
  });
  $(".js-next").click(function () {
    $(".js-news__slider").slick("slickNext");
  });

  //show modal on .news click event

  $(".news__card").on("click", function () {
    const src = $(this).find(".news__img").attr("src");
    const title = $(this).find(".news__title").text();
    const txt = $(this).find(".news__text").text();
    const author = $(this).find(".author").clone();
    $(".show-news__img").attr("src", src);
    $(".show-news__title").html(title);
    $(".show-news__text").html(txt);
    $(".show-news__author").html(author);
    $(".show-news").css("display", "flex");
  });
  $(".show-news__close").click(function () {
    $(".show-news").css("display", "none");
  });

  //show modal on block-first and block-second click event

  $(".block-first__btn")
    .find("p")
    .click(function () {
      const src = $(".block-first").find("img:first-child").attr("src");
      const subtitle = $(".block-first__subtitle").find("h4").text();
      const title = $(".block-first__title").find("h3").text();
      const text = $(".block-first__text").find("p").text();
      $(".show-modal__img").attr("src", src);
      $(".show-modal__subtitle").html(subtitle);
      $(".show-modal__title").html(title);
      $(".show-modal__text").html(text);
      $(".show-modal").css("display", "flex");
    });
  $(".show-modal__close").click(function () {
    $(".show-modal").css("display", "none");
  });

  $(".block-second__btn")
    .find("p")
    .click(function () {
      const src = $(".block-second").find("img:first-child").attr("src");
      const subtitle = $(".block-second__subtitle").find("h4").text();
      const title = $(".block-second__title").find("h3").text();
      const text = $(".block-second__text").find("p").text();

      $(".show-modal__img").attr("src", src);
      $(".show-modal__subtitle").html(subtitle);
      $(".show-modal__title").html(title);
      $(".show-modal__text").html(text);
      $(".show-modal").css("display", "flex");
    });

  $(".section-gallery__main").click(function () {
    const src = $(this).find("img").attr("src");
    $(".section-gallery__holder").find("img").attr("src", src);
    $(".section-gallery__holder").css("display", "block");
  });
  $(".section-gallery__holder p").click(function () {
    $(".section-gallery__holder").css("display", "none");
  });
});

$(".section-gallery__card").click(function () {
  const src = $(this).find("img").attr("src");
  $(".section-gallery__holder").find("img").attr("src", src);
  $(".section-gallery__holder").css("display", "block");
});
$(".section-gallery__holder p").click(function () {
  $(".section-gallery__holder").css("display", "none");
});
