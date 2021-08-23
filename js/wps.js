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
