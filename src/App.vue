<script setup lang="ts">
import { httpGet } from './http'

console.log(import.meta.env.VITE_MODE)

const testHttp = async () => {
	const res = await httpGet('https://demo.gempoll.com/cadillachall/h5.json')
	console.log(res)
}

testHttp()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6rem;
  padding: 1.5rem;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
