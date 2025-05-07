document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
  
    for (let i = 1; i <= 11; i++) {
      const img = document.createElement("img");
      img.src = `images/more-photos/${i}.jpg`;  // Make sure the folder name matches exactly
      img.alt = `Photo ${i}`;
      img.classList.add("gallery-image");
      galleryContainer.appendChild(img);
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });
  
    const images = document.querySelectorAll(".gallery-image");
    images.forEach(img => observer.observe(img));
  });
  