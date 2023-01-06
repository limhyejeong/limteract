<script setup></script>

<template>
  <div>
    <section>
      <div class="scroll">
        <span>HAPPY NEW YEAR&nbsp;</span>
        <span>HAPPY NEW YEAR&nbsp;</span>
      </div>
    </section>

    <div class="copyright"></div>

    <div class="cover"></div>
    <div id="work"></div>
  </div>
</template>

<style lang="scss">
section {
  position: absolute;
  top: 100px;
  width: 100%;
  //   overflow-x: hidden;

  .scroll {
    width: 100%;
    display: flex;

    span {
      font-size: 10rem;
      white-space: nowrap;
      font-weight: 100;
      text-transform: uppercase;
      animation: animate 20s linear infinite;

      &:nth-child(2) {
        animation: animate2 20s linear infinite;
        animation-delay: -10s;
      }
    }
  }
}
@keyframes animate {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animate2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
}

.cover {
  width: 100%;
  height: 100vh;
  background-color: #eee;
}
#work {
  width: 100%;
  height: 100vw;
}
</style>
