const photoContainer = document.getElementById("photoContainer");
const toggleSwitch = document.getElementById("toggleSwitch");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function fetchPhotos() {
  photoContainer.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    fetch("https://picsum.photos/375/375")
      .then((response) => {
        if (response.ok) {
          return response.url;
        } else {
          throw new Error("Failed to fetch photo");
        }
      })
      .then((photoUrl) => {
        // Create an image element
        const img = document.createElement("img");
        img.src = photoUrl;
        img.alt = "Random Photo";

        // Append the image to the container
        photoContainer.appendChild(img);
      })
      .catch((error) => console.error(error));
  }
}

function applyGrayscale() {
  const images = photoContainer.querySelectorAll("img");
  images.forEach((img) => {
    if (toggleSwitch.checked) {
      img.classList.add("grayscale");
    } else {
      img.classList.remove("grayscale");
    }
  });
}

fetchPhotos();

toggleSwitch.addEventListener("change", function () {
  applyGrayscale();
});

loadMoreBtn.addEventListener("click", fetchPhotos);
