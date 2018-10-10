<template>
<div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                </div>
            </div>
            <div class="swiper-slide">
                <div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                </div>
            </div>
            <div class="swiper-slide">
                <div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                </div>
            </div>
            <div class="swiper-slide">
                <div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb3.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb1.jpg" alt=""></div>
                    <div class="a"><img src="../../assets/img/pb2.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js';
import '../../assets/css/swiper.min.css';
export default {
    name: 'Text1',
    data () {
        return {
            
        }
    },
    mounted () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            // effect : 'cube',
            // cubeEffect: {
            //     slideShadows: true,
            //     shadow: true,
            //     shadowOffset: 100,
            //     shadowScale: 0.6
            // }
        })
    }
    
}
</script>
<style scoped>
.swiper-slide {
    width: 100%;
}
.swiper-slide>div {
    width: 6.9rem;
    padding-left: .3rem;
}
.a {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-left: -.14rem;
}
img {
    width: 100%;
}
</style>
