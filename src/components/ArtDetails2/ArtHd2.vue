<template>
    <div class="art-zuopin twocontent">
        <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="title">活动列表</div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/img/art/hdlb.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/img/art/hdlb.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/img/art/hdlb.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="nav">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">有哎官方</mt-tab-item>
                <mt-tab-item id="2">团内活动</mt-tab-item>
            </mt-navbar>
        </div>
        <div class="content">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="one">
                        <div class="one-art two">
                            <div class="art-alltitle">
                                <img src="../../assets/img/art2/1.png" alt="">
                                <span>更 多></span>
                            </div>
                            <div class="one-content">
                                <img @click="$router.push({ path: '/artjx2' })" src="../../assets/img/art2/hd2jx.jpg" alt="">
                                <img src="../../assets/img/art2/hd2jx.jpg" alt="">
                            </div>
                        </div>
                        <div class="one-art">
                            <div class="art-alltitle">
                                <img src="../../assets/img/art/hdtitle.png" alt="">
                                <span>更 多></span>
                            </div>
                            <div class="one-content">
                                <img @click="$router.push({ path: '/artjs' })" src="../../assets/img/art2/hd2js.jpg" alt="">
                                <img src="../../assets/img/art2/hd2js1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                   <div class="one">
                        <div class="one-art two">
                            <div class="art-alltitle">
                                <img src="../../assets/img/art2/1.png" alt="">
                                <span>更 多></span>
                            </div>
                            <div class="one-content">
                                <img @click="$router.push({ path: '/artjx2' })" src="../../assets/img/art2/hd2jx.jpg" alt="">
                                <img src="../../assets/img/art2/hd2jx.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js';
import '../../assets/css/swiper.min.css';
export default {
    name: 'ArtHd2',
    data () {
        return {
           selected: '1'
        }
    },
    mounted () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            }
        })
        var mSwiper = new Swiper('.swiper-containe', {
            autoplay: false,//可选选项，自动滑动
            slidesPerView : 2,
            slideActiveClass : 'swipernow',
            spaceBetween : 20
        })
    },
    watch:{
       
    },
    methods: {
       
    }
}
</script>
<style scoped>
.fy {
    position: relative;
    width: 100%;
    height: 1.11rem;
    background-image: url(../../assets/img/art/bjrc.png);
    background-repeat: round;
}
.art-ff span {
    z-index: 999;
    position: absolute;
    top: 50%;
    margin-top: -.2rem;
    left: 0;
    font-size: .26rem;
    color: #fff;
}
.art-ff img {
    width: .26rem;
    height: .21rem;
    display: inline-block;
    margin-left: .3rem;
    margin-right: .1rem;
}
.title {
    font-size: .32rem;
    color: #fff;
    position: relative;
    top: .28rem;
}
.swiper-container {
    margin-top: -.1rem;
}
.swiper-container img {
    width: 100%;
}
.mint-navbar {
    height: .9rem;
}
.nav {
    height: .9rem;
    box-shadow: 0 .05rem .12rem #ccc!important;
    margin-top: -.06rem;
}
.content {
    margin-top: .4rem;
}
.swiper-containe {
    padding-left: .3rem;
}
.one .swiper-slide {
    margin-top: .35rem;
    width: 3.4rem;
    height: 4.9rem;
    box-shadow: 0 .04rem .02rem #ccc!important;
    border: 1px solid #ccc;
    text-align: left;
    overflow: hidden;
}
.one .swiper-slide img {
    width: 128%;
}
.one .swiper-slide:nth-child(2)>img {
    width: 100%;
    height: 4.08rem;
}
.one .swiper-slide p {
    font-size: .26rem;
    padding: .1rem;
    text-align: justify;
}
.one .swiper-slide span {
    font-size: .22rem;
    color: #9f9f9f;
    padding-left: .15rem;
}
.one .swiper-slide span img {
    width: .21rem;
    position: relative;
    top: .05rem;
    margin-right: .1rem;
}
.swipernow {
    margin-top: 0!important;
    height: 5.9rem!important;
    width: 4.1rem!important;
}
.swipernow p {
    font-size: .3rem!important;
    padding: .15rem!important;
}
.swipernow span {
    font-size: .26rem!important;
    
}
.swipernow span img {
    width: .23rem!important;
    position: relative;
    top: .05rem;
    margin-right: .1rem;
}
.art-alltitle {
    overflow: hidden;
    margin-bottom: .2rem;
}
.art-alltitle img {
    height: .6rem;
    float: left;
}
.art-alltitle>span {
    float: right;
    font-size: .3rem;
    color: #9f9f9f;
    position: relative;
    top: .08rem;
    right: .3rem;
}
.art-alltitle>span span {
    transform:rotate(90deg);
    display: inline-block;
    font-size: .3rem;
}
.one-art {
    margin-top: .5rem;
}
.one-content {
    overflow: hidden;
    margin: auto;
    width: 7.2rem;
    margin-bottom: .5rem;
}
.one-content img {
    width: 3.56rem;
    float: left;
}
.two {
    margin-top: 0;
}
</style>




<style>
.art-zuopin .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    border-radius: 0;
    height: .08rem;
    width: .5rem;
    background: #fff;
    opacity:1;
}
.art-zuopin .mint-tab-item-label {
    font-size: .28rem;
    width: 1.14rem;
    margin: auto;
    padding-bottom: .08rem;
}
.art-zuopin .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label {
    border-bottom: .06rem solid #8fc31f;
}
.art-zuopin .swiper-pagination-bullet-active {
    background: #8fc31f!important;
}
.art-zuopin .mint-navbar .mint-tab-item.is-selected {
    color: #8fc31f!important;
    border-bottom: 0;
}
</style>

