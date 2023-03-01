<template>
  <div class="Button" :class="type">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
	type:{
		type:String as PropType<'primary'>,
		default:() => 'primary'
	}
})
</script>

<style scoped lang="less">
.Button {
  padding: 10px 20px;
  min-height: 20px;
  min-width: 40px;
  border-radius: 8px;
  font-size: 1rem;

  &.primary {
    color: #fff;
    background: dodgerblue;

  }
}</style>
