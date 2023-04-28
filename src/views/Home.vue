<script>
import { onMounted } from "vue";
import mainCanvas from "../js/mainCanvas.js";
import dragSticker from "../js/dragSticker.js";
import worksImgHover from "../js/worksImgHover.js";
import gravitySkill from "../js/gravitySkill.js";
import Footer from "./Footer.vue";

export default {
  components: { Footer },
  setup() {
    function init() {
      const mainGradient = document.querySelector(".main_gradient");
      const stickers = document.querySelectorAll(".profile_sticker img");
      // const essentialImg = document.querySelectorAll(".essential img");
      // const essential = document.querySelectorAll(".essential");
      // const skillCanvas = document.querySelector(".skill");

      let observer = new IntersectionObserver((elems) => {
        elems.forEach((el) => {
          if (el.isIntersecting) {
            el.target.style.opacity = 1;
            el.target.style.transform = `translateY(0px)`;
          } else {
            el.target.style.opacity = 0;
            el.target.style.transform = `translateY(-20px)`;
          }
        });
      });

      // observer.observe(essential[0]);
      // observer.observe(essential[1]);
      // observer.observe(essential[2]);

      // let gravityObserver = new IntersectionObserver((elems) => {
      //   elems.forEach((el) => {
      //     if (el.isIntersecting) {
      //       gravitySkill(skillCanvas);
      //     } else {
      //       skillCanvas.innerHTML = "";
      //     }
      //   });
      // });

      // gravityObserver.observe(skillCanvas);

      let scrollY = window.scrollY;
      let lastScrollY;
      let step = 1.5;
      let essY = 0;
      let mainGradientY = 80;

      // window.addEventListener("scroll", () => {
      //   // 아래로 스크롤
      //   if (lastScrollY < window.scrollY) {
      //     essY -= step;
      //     mainGradientY -= step;
      //   } else {
      //     // 위로 스크롤
      //     essY += step;
      //     mainGradientY += step;
      //   }

      //   essentialImg.forEach((img) => {
      //     img.style.transform = `translateY(${essY}px)`;
      //   });

      //   mainGradient.style.transform = `translateY(${mainGradientY}px)`;
      //   lastScrollY = window.scrollY;
      // });

      // 아이콘에 드래그 앤 드롭 함수 부여
      stickers.forEach((sticker) => {
        dragSticker(sticker);
      });

      worksImgHover();
      mainCanvas();
    }

    onMounted(() => {
      init();
    });
  },
};
</script>

<template>
  <div>
    <canvas id="three-canvas"></canvas>

    <section class="main_cover">
      <div class="main_title">
        <div class="main_title_scroll">
          <span>HAPPY NEW YEAR ☺ &nbsp;HAPPY NEW YEAR ☺ &nbsp;</span>
          <span>HAPPY NEW YEAR ☺ &nbsp;HAPPY NEW YEAR ☺ &nbsp;</span>
        </div>
      </div>
      <div class="copyright">©2023 HYEJEONG LIM</div>
    </section>

    <section class="main_intro">
      <div class="sub_title">
        <div>valuable</div>
        <div>
          e<span
            >(
            <img src="../assets/img/plus.png" alt="" class="plus_img" />
            )</span
          >perience
        </div>
        <div>for</div>
        <div>Better LIFE</div>
      </div>
      <p>
        저는 모두가 더 나은 삶을 살 수 있도록 돕는 UX 개발자입니다.<br />
        제 능력을 통해 많은 사람에게 특별한 경험을 제공하여<br />
        윤택한 삶을 만드는 것이 제 작업의 목표입니다. <br />
        서비스를 즐기는 과정을 더욱 즐겁게 만들기 위해<br />
        마이크로 인터랙션을 비롯한 웹 사이트의 프론트를 구현합니다.
      </p>

      <div class="main_gradient"></div>
    </section>

    <section class="main_work">
      <h1 class="sub_title">I Make</h1>
      <div class="main_work_video">
        <a href="https://emotions.kr/" target="_blank">
          <video muted autoplay loop playsinline>
            <source
              src="../assets/video/main_project_video.webm"
              type="video/webm"
            />
          </video>
        </a>
      </div>
      <h1 class="sub_title">Interactive Web</h1>

      <div class="main_work_contents">
        <div>
          <p>
            3D 인터랙티브 웹 &lt;형용할 수 없는 감정에 대하여&gt;는<br />
            인간의 표현할 수 없는 복합적인 감정을<br />
            알고리즘을 통해 추상적인 3차원 객체로 시각화하여<br />
            웹 사이트에 아카이브한 프로젝트입니다.
          </p>
          <span
            >School of Design Convergence, Hongik University<br />
            2022 Graduation Project</span
          >
        </div>

        <a
          href="https://www.notion.so/hyejeonglim/339fc67384db45bd9056ae57b3f7fe46"
          target="_blank"
          >View Work Process</a
        >
      </div>
    </section>

    <section id="works" class="works">
      <div class="sub_title">Works</div>
      <div class="works_list">
        <a class="works_item" href="https://emotions.kr/" target="_blank">
          <span class="works_num">01</span>
          <div class="works_title">
            About Indescribable Emotions
            <div class="works_title_kor">형용할 수 없는 감정에 대하여</div>
          </div>
          <span class="works_type">Interactive Web</span>
          <span class="works_year">©2022</span>
          <div class="works_img">
            <img
              src="../assets/img/work_1.jpg"
              alt="About Indescribable Emotions"
            />
          </div>
        </a>

        <a
          class="works_item"
          href="https://limhyejeong.github.io/donuts/"
          target="_blank"
        >
          <span class="works_num">02</span>
          <div class="works_title">
            Donuts
            <div class="works_title_kor">3D 음악감상 웹</div>
          </div>
          <span class="works_type">Interactive Web</span>
          <span class="works_year">©2023</span>
          <div class="works_img">
            <img src="../assets/img/work_2.jpg" alt="Donuts" />
          </div>
        </a>

        <a
          class="works_item"
          href="https://limhyejeong.github.io/accessibility-survey/"
          target="_blank"
        >
          <span class="works_num">03</span>
          <div class="works_title">
            Web Accessibility Survey
            <div class="works_title_kor">웹 접근성 실태 조사 분석 보고서</div>
          </div>
          <span class="works_type">Big Data</span>
          <span class="works_year">©2022</span>
          <div class="works_img">
            <img
              src="../assets/img/work_3.jpg"
              alt="웹 접근성 실태 조사 분석 보고서"
            />
          </div>
        </a>

        <!-- <a class="works_item" href="/the-handmaiden">
          <span class="works_num">04</span>
          <div class="works_title">
            Movie &lt;The Handmaiden&gt; Book Design
            <div class="works_title_kor">영화 &lt;아가씨&gt; 북 디자인</div>
          </div>
          <span class="works_type">Edit Design</span>
          <span class="works_year">©2018</span>
          <div class="works_img">
            <img
              src="../assets/img/work_4.jpg"
              alt="Movie The Handmaiden Book Design"
            />
          </div>
        </a> -->

        <a
          class="works_item"
          href="https://limhyejeong.github.io/canvasgallery/index.html"
          target="_blank"
        >
          <span class="works_num">04</span>
          <div class="works_title">
            Canvas Gallery
            <div class="works_title_kor">캔버스 갤러리</div>
          </div>
          <span class="works_type">Interactive Web</span>
          <span class="works_year">©2021</span>
          <div class="works_img">
            <img src="../assets/img/work_5.jpg" alt="Canvas Gallery" />
          </div>
        </a>

        <a
          class="works_item"
          href="https://youtu.be/5kpmk996pUM"
          target="_blank"
        >
          <span class="works_num">05</span>
          <div class="works_title">
            Music Shower
            <div class="works_title_kor">빛과 음악으로 샤워하다</div>
          </div>
          <span class="works_type">Sound&Visual Installation</span>
          <span class="works_year">©2022</span>
          <div class="works_img">
            <img src="../assets/img/work_6.jpg" alt="Music Shower" />
          </div>
        </a>

        <a
          class="works_item"
          href="https://9oormthon.goorm.io/3_goofy"
          target="_blank"
        >
          <span class="works_num">06</span>
          <div class="works_title">
            3rd 9oormthon
            <div class="works_title_kor">
              서핑을 위한 해변 추천 및 가이드 앱
            </div>
          </div>
          <span class="works_type">Native App</span>
          <span class="works_year">©2022</span>
          <div class="works_img">
            <img src="../assets/img/work_7.jpg" alt="3rd 9oormthon" />
          </div>
        </a>
      </div>

      <div class="works_etc">
        <a href="https://hyejeonglim.notion.site/" target="_blank"
          >other works</a
        >
      </div>
    </section>

    <section id="about" class="profile">
      <div class="sub_title">Who am I</div>
      <div class="profile_contents">
        <div class="profile_position">
          <div class="position">
            <span>UI/UX Designer</span>
            <span>Interaction Developer</span>
            <span>Creative Technologist</span>
            <span>Maker</span>
          </div>
          <div class="position">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>UI/UX Designer</span>
            <span>Interaction Developer</span>
            <span>Creative Technologist</span>
            <span>Maker</span>
            <span>&nbsp;</span>
          </div>
        </div>

        <div class="profile_info">
          <div class="profile_img">
            <img src="../assets/img/profile.png" alt="hyejeong" />
            <img src="../assets/img/profile_baby.jpg" alt="baby hyejeong" />
          </div>
          <div class="profile_sticker">
            <img src="../assets/img/heart.png" alt="" />
            <img src="../assets/img/clover.png" alt="" />
            <img src="../assets/img/pizza.png" alt="" />

            <img src="../assets/img/soccer.png" alt="" />
            <img src="../assets/img/coffee.png" alt="" />
            <img src="../assets/img/globe.png" alt="" />
          </div>
        </div>

        <div class="profile_personal">
          <div class="profile_name">HYEJEONG LIM</div>
          <div>임혜정</div>
          <div>1998.01.06</div>
        </div>
      </div>
      <!-- <svg width="600" height="700">
        <path
          id="MyPath"
          fill="none"
          stroke="blue"
          d="M 70 110 C 70 140, 110 140, 110 110"
        />
        <text><textPath href="#MyPath">HYEJEONG LIM</textPath></text>
      </svg> -->
    </section>

    <!-- <section class="skill"></section> -->

    <!-- <section class="essential ess1">
      <div class="ess_num"><span>1</span></div>
      <div class="ess_title">&nbsp;Create<br />Experience</div>
      <p>
        순간의 경험이 쌓여 삶의 질을 향상해줍니다.<br />특별한 경험을 제공하여
        모두가 더 나은 삶을 살도록 합니다.
      </p>
      <img src="../assets/img/ess_1_1.png" alt="" />
      <img src="../assets/img/ess_1_2.png" alt="" />
    </section>

    <section class="essential ess2">
      <div class="ess_num"><span>2</span></div>
      <div class="ess_title">Share<br />inspiration</div>
      <p>영감을 공유하는 사회를 만들어 서로에게 좋은 영향을 주고 받습니다.</p>
      <img src="../assets/img/ess_2_1.png" alt="" />
      <img src="../assets/img/ess_2_2.png" alt="" />
    </section>

    <section class="essential ess3">
      <div class="ess_num"><span>3</span></div>
      <div class="ess_title">Enjoy<br />Interaction</div>
      <p>
        인간과 디지털 미디어가 상호작용할 수 있는 인터랙티브 미디어를 만듭니다.
      </p>
      <img src="../assets/img/ess_3_1.png" alt="" />
      <img src="../assets/img/ess_3_2.png" alt="" />
      <img src="../assets/img/ess_3_3.png" alt="" />
    </section> -->

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/home.scss";
</style>
