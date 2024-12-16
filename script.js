if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker registrado."))
    .catch((error) =>
      console.log("Error al registrar el Service Worker:", error)
    );
}

//Codigo de JavaScript para el Modal y Navegación
// Arreglo de URLs de las imágenes
const photos = [
    "img/nature1.jpg",
    "img/nature2.jpg",
    "img/nature3.jpg",
    // Agrega más imágenes si es necesario
];

let currentPhotoIndex = 0;

// Abrir modal y mostrar la imagen seleccionada
function openModal(index) {
    currentPhotoIndex = index;
    document.getElementById("modalImage").src = photos[currentPhotoIndex];
    document.getElementById("photoModal").style.display = "flex";
}

// Cerrar el modal
function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}

// Navegar a la foto anterior
function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
    document.getElementById("modalImage").src = photos[currentPhotoIndex];
}

// Navegar a la foto siguiente
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
    document.getElementById("modalImage").src = photos[currentPhotoIndex];
}
