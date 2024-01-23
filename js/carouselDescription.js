window.onload = function () {
  // Function to update description based on the active carousel item
  function updateDescription(carousel) {
    var activeItem = carousel.querySelector(".carousel-item.active");
    var description = activeItem.querySelector("img").getAttribute("alt");
    document.getElementById("current-description").textContent = description;
  }

  // Get all carousel elements
  var carousels = document.querySelectorAll(".carousel");

  // Add event listener for each carousel
  carousels.forEach(function (carousel) {
    // Add event listener for sliding
    carousel.addEventListener("slid.bs.carousel", function () {
      // Update description when sliding is complete
      updateDescription(carousel);
    });
  });

  // Set initial description based on the first carousel
  updateDescription(carousels[0]);

  // Add event listener for tab clicks
  var tabLinks = document.querySelectorAll(".nav-link");
  tabLinks.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // Update description when a tab is clicked
      var activeCarouselId = this.getAttribute("href").substring(1); // Remove the '#'
      var activeCarousel = document.getElementById(activeCarouselId);
      updateDescription(activeCarousel);
    });
  });
};
