import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const items = {
  gallery: document.querySelector(".gallery"),
};
const galleryMarkup = createImagesMarkup(galleryItems);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class = "gallery__item"> 
        <a class = "gallery__link" href = ${original}">
        <img class "gallery__image" src = "${preview}"
        data-source = "${original}"
        alt = "${description}"/>
        </a>
        </div>`;
    })
    .join("");
}
items.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

const onItemsClick = (evt) => {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const box = basicLightbox.create(`<img src='${evt.target.dataset.source}'>`, {
    onShow: (box) => {
      document.addEventListener("keydown", onEsc);
    },
    onClose: (box) => {
      document.removeEventListener("keydown", onEsc);
    },
  });

  function onEsc(evt) {
    if (evt.code === "Escape") {
      box.close();
    }
  }
  box.show();
};
items.gallery.addEventListener("click", onItemsClick);
