<script>
import { onMounted } from "vue";

export default {
  setup() {
    const loading = document.querySelector(".loading");

    function initHeader() {
      const header = document.querySelector("header");
      let lastScrollY;

      window.addEventListener("scroll", () => {
        // 아래로 스크롤
        if (lastScrollY < window.scrollY) {
          header.style.top = "-50px";
        } else {
          // 위로 스크롤
          header.style.top = "0";
        }
        lastScrollY = window.scrollY;
      });
      const cursor = document.querySelector(".cursor");
    }

    onMounted(() => {
      let loader = document.getElementById("loader");

      window.addEventListener("load", () => {
        initHeader();
        loader.style.opacity = "0";
        setTimeout(() => window.scrollTo({ top: 0 }), 100);
      });
    });

    return {
      initHeader,
    };
  },
};
</script>

<template>
  <div id="loader">
    <!-- <img src="./assets/img/bearwalking.gif" alt="" /> -->
    establish<br />experience<br /><span>for</span> you
  </div>

  <div class="template">
    <header>
      <div class="logo">
        <router-link to="/" class="nav_link">HYEJEONG LIM</router-link>
      </div>

      <nav>
        <a href="/#works" class="nav_link">WORK</a>
        <a href="/#about" class="nav_link">ABOUT</a>
        <a href="/#contact" class="nav_link">CONTACT</a>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style lang="scss">
#loader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fcfff6, #fff);
  // background-color: #000;
  // background-color: #fff;
  z-index: 100;
  display: flex;
  font-weight: 200;
  font-size: 5em;
  line-height: 5rem;
  // color: #fff;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.5s;
  pointer-events: none;
  overflow: hidden;
  span {
    color: var(--point-color);
    font-style: oblique;
  }
  img {
    width: 300px;
    height: auto;
  }
  &.out {
    // opacity: 0;
  }
}

.template {
  width: 100vw;
}
.cursor {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: var(--point-color);
  border-radius: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
}
header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--nav-height);
  align-items: center;
  transition: 0.25s;
  z-index: 10;
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.3);

  a {
    color: #000;
    font-weight: 500;
    letter-spacing: -0.05rem;
  }

  .logo {
    margin-left: 20px;
    // font-family: "kirimaru";
    // font-size: 2rem;
    font-weight: 800;
  }

  nav {
    display: flex;

    .nav_link {
      list-style: none;
      margin-right: 20px;
    }
  }
}

// 반응형 - 모바일
@media (max-width: 768px) {
  #loader {
    font-size: 3em;
    line-height: 3rem;
  }
  header {
    display: none;
  }
}
</style>
