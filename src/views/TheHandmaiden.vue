<script>
import nextPageBook from "../js/nextPageBook.js";

import Footer from "./Footer.vue";

export default {
  components: { Footer },
  setup() {
    window.addEventListener("load", (event) => {
      const bookLogo = document.querySelectorAll(".logo_develop img");
      const colorMovieImg = document.querySelector(".color_contents");
      const partView = document.querySelectorAll(".part_view");
      const colorCode = document.querySelector(".color_code");
      const colorBackground = document.querySelector(".color_background");
      const bookFont = document.querySelectorAll(".book_font div");

      let viewObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("view");
          } else {
            entry.target.classList.remove("view");
          }
        });
      });

      viewObserver.observe(bookLogo[0]);
      viewObserver.observe(bookLogo[1]);
      viewObserver.observe(bookLogo[2]);
      viewObserver.observe(partView[0]);
      viewObserver.observe(partView[1]);
      viewObserver.observe(partView[2]);

      let colorObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            colorBackground.style.filter = "grayscale(0)";
          } else {
            colorBackground.style.filter = "grayscale(1)";
          }
        });
      });
      colorObserver.observe(colorCode);

      let scrollY = window.scrollY;
      let lastScrollY;
      let colorMovieImgY = 200;
      let bookFont1 = -100;
      let bookFont2 = 600;

      window.addEventListener("scroll", () => {
        // 아래로 스크롤
        if (lastScrollY < window.scrollY) {
          colorMovieImgY--;
          bookFont1 += 2;
          bookFont2 -= 2;
        } else {
          // 위로 스크롤
          colorMovieImgY++;
          bookFont1 -= 2;
          bookFont2 += 2;
        }

        colorMovieImg.style.transform = `translateY(${colorMovieImgY}px)`;
        bookFont[0].style.transform = `translateX(${bookFont1}px)`;
        bookFont[1].style.transform = `translateX(${bookFont2}px)`;
        lastScrollY = window.scrollY;
      });

      nextPageBook();
    });
  },
};
</script>

<template>
  <div class="the_handmaiden">
    <section class="project_cover">
      <div class="project_intro">
        <div class="sub_title">The Handmaiden<br />Book</div>
      </div>

      <section class="book_view">
        <button id="prev_btn" class="none">
          <img src="../assets/img/arrow.png" alt="" />
        </button>
        <div class="book"></div>
        <button id="next_btn">
          <img src="../assets/img/arrow.png" alt="" />
        </button>
      </section>

      <div class="project_description">
        <span>Edit design, Mar 2018 - Jun 2018</span>
        <p>
          장면 순간순간의 감정을 전달하기 위해<br />
          한 권 안에 영화의 톤앤매너를 그대로 담았습니다.<br />
          <br />
          더욱 즐겁게 감상할 수 있도록 인터랙티브 웹으로 정리했습니다.
        </p>
        <span>©2023 hyejeong lim</span>
      </div>
    </section>

    <section class="book_logo">
      <div class="logo_develop">
        <img src="../assets/img/thehandmaiden/branding1.png" alt="" />
        <div>. . .</div>
        <img src="../assets/img/thehandmaiden/branding2.png" alt="" />
        <div>. . .</div>
        <img src="../assets/img/thehandmaiden/branding3.png" alt="" />
      </div>

      <p>
        영화의 배경으로 등장하는 일본의 언어로,<br />
        '아가씨' 글자 모양을 모티브로 하여 로고 그래픽을 구체화하였습니다.
      </p>
    </section>

    <section class="book_color">
      <div class="color_background"></div>
      <div class="color_contents">
        <div class="color_moive_img"></div>
        <p>
          숙희는 히데코가 긴 시간 동안 학대 당한 것을 알고 분노하며,<br />거대한
          서재에 있던 서책들을 전부 찢어 버립니다.<br />
          히데코도 물에 잠겨 있는 책들에 직접 <span>빨간 잉크</span>를 뿌리면서
          숙희와 함께 서책을 망가뜨립니다.<br />
          20년간 음서를 낭독해오며 조롱 당했던 과거들이 숙희에 의해 갈갈이
          찢어지게 됩니다.
        </p>
      </div>
    </section>

    <section class="color_code">
      <span>PANTONE 193C</span><br />
      #BF0D3E<br />
      R 191 G 13 B 62<br />
      C 2 M 99 Y 62 K 11
    </section>

    <section class="book_font">
      <div>Kopub 바탕체</div>
      <div>내 인생을 망치러 온 나의 구원자</div>
    </section>

    <section class="book_preview">
      <div class="book_sample">
        <img src="../assets/img/thehandmaiden/preview_front.jpg" />
      </div>
      <span>꾹 눌러보세요</span>
    </section>

    <section class="part_view">
      <div class="part_description">
        <div class="part_name">Part 1. 등장인물 소개</div>
        <img src="../assets/img/thehandmaiden/part/part1_0.png" alt="" />
        <p>
          영화의 주요 등장 인물 소개 파트입니다.<br />
          펼친 두 페이지 각각에 등장인물의 정보와 클로즈업 이미지를
          배치했습니다. <br />
          인물의 명대사 및 영화 내 줄거리를 포함하여 인물을 쉽게 파악할 수
          있도록 하였습니다.
        </p>
      </div>
      <div class="part_page">
        <img src="../assets/img/thehandmaiden/part/part1_1.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part1_2.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part1_3.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part1_4.png" alt="" />
      </div>
    </section>

    <section class="part_view">
      <div class="part_description">
        <div class="part_name">Part 2. 아가씨 이야기</div>
        <img src="../assets/img/thehandmaiden/part/part2_0.png" alt="" />
        <p>
          영화의 시나리오와 전문가 평론 파트입니다.<br />
          페이지 당 하나의 문단으로 구성하여 읽는 흐름이 끊기지 않도록 구성하고,
          <br />
          중간중간에 주석을 달아 스토리 이해를 도왔습니다.
        </p>
      </div>
      <div class="part_page">
        <img src="../assets/img/thehandmaiden/part/part2_1.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part2_2.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part2_3.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part2_4.png" alt="" />
      </div>
    </section>

    <section class="part_view">
      <div class="part_description">
        <div class="part_name">Part 3. 아가씨 뒷 편</div>
        <img src="../assets/img/thehandmaiden/part/part3_0.png" alt="" />
        <p>
          영화의 감독 및 배우의 인터뷰 파트입니다.<br />
          스크린에서 벗어나 영화의 비하인드를 엿본다는 느낌을 주기 위해<br />
          통일성을 해치지 않는 선에서 다이나믹한 레이아웃을 구성했습니다.
        </p>
      </div>
      <div class="part_page">
        <img src="../assets/img/thehandmaiden/part/part3_1.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part3_2.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part3_3.png" alt="" />
        <img src="../assets/img/thehandmaiden/part/part3_4.png" alt="" />
      </div>
    </section>

    <Footer />
  </div>
</template>

<style lang="scss">
@import "../src/assets/scss/the_handmaiden.scss";
</style>
