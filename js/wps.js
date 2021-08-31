
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

//Modal Popup
function toggleModal(modalId,toggleState){
    let modal = document.getElementById(modalId)
    //Modal Close
    if(toggleState=='close'){
        modal.style.display="none"
    }else{
        modal.style.display = "block"
    }
}

function toggleDomains(domainId){
    let domainArr = ["web","app","cc"]
    console.log(domainId)
    domainArr.forEach((domainName)=>{
        console.log(`domainName`, domainName)
        console.log(`check: ${domainName==domainId}`)
        let domain = document.getElementById(domainName)
        if(domainName==domainId)
            domain.style.display = "block";
        else
            domain.style.display = "none"
    })
}