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
