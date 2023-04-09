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
  height: 90px;
}
.m {

  padding: 0;
  margin: 0;
    /* display: flex; */
  /* 
  
  flex-direction: column;
  align-items: center; */
  width: 100vw;
  height: auto;
  overflow: hidden;
}
@media(max-width: 800px) {
  .home1 {
    height: 76vh;
  }
}
</style>
