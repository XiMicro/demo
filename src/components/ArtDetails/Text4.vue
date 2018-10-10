<template>
<div class="text4">
    <div class="swiper-container" id="gallery">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                slider1</div>
            <div class="swiper-slide">
                slider2</div>
            <div class="swiper-slide">
                slider3</div>
            <div class="swiper-slide">
                slider4</div>
            <div class="swiper-slide">
                slider5</div>
            <div class="swiper-slide">
                slider6</div>
        </div>
    </div>
    <div class="swiper-container" id="thumbs">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
            <div class="swiper-slide">
                slider1</div>
            <div class="swiper-slide">
                slider2</div>
            <div class="swiper-slide">
                slider3</div>
            <div class="swiper-slide">
                slider4</div>
            <div class="swiper-slide">
                slider5</div>
            <div class="swiper-slide">
                slider6</div>
        </div>
    </div>
</div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js';
import '../../assets/css/swiper.min.css';
export default {
    name: 'Text4',
    data () {
        return {
           
        }
    },
    mounted () {
      
 var thumbsSwiper = new Swiper('#thumbs',{
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,/*避免出现bug*/
})
var gallerySwiper = new Swiper('#gallery',{
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  }
})


    },
    watch:{
       
    },
    methods: {
       
    }
}
</script>
<style>

.text4 .swiper-container-thumbs .swiper-slide {
    width: 60px;
    height: 60px;
}
.text4 .swiper-container-thumbs .swiper-slide img {
    width: 100%;
}
</style>
