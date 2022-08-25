import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
const items = {
  gallery: document.querySelector(".gallery"),
};
const galleryMarkup = createImagesMarkup(galleryItems);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class = "gallery__item" href = ${original}">
        <img class "gallery__image" src = "${preview}"
        alt = "${description}"/>
        </a>`;
    })
    .join("");
}
items.gallery.insertAdjacentHTML("beforeend", galleryMarkup);
const basicLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
basicLightbox.on("show.simplelightbox", function () {});
