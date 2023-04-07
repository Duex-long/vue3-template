<template>
  <div class="Index">
    <h3 class="Index-title">Project-Group</h3>
    <template v-for="item in mockList" :key="item">
      <Transition enterActiveClass="enterFromClass" mode="in-out" appear>
        <div class="Index-item">
          <Card @click="setClick" :projectGroup="{ name: item }" />
        </div>
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/index/Card.vue'
import { reactive } from 'vue'
const mockList = reactive(['a', 'b', 'c', 'd', 'e'])
const getRandomNumber = () => {
	//97～122
	const n = Math.floor(Math.random() * 26)
	return String.fromCodePoint(n + 97)
}

const setClick = () => {
	mockList.length = 0
	mockList.push(...Array(5).fill(getRandomNumber()))
}
</script>

<style lang="less" scoped>
.Index {
  box-sizing: border-box;
  padding: 20px;
  &-title {
    font-weight: bolder;
  }
  &-item {
    padding: 20px;
    margin: 20px 0;
    border-radius: 20px;
    background-color: aliceblue;
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 10px 3px rgb(198, 204, 209);
    }
  }

  .enterFromClass {
    animation: fadeInLeft 0.6s ease 0s 1 forwards;
  }

  @keyframes fadeInLeft {
    0% {
      transform: translateX(100%);
      opacity: 0.6;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
}
</style>
