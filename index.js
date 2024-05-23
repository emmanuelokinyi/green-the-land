document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", revealMission);
});

function revealMission() {
    let mission = document.querySelector(".mission",);
    let missionPosition = mission.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3; 

    if (missionPosition < screenPosition) {
        mission.classList.add("active");
    } else {
        mission.classList.remove("active");
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".question");
        question.addEventListener("click", function() {
            item.classList.toggle("active");

            const answer = item.querySelector(".answer");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = "20px";
            } else {
                answer.style.maxHeight = "0";
                answer.style.padding = "0 20px";
            }
        });
    });
});


// gallery

let slideIndex = 0;
showSlides();


function changeSlide(n) {
    clearInterval(autoSlide); 
    slideIndex += n;
    showSlides();
    autoSlide = setInterval(function() {
        showSlides(slideIndex += 1);
    }, 0); 
}


let autoSlide = setInterval(function() {
    showSlides(slideIndex += 1);
}, 3000); 

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let numSlides = slides.length;

    
    if (slideIndex >= numSlides) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = numSlides - 1 }
    let transformValue = -slideIndex * (100 + 20); 
    for (let i = 0; i < numSlides; i++) {
        slides[i].style.transform = `translateX(${transformValue}%)`;
    }
}


// feedback slides
let feedbackSlideIndex = 1;
showFeedbackSlides(feedbackSlideIndex);


function changeFeedbackSlide(n) {
    showFeedbackSlides(feedbackSlideIndex += n);
}
function setFeedbackSlide(n) {
    showFeedbackSlides(feedbackSlideIndex = n);
}

function showFeedbackSlides(n) {
    let i;
    let slides = document.getElementsByClassName("feedback-slide");
    let dots = document.getElementsByClassName("feedback-dot");
    if (n > slides.length) {feedbackSlideIndex = 1}
    if (n < 1) {feedbackSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" feedback-active", "");
    }
    slides[feedbackSlideIndex-1].style.display = "block";
    dots[feedbackSlideIndex-1].className += " feedback-active";
}

// news updates
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.news-card');
            card.classList.toggle('expanded');

            document.querySelectorAll('.news-card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('expanded');
                }
            });
        });
    });
});

