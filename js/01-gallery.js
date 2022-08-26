import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const items = {
  gallery: document.querySelector(".gallery"),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`;
    })
    .join("");
}
items.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

const onGalleryClick = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imageShow = basicLightbox.create(
    `<img src='${event.target.dataset.source}'>`,
    {
      onShow: (imageShow) => {
        document.addEventListener("keydown", onEsc);
      },
      onClose: (imageShow) => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );

  function onEsc(event) {
    if (event.code === "Escape") {
      imageShow.close();
    }
  }
  imageShow.show();
};
items.gallery.addEventListener("click", onGalleryClick);
