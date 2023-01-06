<script setup>
import { ref } from "vue";

const header = ref("");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // 아래로 스크롤
    header.value.style.top = "-50px";
  } else {
    // 위로 스크롤
    header.value.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
</script>

<template>
  <div class="template">
    <header ref="header">
      <div class="logo">HYEJEONG</div>

      <nav>
        <router-link to="#" class="nav_link">WORK</router-link>
        <router-link to="#" class="nav_link">ABOUT</router-link>
        <router-link to="#" class="nav_link">CONTACT</router-link>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style lang="scss">
.template {
  width: 100vw;
}
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--nav-height);
  position: fixed;
  top: 0;
  left: 0;
  // background: #aaa;
  border-bottom: 1px solid #000;
  align-items: center;
  transition: 0.25s;

  nav {
    display: flex;

    .nav_link {
      list-style: none;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
