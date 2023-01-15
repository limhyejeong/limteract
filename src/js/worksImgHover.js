export default function worksImgHover() {
    const worksItem = document.querySelectorAll(".works_item");
    const worksImg = document.querySelectorAll(".works_img");
    const worksImages = document.querySelectorAll(".works_img img");

    for (let i = 0; i < worksItem.length; i++) {
        worksItem[i].addEventListener("mousemove", (e) => {
            worksImg[i].style.opacity = 1;
            worksImg[i].style.transform = `translate(-50%, -50% ) rotate(3deg)`;
            worksImages[i].style.transform = "scale(1, 1)";
            worksImg[i].style.left = e.clientX + "px";
            // hoverReveal[i].style.top = e.offsetY + "px";
        });

        worksItem[i].addEventListener("mouseleave", (e) => {
            worksImg[i].style.opacity = 0;
            worksImg[i].style.transform = `translate(-50%, -50%) rotate(-3deg)`;
            worksImages[i].style.transform = "scale(0.8, 0.8)";
        });
    }
}