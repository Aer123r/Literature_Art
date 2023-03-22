<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth, // 网页可见区域宽
      screenHW: window.orientation, // 判断横竖屏
      isScreen: false // 横竖屏
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 执行自适应代码
          that.bodyScale()
          // 打印screenWidth变化的值
          console.log(that.screenWidth);
          that.timer = false;
        }, 400);
      }
    },
    screenHW () {
      this.rotate()
    }
  },
  methods: {
    // 自适应代码
    bodyScale() {
      var devicewidth = document.documentElement.clientWidth; //获取当前分辨率下的可是区域宽度
      var scale = devicewidth / 1920; // 分母——设计稿的尺寸
      document.body.style.zoom = scale; //放大缩小相应倍数
    },
     // 判断横竖屏
    rotate () {
      if (this.screenHW == 180 || this.screenHW == 0) {
        console.log('竖屏')
        this.isScreen = true
      } else if (this.screenHW == 90 || this.screenHW == -90) {
        console.log('横屏')
        this.isScreen = false
      }
    }
  },
  created() {
    // 执行自适应代码
    this.bodyScale()
  },
  mounted () {
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        // 把横竖屏的变化赋值
        that.screenHW = window.orientation
      })()
    }
  }
};
</script>

<template >
  <div ><router-view></router-view></div>
</template>

<style scoped lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
  
}


</style>
