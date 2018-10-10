<template>
<div class="b">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb1.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb2.jpg" alt=""></div></div>
            <div class="swiper-slide"><div class="a"><img src="../assets/img/pb3.jpg" alt=""></div></div>
        </div>
    </div>
</div>
</template>
<script>
import Swiper from '../../static/swiper.min.js';
import '../assets/css/swiper.min.css';
export default {
    name: 'News',
    data () {
        return {
            
        }
    },
    mounted () {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView : 8,
            slidesPerGroup : 8,
            spaceBetween : -15,
            // loop: true,
            // loopFillGroupWithBlank: true,
            watchSlidesProgress : true,
            watchSlidesVisibility : true,
            slideVisibleClass : 'aaaaaaa',
            // slideActiveClass : 'swiper-slide-active',
        })
    }
}
</script>
<style scoped>
    .b {
        width: auto;
        padding: 0 .3rem;
        overflow: hidden;
    }
    .swiper-container img {
        width: 100%;
    }
    .swiper-slide {
        /* visibility:hidden */
        transition: all 2s;
    }
    /* .aaaaaaa {
        margin-left: -10px;
    } */
    .aaaaaaa:nth-child(9) {
        /* visibility:visible */
        /* padding-left: 31px; */
    }
    .a {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: .02rem solid #000;
        overflow: hidden;
    }
</style>
