const imageThumbs = document.getElementById("image-thumbs");
const currentImage = document.getElementById("current-image");

const TOTAL_IMAGES = 12;

for (let i = 1; i <= TOTAL_IMAGES; i++) {
	const thumb = document.createElement("img");
	thumb.src = `img/gallery/${i}.JPG`;
	thumb.alt = `Image ${i}`;
	thumb.classList.add("thumb");
	thumb.addEventListener("click", () => highlight(thumb));

	imageThumbs.appendChild(thumb);
}

function highlight(thumb) {
	currentImage.src = thumb.src;
	currentImage.alt = thumb.alt;
}

const first = imageThumbs.firstChild;
highlight(first);
