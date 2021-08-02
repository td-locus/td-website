// !Navbar color on scroll
$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("navbar-scroll");
        } else {
            header.removeClass("navbar-scroll");
        }
    }); 
});
// !Navbar color on scroll



// !Navbar elements highlight on scroll
const sections = document.querySelectorAll("section");

const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px"
}

const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
        
        if(entry.target.id === "hero")
            if(entry.isIntersecting)
                document.getElementById("li-home").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-home").style = "border-bottom:none;font-weight: 400;"

        if(entry.target.id === "contact-us")
            if(entry.isIntersecting)
                document.getElementById("li-contact-us").style = "border-bottom: 3px solid #EA4335;font-weight: 700;"
            else
                document.getElementById("li-contact-us").style = "border-bottom:none;font-weight: 400;"
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});
// !Navbar elements highlight on scroll


//!Collapsed navbar color
var navButton = document.querySelector(".navbar-toggler");
var n=2;
navButton.addEventListener('click', ()=>{
    n+=1
    if(n%2!=0){
        document.querySelector(".navbar").classList.add("navbar-scroll")
    }
    else{
        document.querySelector(".navbar").classList.remove("navbar-scroll")
    }    
})
//!Collapsed navbar color

//FAQ reveal and hide
function displayFAQAnswers(id){
    let clickedQuestion = document.getElementById(id);
    if(clickedQuestion.childNodes[3].classList.contains('answer')){
      clickedQuestion.childNodes[3].classList.add("showanswer");
      clickedQuestion.childNodes[3].classList.remove("answer");
    }else{
      clickedQuestion.childNodes[3].classList.add("answer");
      clickedQuestion.childNodes[3].classList.remove("showanswer");
    }
  }