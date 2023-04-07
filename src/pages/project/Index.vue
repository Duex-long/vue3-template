<template>
  <div class="Project">
    <div class="container">
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="less">
.Project {
  --card-width:100px;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  box-sizing: border-box;
  :where(&) div {
    box-sizing: border-box;
  }
  .container {
    width: 95%;
    height: 95%;
    // border: 1px solid steelblue;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: #ccc;
  }
}
</style>
