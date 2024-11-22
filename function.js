// JavaScript for Click-based Dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

// Automatic Slideshow with Manual Control
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000; // Change slide every 5 seconds

function showSlide(index) {
    // Wrap around the slide index
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides and show only the active one
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Initial display of the first slide
showSlide(currentSlideIndex);

// Set up the automatic slideshow
setInterval(function() {
    changeSlide(1); // Move to the next slide
}, slideInterval);



let currentMovieIndex = 0;
const movieSlides = document.querySelectorAll('.movie-card');
const totalMovies = movieSlides.length;
const moviesToShow = 6; // Number of movies to show at a time

// Function to show the current set of movie cards
function showMovies() {
    movieSlides.forEach((slide, index) => {
        slide.style.display = (index >= currentMovieIndex && index < currentMovieIndex + moviesToShow) ? 'block' : 'none';
    });
}

// Function to move slides
function moveSlide(direction) {
    currentMovieIndex += direction;
    if (currentMovieIndex < 0) {
        currentMovieIndex = 0;
    } else if (currentMovieIndex + moviesToShow > totalMovies) {
        currentMovieIndex = totalMovies - moviesToShow;
    }
    showMovies();
}

// Auto slide every 5 seconds
setInterval(() => {
    currentMovieIndex = (currentMovieIndex + 1) % (totalMovies - moviesToShow + 1);
    showMovies();
}, 3000);

const promotionsData = {
    all: [
        {  img: "img/all1.jpg" },
        {  img: "img/all2.jpg" },
        {  img: "img/all3.jpg" },
        { img: "img/all4.jpg" },
        {  img: "img/all5.jpg" },
        {  img: "img/all6.jpg" },
        {  img: "img/all7.jpg" },
        {  img: "img/all8.jpg" }
    ],
    "movie-perks": [
        { img: "img/mp1.jpg" },
        { img: "img/mp2.jpg" },
        { img: "img/mp3.jpg" },
        { img: "img/mp4.jpg" },
        { img: "img/mp5.jpg" },
        {  img: "img/mp6.jpg" },
        {  img: "img/mp7.jpg" },
        {  img: "img/mp8.jpg" },
        { img: "img/mp9.jpg" },
    ],
    fb: [
        { img: "img/food2.jpg" },
        { img: "img/food3.jpg" },
        { img: "img/food6.jpg" },
        {  img: "img/mp6.jpg" },
    ],
    event: [
        {  img: "img/mp8.jpg" },
        { img: "img/mp9.jpg" },
        { img: "img/hall1.jpg" },
        { img: "img/all6.jpg" },
    ],
    merchandise: [
        {  img: "img/food4.jpg" },
        { img: "img/food5.jpg" },
        { img: "img/food1.jpg" },
        
    ],
    "hall-booking": [
        { title: "Private Screening", img: "img/hall1.jpg" }
    ]
};

function loadPromotions(category) {
    const promotionGrid = document.getElementById('promotion-content');
    promotionGrid.innerHTML = ''; // Clear existing content

    promotionsData[category].forEach((promo) => {
        const promoItem = document.createElement('div');
        promoItem.classList.add('promotion-item');

        promoItem.innerHTML = `
            <img src="${promo.img}" alt="${promo.title}" title="${promo.title}">
        `;

        promotionGrid.appendChild(promoItem);
    });

    // Update active class on the selected menu item
    document.querySelectorAll('.promo-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.promo-item[onclick="loadPromotions('${category}')"]`).classList.add('active');
}

// Function to open the support page
function openFeedbackPage() {
    // Redirect to the support page or show a contact modal
    window.location.href = "feedback.html"; // Replace with the actual support page URL
}


// Show the trailer modal
function showTrailer(videoPath) {
    const modal = document.getElementById("trailerModal");
    const videoSource = document.getElementById("videoSource");
    const video = document.getElementById("localTrailer");

    videoSource.src = videoPath; // Set the video source dynamically
    video.load(); // Reload the video
    modal.style.display = "flex"; // Show the modal
    video.play(); // Auto-play the video
}

// Close the trailer modal
function closeTrailer() {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("localTrailer");

    modal.style.display = "none"; // Hide the modal
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video
}

document.querySelector('.nav1.left1').addEventListener('click', () => {
    document.querySelector('.carousel-inner1').scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  document.querySelector('.nav1.right1').addEventListener('click', () => {
    document.querySelector('.carousel-inner1').scrollBy({ left: 300, behavior: 'smooth' });
  });
