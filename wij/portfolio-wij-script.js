function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', function () {
    var defaultImage = document.getElementById('exploration-image');
    if (defaultImage) {
        defaultImage.style.display = 'block';
    }
});

//document.addEventListener('DOMContentLoaded', function () {
//const imageLink = document.querySelector('a[href="#section2"]');

//imageLink.addEventListener('click', function (event) {
//event.preventDefault();

//const targetSection = document.querySelector('#section2');

//targetSection.scrollIntoView({ behavior: 'smooth' });
//});
//});

function changeImageAndClassOnMouseOver(imageId, newImageSrc, newClass, repeat) {
    var image = document.getElementById(imageId);
    image.src = newImageSrc;
    image.classList.add(newClass);

    if (repeat) {
        image.style.height = "2.625rem";
    }
}

function changeImageAndClassOnMouseOut(imageId, originalImageSrc, oldClass) {
    var image = document.getElementById(imageId);
    image.src = originalImageSrc;
    image.classList.remove(oldClass);

    image.style.height = "1.75rem";
}

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}