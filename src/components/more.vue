<template>
  <div class="more">
      <img src="../assets/img/art/morebj.jpg" alt="">
      <img class="wz" src="../assets/img/art/content.png" alt="">
      <img class="yun1" src="../assets/img/art/yun1.png" alt="">
      <img class="yun2" src="../assets/img/art/yun2.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'Main2',
  data () {
    return {
        
    }
  },
  mounted () {
    
  }
}
</script>
<style scoped>
.more img {
    width: 100%;
}
.wz {
    position: absolute;
    top: 3.4rem;
    right: 0;
    margin-right: -.34rem;
    z-index: 999;
}
.yun1 {
    width: 3.48rem!important;
    position: absolute;
    top: 5.4rem;
    left: -3.8rem;
    animation: aaa 8s infinite linear;
}
@keyframes aaa {
    100% {
      left: 8.2rem;
    }
}
.yun2 {
    width: 2.09rem!important;
    position: absolute;
    top: 1.4rem;
    left: 8.8rem;
    animation: bbb 8s infinite linear;
    animation-delay: -2s
}
@keyframes bbb {
    100% {
      left: -2.8rem;
    }
}
</style>