export default function mouseCursor() {
    const cursor = document.querySelector(".cursor");

    let x, y;

    window.addEventListener('mousemove', (e) => {
        x = e.clientX;
        y = e.clientY;
        cursor.style.top = y;
        cursor.style.left = x;
    })

}