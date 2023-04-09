<template >

      <el-container class="con">
        <el-header class="he"> <Headd/></el-header>
        <el-main class="m"> <router-view></router-view></el-main>
      </el-container>

</template>

<script setup lang="ts">
import Headd from "./header.vue"
</script>

<style scoped>

.con {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: auto;
  background-color: #EBF5FF;
  overflow: hidden;
}
.he {
  padding: 0;
  margin: 0;
  width: 100vw;
}
.m {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  padding:0;
  overflow: hidden;
}
@media(max-width: 800px) {
  .home1 {
    height: 76vh;
  }
  .he {
    background-color: #FFFFFF;
  }
}
@media(prefers-color-scheme: dark){
  .he {
    background-color: #121212;
  }
}
</style>
