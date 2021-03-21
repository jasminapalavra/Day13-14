function closeModal() {
    modal.style.visibility = 'hidden';
}

var images = document.getElementById('image-list').getElementsByTagName('img');
for (i = 0; i < images.length; i++) {
  images[i].addEventListener('click', activateImage);
}

var title = document.getElementById('title');
var image = document.getElementById('image');
var text = document.getElementById('text');

function activateImage() {
    modal.style.visibility = "visible";
    title.innerHTML = this.title;
    image.src = "../images/" + this.id + ".jpg";
    text.innerHTML = "<iframe class='text' src='" + this.id + ".html'></iframe>";
  }
  