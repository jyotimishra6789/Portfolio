const slideInElement = document.querySelector('.slide-in');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 }); // Adjust the threshold as needed

    observer.observe(slideInElement);

    document.addEventListener("DOMContentLoaded", function() {
        var cvContainer = document.getElementById("cvContainer");
        var cvImage = document.getElementById("cv");
  
        window.addEventListener("scroll", function() {
          // Calculate the percentage scrolled
          var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;
  
          // Apply different skewing based on the scroll percentage
          var skewValue = -20 + (scrollPercentage * 0.2); // Adjust the factor as needed
          cvImage.style.transform = "skewX(" + skewValue + "deg)";
        });
      });