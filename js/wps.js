//FAQ reveal and hide
function displayFAQAnswers(id) {
  let clickedQuestion = document.getElementById(id);
  if (clickedQuestion.childNodes[3].classList.contains("answer")) {
    clickedQuestion.childNodes[3].classList.add("showanswer");
    clickedQuestion.childNodes[3].classList.remove("answer");
  } else {
    clickedQuestion.childNodes[3].classList.add("answer");
    clickedQuestion.childNodes[3].classList.remove("showanswer");
  }
}

//Modal Popup
function toggleModal(modalId, toggleState) {
  let modal = document.getElementById(modalId);
  //Modal Close
  if (toggleState == "close") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

//!Collapsed navbar color
var navButton = document.querySelector(".navbar-toggler");
var n = 2;
navButton.addEventListener("click", () => {
  n += 1;
  if (n % 2 != 0) {
    document.querySelector(".navbar").classList.add("navbar-scroll");
  } else {
    document.querySelector(".navbar").classList.remove("navbar-scroll");
  }
});

// !Navbar color on scroll

$(function () {
  var header = $(".navbar");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("navbar-scroll");
    } else {
      header.removeClass("navbar-scroll");
    }
  });
});

// disabled tooltips

// const buttonslist = document.querySelectorAll(".domain-disabled");
// const tooltip = document.querySelector("#tooltip");

// buttonslist.forEach((button) => {
//   Popper.createPopper(button, tooltip, {
//     placement: "top",
//   });
// });
