export default function loadPage() {
    var num = 0;
    var loader = document.getElementById("loader")
    var content = document.getElementById("imgs");
    var loader_num = document.getElementById("loader_num");

    function imgLoad(img) {
        var img_length = document.images.length;
        // img.src = img.src;


        setTimeout(function () {
            loader_num.textContent = Math.ceil((num) / (img_length) * 100) + "%";
            num++;
            if (num < img_length) {
                imgLoad(document.images[num]);
            }
            else {
                loader.style.display = "none";
            }
        }, 100)


    }
    imgLoad(document.images[num]);
}