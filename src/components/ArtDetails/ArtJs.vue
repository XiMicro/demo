<template>
    <div class="art-jx">
        <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="title">活动详情</div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/img/art/hdjsl.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/img/art/hdjsl.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/img/art/hdjsl.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="content">
            <h2>“传承中朝友谊，争做友好大使” ——中朝艺术文化交流活动（5日）</h2>
        </div>
        <div class="ck">
            <img v-if="flagzk" src="../../assets/img/art/left.png" alt="">
            <img class="aa" v-if="!flagzk" src="../../assets/img/art/jxzcontent.jpg" alt="">
            <span v-if="flagzk" @click="flagzk=false">展 开<span>></span></span>
            <span v-if="!flagzk" @click="flagzk=true">收 起></span>
        </div>
        <div class="nav">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">精彩瞬间</mt-tab-item>
                <mt-tab-item id="2">活动印象</mt-tab-item>
                <mt-tab-item id="3">活动介绍</mt-tab-item>
            </mt-navbar>
        </div>
        <div class="content">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <img src="../../assets/img/art/main.jpg" alt="" @click="$router.push({ path: '/artgg' })">
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    2
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    3
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js';
import '../../assets/css/swiper.min.css';
export default {
    name: 'ArtZuopin',
    data () {
        return {
           flagzk:true,
           selected: '1'
        }
    },
    mounted () {
        window.scrollTo(0,0);
      var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            }
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
.content h2 {
    margin-top: .24rem;
    font-size: .3rem;
    color: #333333;
    text-align: justify;
    width: auto;
    padding: 0 .3rem;
}
.ck {
    margin: 0 .3rem;
    overflow: hidden;
}
.ck img {
    width: 3.54rem;
    margin-top: .2rem;
    float: left;
    margin-bottom: .32rem;
}
.ck span {
    float: right;
    font-size: .3rem;
    color: #9f9f9f;
    position: absolute;
    top: 5.74rem;
    width: 1.62rem;
    right: 0;
}
.ck span>span {
    transform:rotate(90deg);
    display: inline-block;
    font-size: .3rem;
    position: relative;
    left: .44rem;
    top: -.4rem;
}
.aa {
    width: 7rem!important;
}
.nav {
    height: .9rem;
    box-shadow: 0.02rem .05rem .12rem #ccc!important;
    margin-top: -.08rem;
}
.content {
    margin-top: .4rem;
}
.mint-navbar {
    height: .9rem;
}
.content img {
    width: 7.16rem;
}
</style>




<style>
.art-jx .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    border-radius: 0;
    height: .08rem;
    width: .5rem;
    background: #fff;
    opacity:1;
}
.art-jx .mint-tab-item-label {
    font-size: .28rem;
    width: 1.14rem;
    margin: auto;
    padding-bottom: .08rem;
}
.art-jx .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label {
    border-bottom: .06rem solid #8fc31f;
}
.art-jx .swiper-pagination-bullet-active {
    background: #8fc31f!important;
}
.art-jx .mint-navbar .mint-tab-item.is-selected {
    color: #8fc31f!important;
    border-bottom: 0;
}
</style>
