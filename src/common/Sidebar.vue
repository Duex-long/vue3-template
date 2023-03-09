<template>
  <div class="SideNav">
    <div class="SideNav-item" >
      <RouterLink to="/">
        <HomeOutlined />
      </RouterLink>
    </div>
    <div class="SideNav-item" >
      <RouterLink to="/login">
        <SendOutlined />
      </RouterLink>
    </div>
    <div class="SideNav-item">
      <SendOutlined />
    </div>
    <div class="SideNav-item">
      <SendOutlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon, {SendOutlined ,HomeOutlined} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navLink = (path:string) => {
	router.push(path)
}

</script>

<style scoped lang="less">
.SideNav {

  --primary-color:#606cd5;
  height: 100%;
  box-sizing: border-box;
  background: #606cd5;
  // width: 2%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &-item {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    // background-color: yellow;
    margin: 10px 0;
    text-align: center;
    line-height: 45px;
    font-size: 20px;
    color: #fff;
    transition: background .2s;
    font-weight: bolder;
    :nth-child(1){
      margin: 0;
    }
    cursor: pointer;
    &:hover {
      background-color: #fff;
      a{
        color: var(--primary-color);
      }
    }
  }
}
</style>
