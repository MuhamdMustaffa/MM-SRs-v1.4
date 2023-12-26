function search() {
  let searchInput = document.querySelector(".search_input").value.toUpperCase();
  let srData = document.querySelectorAll(".dropdown-item");
  let srSearchName = document.getElementsByTagName("b");

  for (let i = 0; i < srSearchName.length; i++) {
    if (srSearchName[i].innerHTML.toUpperCase().indexOf(searchInput) >= 0) {
      srData[i].style.display = "";
    } else {
      srData[i].style.display = "none";
    }
  }
}

let subBtn = document.querySelector(".searchBtn");

subBtn.addEventListener("click", search);

document
  .querySelector(".search_input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      search();
    }
  });
  
  // top button click

const topButton = document.getElementById("top-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// dark mode switch

const darkModeToggle = document.querySelector("#theme-toggle-button");

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});


window.onload = function () {
  document.querySelector(".search_input").value = "";
  search();
};




// Uploading image to be background
const imageInput = document.getElementById('imageInput');
const changeBackgroundButton = document.getElementById('changeBackgroundButton');

changeBackgroundButton.addEventListener('click', () => {
  imageInput.click();
});

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const backgroundImage = `url(${event.target.result})`;
    document.body.style.backgroundImage = backgroundImage;
  };

  reader.readAsDataURL(file);
});