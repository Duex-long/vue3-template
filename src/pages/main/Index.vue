<template>
  <div class="Index">
    <div class="Index__main">
        <div class="Card-group">
          <div class="Card">
            <div class="Card-icon"></div>
            <div class="Card-title text">Title</div>
            <div class="Card-tips text">tips1</div>
            <div class="Card-tips text">tips2</div>
            <div class="Card-more">
              <MoreOutlined/>
            </div>
          </div>
          <div class="Card"></div>
          <div class="Card"></div>
          <div class="Card"></div>
          <div class="Card"></div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {MoreOutlined } from '@ant-design/icons-vue'

</script>
<style lang="less" scoped>

.Index{
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding-top: 50px;
  justify-content: center;

  &__main{
    position: relative;
    width: 80%;
    height: 90%;
    max-width: 1600px;
    max-height: 90%;
    box-sizing: border-box;
    background: rgb(239, 237, 237);
    border-radius: 40px 20px;
    box-shadow: 0px 0px 30px 10px #CCC6D3;
    overflow: hidden;
    display: flex;

    .Card-group {
      box-sizing: border-box;
      padding: 16px;
      width: 80%;
      height: 100%;
      // background: rgb(231, 229, 229);
      margin-left: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .Card {
        display: inline-block;
        position: relative;
        width: 20%;
        box-sizing: border-box;
        height: 160px;
        margin:2.5%;
        padding: 20px;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0px 0px 20px 5px #c2a7e0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        &-icon {
          height: 40px;
          width: 40px;
          background: yellow;
          border-radius: 100%;
        }
        .text {
          text-indent: .25em;
          font-size: 12px;
        }
        &-title {
          font-weight: bold;
          font-size: 16px;
        }
        &-tips {
        }

        &-more {
          position: absolute;
          text-align: center;
          line-height: 30px;
          right: 5%;
          top: 10%;
          width: 30px;
          height: 30px;
          border-radius: 100%;
          font-size: 18px;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
