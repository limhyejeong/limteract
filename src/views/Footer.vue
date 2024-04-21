<template>
  <div>
    <footer id="contact">
      <div class="sub_title">THANK YOU</div>
      <!-- <button class="good_btn">GOOD👍</button> -->
      <a href="mailto:limteractive@gmail.com" class="contact_mail"
        >limteractive@gmail.com</a
      >

      <div class="footer_link">
        <a href="https://hyejeonglim.notion.site/" target="_blank"
          ><img src="../assets/img/notion.png" alt="notion" /> NOTION</a
        >
        <a href="https://github.com/limhyejeong" target="_blank"
          ><img src="../assets/img/github.png" alt="githib" /> GITHUB</a
        >
        <!-- <a href="https://blog.naver.com/pizzaver" target="_blank"
          ><img src="../assets/img/blog.png" alt="" /> BLOG</a
        > -->
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  background-color: #000;
  color: #fff;

  .sub_title {
    font-size: 4rem;
    // z-index: 1;
    font-weight: 300;
  }

  // .good_btn {
  //   font-size: 2rem;
  //   background-color: #fff;
  //   border: 2px solid #000;
  //   border-radius: 50px;
  //   margin: 50px;
  // }

  .contact_mail {
    font-size: 1.5rem;
    text-decoration: underline;
    position: relative;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      animation: mail-hover 1s ease-in-out;

      &::after {
        display: block;
      }
    }

    &::after {
      content: "Send email?";
      display: none;
      position: absolute;
      font-size: 1rem;
      font-weight: 600;
      top: -10px;
      right: 0;
    }
  }
  a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    transition: 0.25s;
    color: #fff;
  }
  .footer_link {
    display: flex;
    margin-top: 50px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    a:not(:last-child) {
      margin-right: 50px;
    }
  }
}

@keyframes mail-hover {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-4deg);
  }
  40% {
    transform: rotate(3deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

// 반응형 - 패드
@media (max-width: 1024px) {
  footer {
    .sub_title {
      font-size: 3rem;
      z-index: 1;
    }
    .contact_mail {
      font-size: 1.5rem;
    }
  }
}

// 반응형 - 모바일
@media (max-width: 768px) {
  footer {
    .sub_title {
      font-size: 3rem;
      z-index: 1;
    }
    .contact_mail {
      font-size: 1.3rem;
    }

    .footer_link {
      // display: flex;
      align-items: center;
      flex-direction: column;

      a {
        font-size: 1.2rem;

        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
