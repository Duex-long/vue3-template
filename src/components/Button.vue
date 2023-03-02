<template>
  <button class="Button" :class="type">
    <slot />
    <!-- <loading-icon/> -->
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import LoadingIcon from './LoadingIcon.vue'

defineProps({
	type:{
		type:String as PropType<'primary'>,
		default:() => 'primary'
	}
})
</script>

<style scoped lang="less">
.Button {
  padding: 8px 0px;
  min-height: 20px;
  min-width: 40px;
  border-radius: 8px;
  border-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  transition: all .4s ease;
  &.primary {
    color: #fff;
    background: dodgerblue;
  }

  &.default {
    color: dodgerblue;
    background: #fff;
    border: 1px solid dodgerblue;
  }

  &:active{
    // box-shadow: none;
    background-color: rgb(5, 176, 255);
  }


}</style>
