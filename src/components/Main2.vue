<template>
  <div class="main2">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/img/art2/lb1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/img/art2/lb1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/img/art2/lb1.jpg" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="content">
      <ul class="left">
        <li class="top"><img src="../assets/img/art2/mk1.jpg" @click="$router.push({ path: '/artdetails2' })" alt=""></li>
        <li><img src="../assets/img/art2/mk3.jpg" alt=""></li>
      </ul>
      <ul class="right">
        <li class="top"><img src="../assets/img/art2/mk2.jpg" alt=""></li>
        <li><img src="../assets/img/art2/mk4.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from '../../static/swiper.min.js';
import '../assets/css/swiper.min.css';
export default {
  name: 'Main2',
  data () {
    return {
        
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>
<style scoped>
.swiper-container {
  width: 6.99rem;
  margin-top: .2rem;
  margin-bottom: .3rem ;
}
.swiper-slide {
  width: 6.99rem;
}
.swiper-container img {
  width: 100%;
}
.content img {
  width: 3.3rem;
}
.left {
    float: left;
    margin-left: .3rem;
}
.right {
    float: right;
    margin-right: .3rem;
}
.top {
  margin-bottom: .28rem;
}

</style>
<style>
.main2 .swiper-pagination-bullet {
  border-radius: 0;
  height: .08rem;
  width: .5rem;
  background: #fff;
  opacity:1;
}
.main2 .swiper-pagination-bullet-active {
  background-color: #8fc31f!important;;
}
.main2 .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label {
    border-bottom: .06rem solid #8fc31f;
}
</style>

