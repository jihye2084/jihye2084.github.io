document.addEventListener('DOMContentLoaded', function () {
    var defaultImage = document.getElementById('exploration-image');
    if (defaultImage) {
        defaultImage.style.display = 'block';
    }
});

function toggleImage(imageId) {
    // Hide all images
    var allImages = document.querySelectorAll('.image');
    allImages.forEach(function (image) {
        image.style.display = 'none';
    });

    // Show the selected image
    var selectedImage = document.getElementById(imageId + '-image');
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}