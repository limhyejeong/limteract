<template>
  <div>
    <footer id="contact">
      <div class="sub_title">THANK YOU</div>
      <!-- <button class="good_btn">GOOD👍</button> -->
      <a href="mailto:limteractive@gmail.com" class="contact_mail"
        >limteractive@gmail.com</a
      >

      <div class="footer_link">
        <a href=""><img src="../assets/img/notion.png" alt="" /> NOTION</a>
        <a href=""><img src="../assets/img/github.png" alt="" /> GITHUB</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
  background-color: #000;
  color: #fff;

  .sub_title {
    font-size: 6rem;
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
    font-size: 5rem;
    text-decoration: underline;
    position: relative;
    cursor: pointer;

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
    font-size: 1.3rem;
    transition: 0.25s;
    color: #fff;

    &:nth-child(1) {
      margin-right: 50px;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }
}
.footer_link {
  display: flex;
  margin-top: 100px;
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
      font-size: 2rem;
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
      font-size: 2rem;
    }
  }
}
</style>
