export default function dragSticker(elem) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // 마우스 다운 시
    let downListener = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement; // 마우스 놓을 때 
        document.onmousemove = elementDrag; // 마우스 드래그
    }
    elem.addEventListener('mousedown', downListener)


    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elem.style.top = (elem.offsetTop - pos2) + "px";
        elem.style.left = (elem.offsetLeft - pos1) + "px";
    }

    function closeDragElement(e) {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}