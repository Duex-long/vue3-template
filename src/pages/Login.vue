<template>
  <div class="Login">
    <div class="Login__main">
      <div class="introduct">1</div>
      <div class="form">
        <!-- <div class="form-avatar">
        </div> -->
        <div class="form-title form-text">
          拨云见日 茅塞顿开
        </div>
        <div class="form-tips form-text">
          大丈夫生于天地之间,岂能郁郁久居人下!
        </div>
        <Input placeholder="Email" />
        <Input placeholder="Password" inputType="password" />
        <div class="form-opt">
          <div @click="checkedRememberPassword = !checkedRememberPassword">
            <div class="check" :class="{active:checkedRememberPassword}"></div>
            <span>
              Remember me
            </span>
          </div>
          <div> </div>
        </div>
        <Button style="width: 60%;">
          <div class="form-text">登记</div>
        </Button>

        <Button type="default" style="width: 60%; margin-top: 20px;">
          <div class="form-text">求我</div>
        </Button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const emailVal = ref('')
const passwordVal = ref('')
const checkedRememberPassword = ref(false)


</script>

<style scoped lang="less">
.Login {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding-top: 80px;
  justify-content: center;

  &__main {
    width: 80%;
    height: 80%;
    max-width: 1200px;
    max-height: 80%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 40px 20px;
    box-shadow: 0px 0px 30px 10px #CCC6D3;
    overflow: hidden;
    display: flex;

    .introduct {
      background: dodgerblue;
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #fff;

      &-avatar {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        background: white;
      }

      &-text {
        font-size: .75rem;
        text-align: center;
        font-family: lixunkexingshu2;
      }

      &-title {
        padding: 5px 0;
        font-size: 28px;
      }

      &-opt {
        padding: 0px 0 5px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        color: rgba(169, 162, 162, 0.817);
        cursor: pointer;

        span {
          user-select: none;
          font-size: 12px;
        }

        .check {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          box-sizing: border-box;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(169, 162, 162, 0.817);
          transition: all .4s ease;
          border-radius: 2px;

          // vertical-align: middle;


          &.active {
            border-color: dodgerblue;
            &::after {
            position: absolute;
            content: '';
            width: 60%;
            height: 60%;
            background: dodgerblue;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
          }


        }

        &:hover {
            color: dodgerblue;
        }
      }

      &-tips {
        padding: 5px 0;
        font-size: 14px;
        color: rgba(0, 0, 0, .6);
      }
    }

    @media (min-width:750px) {

      // background:yellow;
      :where(&)>div {
        width: 50%;
        box-sizing: border-box;
        padding: 20px;
      }
    }

    @media (max-width:750px) {
      background: green;

      .form {
        flex: 1;

        &-title {
          font-size: 1.25rem;
        }
      }

      .introduct {
        display: none;
      }
    }
  }
}</style>
