window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollProgress = scrollY / docHeight;

    const image = document.getElementById("mainImage");

    if (scrollProgress < 0.33) {
        image.src = "images/image1.jpg";
    } else if (scrollProgress < 0.66) {
        image.src = "images/image2.jpg";
    } else {
        image.src = "images/image3.jpeg";
    }

    // Optional: Add a zoom or rotation effect
    image.style.transform = `scale(${1 + scrollProgress * 0.5}) rotate(${scrollProgress * 360}deg)`;
});
