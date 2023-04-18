<template>
  <div class="Project">
    <div class="Project-column main" ></div>
    <div class="Project-column side" ></div>

  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="less">
.Project {
  --card-width: 100px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top:16px;
  flex-wrap: wrap;
  overflow-y: auto;
  /** ms */
  scrollbar-width: none;
  /* firefox */
  -ms-overflow-style: none;

  /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  :where(&) div {
    box-sizing: border-box;
  }

  &-column {
    height: 100%;
    flex-shrink: 0;
    transition: width .4s ease 0s;
    &.main {
    border-right: 1px solid #ccc;

    }
  }

  @media (min-width: 320px) {
    &-column {

      &.main,
      &.side {
        width: 100%;
      }

    }
  }

  @media (min-width: 768px) {
    &-column {
      &.main {
        width: 66.6%;
      }

      &.side {
        width: 33.3%;
      }
    }

  }

  // @media (min-width: 1024px) {
  //     &-column {
  //       width: 33.33%;
  //     }
  // }
}</style>
