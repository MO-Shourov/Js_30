function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const silderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  console.log(e);
  console.log(window.scrollY);
  silderImages.forEach((silderImages) => {
    const slideInAt =
      window.scrollY + window.innerHeight - silderImages.height / 2;
      const imageBottom = silderImages.offsetTop + silderImages.height;
      const isHalfShown = slideInAt > silderImages.offsetTop;
      const isNotScrolledPast = window.scrollY<imageBottom;
      if(isHalfShown && isNotScrolledPast) {
        silderImages.classList.add('active');
      }else {
        silderImages.classList.remove('active');
      }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
