document.addEventListener("DOMContentLoaded", function(){
  const slides = document.querySelectorAll('.slide')
  let currentSlide = 0
  let currentColor = 0

  // Show the initial slide
  slides[0].classList.toggle('show')
  const backgroundColors = [
    "#ccc",
    "#fff",
    "#fad529"
  ]
  function nextSlide() {
    document.body.style.backgroundColor = backgroundColors[currentColor]
    currentColor = (currentColor + 1) % backgroundColors.length
    // Toggle the Current Slide
    slides[currentSlide].classList.remove('show')
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].classList.add('show')
  }

  setInterval(nextSlide, 7000)
})
