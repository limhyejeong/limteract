export default function nextPageBook() {
    let currentLocation = 0; // 현재 페이지
    let maxLocation = 17; // 총 페이지수
    let z = 1; // 페이지 별 x-index


    // 이전 버튼
    const prevBtn = document.querySelector("#prev_btn");
    // 다음 버튼
    const nextBtn = document.querySelector("#next_btn");
    // 전체 div인 book (div를 넣을 자리)
    const book = document.querySelector(".book");


    // 페이지 생성
    for (let i = 0; i < maxLocation; i += 1) {
        let div = document.createElement('div');
        div.setAttribute('id', `p${i}`);
        div.setAttribute('class', 'paper');
        div.setAttribute('style', `z-index: ${-i}`);

        let front = document.createElement('div');
        front.setAttribute('class', 'front');

        let frontContent = document.createElement('div');
        frontContent.setAttribute('class', 'front_content');

        let frontImg = document.createElement('img');
        frontImg.setAttribute('src', `../page/아가씨${z}.jpg`);
        frontContent.appendChild(frontImg);

        front.appendChild(frontContent);

        let back = document.createElement('div');
        back.setAttribute('class', 'back');

        let backContent = document.createElement('div');
        backContent.setAttribute('class', 'back_content');

        let backImg = document.createElement('img');
        backImg.setAttribute('src', `../page/아가씨${z + 1}.jpg`);
        backContent.appendChild(backImg);

        back.appendChild(backContent);

        div.appendChild(front);
        div.appendChild(back);

        z += 2;
        book.appendChild(div);
    }

    // book의 페이지들
    const papers = document.querySelectorAll(".paper");

    prevBtn.addEventListener("click", () => {
        prevPage(); displayBtn();
    });
    nextBtn.addEventListener("click", () => {
        nextPage(); displayBtn();
    });

    function openBook() {
        book.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-250px)";
        nextBtn.style.transform = "translateX(250px)";
    }

    function closeBook(isAtBeginning) {
        // 첫 장일 때 (true)
        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        }
        // 마지막 장일 때 (false)
        else {
            book.style.transform = "translateX(100%)";
        }
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function nextPage() {
        if (currentLocation < maxLocation) {
            if (currentLocation === 0) {
                openBook();
            }
            papers[currentLocation].classList.add("flipped");
            papers[currentLocation].style.zIndex = currentLocation + 1;
            if (currentLocation === (maxLocation - 1)) {
                closeBook();
            }
            currentLocation++;
        }
    }

    function prevPage() {
        if (currentLocation > 0) {
            if (currentLocation === 1) {
                closeBook(true);
            }
            papers[currentLocation - 1].classList.remove("flipped");
            papers[currentLocation - 1].style.zIndex = maxLocation - currentLocation + 1;
            if (currentLocation === maxLocation) {
                openBook();
            }
            currentLocation--
        }
    }

    function displayBtn() {
        if (currentLocation === 0) {
            prevBtn.classList.add('none');
        } else if (currentLocation === maxLocation) {
            nextBtn.classList.add('none');
        } else {
            prevBtn.classList.remove('none');
            nextBtn.classList.remove('none');
        }
    }
}