const container = document.querySelector(".button-containers");
const backgrounds = [
  {
    background: "places/cebu.jpg",
    name: "Cebu City",
  },
  {
    background: "places/palawan.jpg",
    name: "Palawan",
  },
  {
    background: "places/baguio.jpg",
    name: "Baguio City",
  },
  {
    background: "places/vigan.jpg",
    name: "Vigan",
  },
];

let bgHtml = "";
backgrounds.forEach((bg) => {
  bgHtml += `
  <div class="box" >
  <button class="btn-images" data-image="${bg.background}">
  <img class="image" src="${bg.background}" alt="">
  <h3 class="name">${bg.name}</h3>
  </button>
  </div>
  `;
});

container.innerHTML = bgHtml;

let prevClickedBox = null;
let matchingItem = "";

const btnImages = document.querySelectorAll(".btn-images");
const displayContainer = document.querySelector(".container");

function handleBoxClick(event) {
  const clickedBox = event.target;

  if (prevClickedBox) {
    prevClickedBox.classList.remove("translate");
  }
  clickedBox.classList.add("translate");
  prevClickedBox = clickedBox;
}

btnImages.forEach((btn) => {
  btn.addEventListener("click", () => {
    const bgImages = btn.dataset.image;

    backgrounds.forEach((bg) => {
      if (bgImages === bg.background) {
        matchingItem = bg;
        displayContainer.style.backgroundImage = `url('${matchingItem.background}')`;
      }
    });

    btn.addEventListener("click", handleBoxClick);
  });
});
