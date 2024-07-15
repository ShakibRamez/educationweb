window.addEventListener("load", function () {
  /*------------------
				Gallery item
			--------------------*/
  var courseItemsArea = document.querySelector(".course-items-area");
  if (courseItemsArea) {
    var mixer = mixitup(courseItemsArea);
  }
});

(function () {
  /*------------------
		  Navigation
	  --------------------*/
  document
    .querySelector(".nav-switch")
    .addEventListener("click", function (event) {
      document.querySelector(".main-menu").style.display = "block";
      event.preventDefault();
    });

  /*------------------
		  Background Set
	  --------------------*/
  document.querySelectorAll(".set-bg").forEach(function (element) {
    var bg = element.getAttribute("data-setbg");
    element.style.backgroundImage = "url(" + bg + ")";
  });

  /*------------------
		  Realated courses
	  --------------------*/
  var rcSlider = new OwlCarousel({
    root: document.querySelector(".rc-slider"),
    options: {
      autoplay: true,
      loop: true,
      nav: true,
      dots: false,
      margin: 30,
      navText: ["", '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        990: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    },
  });

  /*------------------
		  Accordions
	  --------------------*/
  document.querySelectorAll(".panel-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      document.querySelectorAll(".panel-link").forEach(function (el) {
        el.classList.remove("active");
      });
      if (!element.classList.contains("active")) {
        element.classList.add("active");
      }
      e.preventDefault();
    });
  });

  /*------------------
		  Circle progress
	  --------------------*/
  document.querySelectorAll(".circle-progress").forEach(function (element) {
    var cpvalue = element.dataset.cpvalue;
    var cpcolor = element.dataset.cpcolor;
    var cptitle = element.dataset.cptitle;
    var cpid = element.dataset.cpid;

    element.innerHTML +=
      '<div class="' +
      cpid +
      '"></div><div class="progress-info"><h2>' +
      cpvalue +
      "%</h2><p>" +
      cptitle +
      "</p></div>";

    if (cpvalue < 100) {
      new CircleProgress({
        element: document.querySelector("." + cpid),
        radius: 88,
        thickness: 9,
        reverse: true,
        fill: {
          color: cpcolor,
        },
        emptyFill: "rgba(0, 0, 0, 0)",
        value: cpvalue / 100,
      });
    } else {
      new CircleProgress({
        element: document.querySelector("." + cpid),
        radius: 88,
        thickness: 9,
        reverse: true,
        fill: {
          color: cpcolor,
        },
        emptyFill: "rgba(0, 0, 0, 0)",
        value: 1,
      });
    }
  });
})();
