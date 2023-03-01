<template>
  <div class="Input" :class="{ active: (inputState === 'focus' || inputVal) }">
    <div class="Input-container">
      <div class="Input-placehloder">{{ placeholder }}</div>
      <input v-model="inputVal" @focus="inputFocus" @blur="inputBlur" class="Input-insert" :type="inputType" />
      <LockOutlined class="icon" v-if="inputType==='password'" />
      <UserOutlined class="icon" v-else/>
    </div>

  </div>

</template>

<script setup lang="ts">
import { ref,PropType,h } from 'vue'
import { LockOutlined ,UserOutlined } from '@ant-design/icons-vue'

defineProps({
	placeholder: {
		type: String,
		default: () => 'Placehloder',
		require: false
	},
	inputType:{
		type:String as PropType<'text' | 'password'>,
		default:() => 'text'
	}
})


const inputVal = ref('')
const inputState = ref<'blur' | 'focus'>('blur')

const inputBlur = () => {
	inputState.value = 'blur'
}

const inputFocus = () => {
	inputState.value = 'focus'
}



</script>

<style scoped lang="less">
.Input {
  width: 60%;
  padding: 15px;
  background: transparent;
  --placeholder-diff: 0;
  --placeholder-scale: 1;
  --border-color: rgba(204, 204, 204, .6);

  &.active {
    --border-color: dodgerblue;
    --placeholder-diff: -80%;
    --placeholder-scale: .65;
  }

  &-container {
    position: relative;
    height: 40px;
    box-sizing: border-box;
    padding: 5px 10px;
    border-width: 2px;
    border-style: solid;
    transition: all .4s ease 0s;
    border-color: var(--border-color);
    border-radius: 10px;
    transition: all .2s ease 0s;
    background: transparent;
    display: flex;
    align-items: center;

    .icon {
      transition: all .4s ease 0s;
      color: var(--border-color);
    }
  }


  &-insert {
    background: transparent;
    border: 0;
    color: rgba(0, 0, 0, .5);
    outline: none;
    font-size: .8rem;
    font-weight: bold;
    flex: 1;
    // 局部变量
  }

  &-placehloder {
    position: absolute;
    padding: 0 5px;
    background: rgb(255, 255, 255);
    display: inline-block;
    color: rgba(204, 204, 204, .6);
    transition: all .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    transform: translateY(var(--placeholder-diff)) scale(var(--placeholder-scale));
    user-select: none;
  }



  &:hover {
    border-color: dodgerblue;
  }
}
</style>
