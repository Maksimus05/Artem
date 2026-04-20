
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = track ? track.querySelectorAll(".hero-photo") : [];
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!track || !slides.length || !nextBtn || !prevBtn) {
    return;
  }

  let currentIndex = 0;

  const render = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    render();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    render();
  };

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      showNext();
    }

    if (event.key === "ArrowLeft") {
      showPrev();
    }
  });

  render();
});
