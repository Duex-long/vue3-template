<template>
  <div class="Card">
    <div class="title">
      {{ projectGroup.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
	projectGroup:{
		type:Object,
		default:() => ({
			name:'Group-item-name'
		})
	}
})
</script>

<style scoped lang="less">
.Card{
  overflow: hidden;
  .title {
    font-size: 16px;
  }

}
</style>
