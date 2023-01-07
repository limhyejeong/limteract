<script setup></script>

<template>
  <div>
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
        <div>e<span>X</span>perience</div>
        <div>for</div>
        <div>Better LIFE</div>
      </div>
      <p>
        저는 모두가 더 나은 삶을 살 수 있도록 돕는 경험 개발자입니다.<br />
        제 능력을 통해 많은 사람에게 특별한 경험을 제공하여<br />
        윤택한 삶을 만드는 것이 제 작업의 목표입니다. <br />
        서비스를 즐기는 과정을 더욱 즐겁게 만들기 위해<br />
        마이크로 인터랙션을 비롯한 웹 사이트의 프론트를 구현합니다.
      </p>
    </section>

    <section class="main_work">
      <h1 class="sub_title">I Make</h1>
      <div class="main_work_video"></div>
      <h1 class="sub_title">Interactive Web</h1>
      <p>
        졸업작품인 &lt;형용할 수 없는 감정에 대하여&gt;는 언어로 표현할 수 없는
        복합적인 감정을 3D 오브젝트 형태로 표현하고,<br />
        웹 사이트상에 아카이브하여 많은 사람의 감정을 보관하고 감상할 수 있는
        인터랙티브 웹 프로젝트입니다.
      </p>
      <div class="main_work_video"></div>
    </section>

    <section class="works">
      <div class="sub_title">Works</div>
      <div class="works_list">
        <a class="works_item">
          <span class="works_num">01</span>
          <span class="works_title">
            <!-- <span class="works_title_kor">형용할 수 없는 감정에 대하여</span> -->
            About Indescribable Emotions
          </span>
          <span class="works_type">Interactive Web</span>
          <span class="works_year">©2022</span>
        </a>

        <a class="works_item">
          <span class="works_num">02</span>
          <span class="works_title">About Indescribable Emotions</span>
          <span class="works_type">Interactive Web</span>
          <span class="works_year">©2022</span>
        </a>

        <a class="works_item">
          <span class="works_num">03</span>
          <span class="works_title">About Indescribable Emotions</span>
          <span class="works_type">Interactive Web</span>
          <span class="works_year">©2022</span>
        </a>
      </div>
    </section>

    <section class="profile">
      <div class="sub_title">Who am I</div>
      <div class="profile_contents">
        <div class="profile_position">
          <div class="position">
            <span>UI/UX Designer</span>
            <span>Interaction Developer</span>
            <span>Creative Technologist</span>
            <span>Maker</span>
          </div>
        </div>

        <div class="profile_info">
          <div class="profile_img"></div>
          <div class="profile_personal">
            <div>HYEJEONG LIM</div>
            <span>임혜정</span>
            <span>1998.01.06</span>
          </div>
        </div>
      </div>
    </section>

    <section class="essential">
      <span>1</span>
      <h2>Create<br />Experience</h2>
      <p>
        순간순간의 경험이 삶의 질을 좌우합니다.<br />특별한 경험을 제공하여
        모두가 더 나은 삶을 살도록 합니다.
      </p>
    </section>

    <section class="essential">
      <span>2</span>
      <h2>Share <br />inspiration</h2>
      <p>영감을 공유하는 사회를 만들어 서로에게 좋은 영향을 주고 받습니다.</p>
    </section>

    <section class="essential">
      <span>3</span>
      <h2>Enjoy<br />Interaction</h2>
      <p>
        인간과 디지털 미디어가 상호작용할 수 있는 인터랙티브 미디어를
        좋아합니다.
      </p>
    </section>
  </div>
</template>

<style lang="scss">
.sub_title {
  // font-family: kirimaru, sans-serif;
  font-size: 8rem;
  font-weight: 300;
  line-height: 80%;
  text-transform: uppercase;
  letter-spacing: -0.3rem;
}

.main_cover {
  width: 100%;
  height: 100vh;
  background: #eee;

  .main_title {
    position: absolute;
    top: calc(var(--nav-height));
    width: 100%;

    .main_title_scroll {
      width: 100%;
      display: flex;

      span {
        font-size: 12rem;
        white-space: nowrap;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: -0.7rem;
        animation: main-title-scroll 50s linear infinite;
        &:nth-child(2) {
          animation: main-title-scroll2 50s linear infinite;
          animation-delay: -25s;
        }
      }
    }
  }
  .copyright {
    position: absolute;
    left: 100px;
    bottom: 100px;
  }
}

.main_intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px 10px 150px;

  .sub_title {
    font-weight: 600;
    width: 1000px;
    text-align: center;
    // text-transform: initial;

    div:nth-child(1) {
      text-align: left;
    }

    div:nth-child(2) {
      text-align: right;

      span {
        color: rgb(255, 39, 129);
      }
    }

    div:nth-child(3) {
      font-style: oblique;
    }
  }

  p {
    position: absolute;
    bottom: 0px;
    right: 200px;
  }
}

.main_work {
  //   height: 500px;
  padding: 0 20px;
  margin: 100px 0;

  .main_work_video {
    width: 100%;
    height: 600px;
    background-color: #ddd;
  }

  .sub_title:nth-child(3) {
    text-align: right;
  }
}

.works {
  padding: 0 20px;

  .works_list {
    .works_item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 50px 0;
      border-bottom: 2px solid #000;
      transition: 0.25s;
      line-height: 200%;

      &:nth-child(1) {
        border-top: 2px solid #000;
      }
      &:hover {
        cursor: pointer;
        color: brown;
      }

      .works_num {
        font-weight: 500;
      }

      .works_title {
        font-family: "kirimaru";
        font-size: 3rem;
        margin-left: 20px;

        .works_title_kor {
          font-size: 1rem;
        }
      }

      .works_type {
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.07rem;
        text-transform: uppercase;
        position: absolute;
        right: 0;
      }

      .works_year {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
}

.profile {
  padding: 0 20px;

  .profile_contents {
    .profile_position {
      position: absolute;
      right: 15%;
      text-align: center;
      overflow: hidden;
      z-index: 1;
      height: 80px;
      font-size: 80px;
      text-transform: uppercase;
      letter-spacing: -0.2rem;

      .position {
        display: flex;
        flex-direction: column;
        animation: profile-position-scroll 8s cubic-bezier(0.7, 0, 0.3, 1)
          infinite;
      }
    }

    .profile_info {
      position: absolute;
      left: 20%;

      .profile_img {
        width: 500px;
        height: 500px;
        background-color: #eee;
      }

      .profile_personal {
        display: flex;
        justify-content: space-evenly;

        div {
          font-weight: 600;
        }
      }
    }
  }
}

.essential {
  font-family: kirimaru, sans-serif;
  margin: 500px 0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    font-size: 1.7rem;
    border-radius: 50%;
    border: 2px solid #000;
  }
  h2 {
    font-size: 10rem;
    font-weight: 300;
    line-height: 10rem;
    text-transform: uppercase;
    letter-spacing: -0.3rem;
  }
}

@keyframes main-title-scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes main-title-scroll2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
}

@keyframes profile-position-scroll {
  0% {
    transform: translateY(25%);
  }
  20% {
    transform: translateY(-2%);
  }
  40% {
    transform: translateY(-27%);
  }
  60% {
    transform: translateY(-52%);
  }
  80% {
    transform: translateY(-77%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
