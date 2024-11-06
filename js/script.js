var titleClick = false;
var backgroundImages = [
  "url('./img/Title.png')",
  "url('./img/Title1.png')",
  "url('./img/Title2.png')",
  "url('./img/Title3.png')",
  "url('./img/Title4.png')",
];
var currentIndex = 0;

function changeBackground() {
  if (!titleClick) {
    $(".Title").css("background-image", backgroundImages[currentIndex]);
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    setTimeout(changeBackground, 100);
  }
}

function startTypingEffect(selector, callback) {
  const element = $(selector);
  const text = element.data("text");
  let index = 0;
  const speed = 50;

  function typeWriter() {
    if (index < text.length) {
      element.text(element.text() + text.charAt(index));
      index++;
      setTimeout(typeWriter, speed);
    } else if (callback) {
      callback();
    }
  }

  typeWriter();
}

$(document).ready(function () {
  changeBackground();

  $(".Title").click(function () {
    if (!titleClick) {
      titleClick = true;
      $(".Title").css("background-image", backgroundImages[0]);

      $(this).css("animation", "moveUp 0.5s forwards");
      $(".Clickthetitle").css("animation", "moveDown 0.5s forwards");

      setTimeout(function () {
        $(".directer").css("opacity", 1).show();
        $(".description-container").css("opacity", 1).show();

        startTypingEffect(".directer", function () {
          startTypingEffect(".description");
        });

        $(".polaroid1")
          .css("opacity", 1)
          .show()
          .css("animation", "moveUpPolaroid1 2s forwards");
        $(".polaroid2")
          .css("opacity", 1)
          .show()
          .css("animation", "moveUpPolaroid2 2s forwards");

        setTimeout(function () {
          $(".polaroid1Pic")
            .css("opacity", 1)
            .css("animation", "fadeIn 5s forwards")
            .show();
          $(".polaroid2Pic")
            .css("opacity", 1)
            .css("animation", "fadeIn 5s forwards")
            .show();

          setTimeout(function () {
            $(".film1")
              .css("opacity", 1)
              .css("animation", "slideInFilm1 3s forwards")
              .show();
            setTimeout(function () {
              $(".film2")
                .css("opacity", 1)
                .css("animation", "slideInFilm2 3s forwards")
                .show();
              setTimeout(function () {
                $(".button-container").css("opacity", 1).show();
              }, 3000);
            }, 1000);
          }, 5000);
        }, 2500);
      }, 500);
    }
  });

  var clickCount = 0;
  $(".button-container").click(function () {
    if (clickCount < 2) {
      clickCount++;

      if (clickCount === 1) {
        $(".button").text("Erasing memories of Clementine");
        $(".FilmP12").css({ display: "block", opacity: 0 });
        $(".FilmP22").css({ display: "block", opacity: 0 });

        setTimeout(function () {
          $(".FilmP12").css("opacity", 1); // FilmP12의 opacity를 1로 설정
          $(".FilmP22").css("opacity", 1); // FilmP22의 opacity를 1로 설정

          setTimeout(function () {
            $(".button").text("Click to erase all memories");
          }, 4000); // 4초 대기 후 텍스트 변경
        }, 10); // 작은 지연 후 opacity 변경
      } else if (clickCount === 2) {
        // 두 번째 클릭 시
        $(".button").text("Erasing all memories");
        $(".Efilm1").css({ display: "block", opacity: 0 }); // Efilm1 초기 설정
        $(".Efilm2").css({ display: "block", opacity: 0 }); // Efilm2 초기 설정

        setTimeout(function () {
          $(".Efilm1").css("opacity", 1); // Efilm1의 opacity를 1로 설정
          $(".Efilm2").css("opacity", 1); // Efilm2의 opacity를 1로 설정

          setTimeout(function () {
            $(".button").text("All memories have been erased");
          }, 4000); // 4초 대기 후 텍스트 변경
        }, 10); // 작은 지연 후 opacity 변경
      }
    }
  });
});
