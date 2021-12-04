// slideshow auto
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.querySelectorAll('.js-mySlides');
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; //
    }
    slideIndex= slideIndex +1;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// slide main post
var slideIndexPost = 1;
showSlidesPost(slideIndexPost);

function plusSlides(n) {
    showSlidesPost(slideIndexPost += n);
}

function currentSlide(n) {
    showSlidesPost(slideIndexPost = n);
}

function showSlidesPost(n) {
    var j;
    var slidesPost = document.querySelectorAll('.js-mySlidesPost');
    if (n > slidesPost.length) {slideIndexPost = 1}    
    if (n < 1) {slideIndexPost = slidesPost.length}
    for (j = 0; j < slidesPost.length; j++) {
        slidesPost[j].style.display = "none";  
    }
    slidesPost[slideIndexPost-1].style.display = "block";
}

// nav bar mobile tablet
//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() {scrollFunction()};
// khai báo hàm scrollFunction
function scrollFunction() {
    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
        document.querySelector(".to-top").style.display = "block";
    } else {
        document.querySelector(".to-top").style.display = "none";
    }
}