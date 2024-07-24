let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide-foto-item");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 4000); // Ubah gambar setiap 4 detik
}

document.addEventListener('DOMContentLoaded', (event) => {
  showSlides(); // Mulai slideshow saat halaman dimuat
});
