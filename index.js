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


// feedback
let feedbackSlideIndex = 0;
showFeedbackSlides();

function showFeedbackSlides() {
    let i;
    let slides = document.getElementsByClassName("feedback-slide");
    let dots = document.getElementsByClassName("feedback-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    feedbackSlideIndex++;
    if (feedbackSlideIndex > slides.length) {feedbackSlideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" feedback-active", "");
    }
    slides[feedbackSlideIndex-1].style.display = "block";  
    dots[feedbackSlideIndex-1].className += " feedback-active";
    setTimeout(showFeedbackSlides, 7000); 
}

function changeFeedbackSlide(n) {
    feedbackSlideIndex += n - 1; 
    showFeedbackSlides();
}

function setFeedbackSlide(n) {
    feedbackSlideIndex = n - 1; 
    showFeedbackSlides();
}


// join us
document.getElementById('join-us-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('from_name').value;
    const email = document.getElementById('Your_Email').value;
    const phone = document.getElementById('Your_Phone_Number').value;
    const message = document.getElementById('Message').value;

    const templateParams = {
        from_name: name,
        Your_Email: email,
        Your_Phone_Number: phone,
        Message:message

    };

    emailjs.send('service_f86iq6p', 'template_h2g407n', templateParams)
        .then(function(response) {
            alert('Success! Your information has been sent.');
            document.getElementById('join-us-form').reset();
        }, function(error) {
            alert('Failed to send your information. Please try again.');
        });
});




