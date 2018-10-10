<template>
    <div class="zpdetails">
        <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="fx">
                <img src="../../assets/img/art2/fx1.png" alt="">
                分享
            </div>
        </div> 
        <div class="content">
            <div class="swiper-container swa" id="a">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry1.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry1.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry1.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry1.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry1.jpg" alt=""></div>
                </div>
            </div>
            <div class="art-zan">
                <img src="../../assets/img/art/zan.jpg" @click="oneflag=false" @touchend="oneflag=true" alt="">
                <div class="jone ss" v-if="!oneflag">+1</div>
                <span>868</span>
            </div>
            <img class="leftj" src="../../assets/img/art2/left.png" alt="" id="left">
            <div class="swiper-container swb" id="b">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry2.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry2.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry2.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry2.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/art2/ry2.jpg" alt=""></div>
                </div>
            </div>
            <img class="rightj" src="../../assets/img/art2/right.png" alt="" id="right">
        </div>
        
        <div class="art-yx">
            <div class="yx-title">
                <span></span>
                <span>印象（0）</span>
            </div>
            <img src="../../assets/img/art/sf.png" alt="">
        </div>
        <div class="art-pl">
            <div class="line"></div>
            <div class="pl">
                <input type="text">
                <div>
                    <img src="../../assets/img/art/logo1.jpg" alt="">
                    <img src="../../assets/img/art/logo2.jpg" alt="">
                    <img src="../../assets/img/art/logo3.jpg" alt="">
                    <img v-if="flaglogo" @click="flaglogo=false" src="../../assets/img/art/logo4.jpg" alt="">
                    <img v-if="!flaglogo" @click="flaglogo=true" src="../../assets/img/art/logo5.jpg" alt="">
                    <span class="c">5</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js';
import '../../assets/css/swiper.min.css';
export default {
    name: 'Artgg2',
    data () {
        return {
            flaglogo: false,
            oneflag: true
        }
    },
    mounted () {
    window.scrollTo(0,0);
    var galleryThumbs = new Swiper('.swb', {
      spaceBetween: 5,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.swa', {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs,
        slideThumbActiveClass: 'abc'
      }
    });
    var that=this
        setTimeout(function(){
            document.getElementById('left').click(function(){
                console.log(11)
                galleryThumbs.slidePrev()
            })
            document.getElementById('right').click(function(){
                console.log(11)
                galleryThumbs.slideNext()
            })
        },500)
    
    // document.getElementById('#left').addEventListener('click', galleryThumbs.slidePrev())
    // document.getElementById('#right').addEventListener('click', galleryThumbs.slideNext())
    },
    watch:{
       
    },
    methods: {  
        
    }
}
</script>
<style scoped>
.bb {
    width: 305px;
    height: 214px;
}
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
.fy {
    font-size: .26rem;
    color: #fff;
    
}
.fy img {
    width: .26rem;
    height: .21rem;
    display: inline-block;
    margin-left: .3rem;
    margin-right: .1rem;
}
.fx {
    position: absolute;
    right: .3rem;
    top: 50%;
    margin-top: -.18rem;
}
.fx img {
    width: .26rem;
    height: .26rem;
}
.title {
    font-size: .32rem;
    color: #fff;
    position: relative;
    top: .28rem;
}
.content {
    width: 7rem;
    position: absolute;
    left: 50%;
    margin-left: -3.5rem;
    margin-top: .5rem;
}
li {
    font-size: .22rem;
    color: #9f9f9f;
    float: left;
    margin-bottom: .25rem;
}
li span {
    margin-left: .12rem;
}
li:nth-child(2),li:nth-child(3) {
    float: right;
}
li:nth-child(2) {
    margin-left: .7rem;
}
li img {
    position: relative;
    top: .04rem;
}
li:first-child img {
    width: .26rem;
}
li:nth-child(2) img {
    width: .32rem;
}
li:nth-child(3) img {
    width: .22rem;
}
.yy {
    margin-bottom: .4rem;
    margin-top: .2rem;
    background-color: #f7f7f7;
    height: 1.1rem;
    padding-top: .18rem;
}
.yy img:first-child {
    width: 3.1rem;
    float: left;
    margin-left: .2rem;
    margin-top: .1rem;
}
.yy img:last-child {
    width: .4rem;
    float: right;
    margin-right: .2rem;
    margin-top: .2rem;
}
.art-zan {
    width: 100%;
    height: 2.1rem;
    position: relative;
    margin-bottom: -.4rem;
}
.art-zan img {
    width: .88rem;
    height: 1.26rem;
    position: absolute;
    left: 50%;
    margin-left: -.44rem;
    top: .5rem;
}
.art-zan span {
    position: absolute;
    top: 1.14rem;
    left: 50%;
    margin-left: -.21rem;
    color: #9f9f9f;
    font-size: .26rem;
}
.yx-title {
    overflow: hidden;
}
.yx-title span {
    margin-top: .3rem;
    display: inline-block;
    float: left;
    color: #474747;
    font-size: .3rem;
}
.yx-title span:first-child {
    width: .1rem;
    height: .3rem;
    margin-left: .3rem;
    margin-right: .15rem;
    margin-top: .35rem;
    background-color: #8fc31f; 
}
.yx-content {
    padding-top: .2rem;
}
.yx-content img {
    height: .6rem;
    width: .6rem;
    margin-left: .3rem;
    margin-right: .18rem;
}
.yx-content img,.yx-content span {
    float: left;
}
.yx-content-top img {
    height: .24rem;
    width: .24rem;
}
.yx-content span {
    font-size: .22rem;
    margin-top: .02rem;
    color: #9f9f9f;
    margin-right: .15rem;
}
.yx-content span:first-child {
    color: #474747;
    margin-right: .09rem;
}
.yx-content-top {
    overflow: hidden;
}
.yx-content-top>div {
    float: right;
    padding-right: .3rem;
}
.yx-content-top>div span {
    color: #474747;
    font-size: .24rem;
    margin: 0;
}
.yx-content-top>div img {
    margin-right: .09rem;
}
.yx-content-top>div span:first-child img {
    margin-top: .02rem;
}
.yx-content-top>div span:last-child img {
    margin-top: .04rem;
}
.yx-content p {
    color: #474747;
    font-size: .26rem;
    text-align: left;
    padding-top: .15rem;
}
.art-yx {
    margin-top: 9rem;
}
.art-yx>img {
    width: 1.62rem;
    margin-top: .55rem;
    margin-bottom: .8rem;
}
.hf {
    width: 6.1rem;
    height: 1.8rem;
    background-color: #f7f7f7;
    margin-left: 1rem;
    padding-top: .18rem;
}
.hf .yx-content-top>div {
    position: relative;
    bottom: .32rem;
}
.hf p {
    position: relative;
    left: 1.04rem;
    bottom: .32rem;
    width: 4.76rem;
    text-align: justify;
}
.art-pl {
    height: 1.5rem;
}
.art-pl .line {
    width: 6.9rem;
    height: .02rem;
    background-color: #f4f4f4;
    position: absolute;
    left: 50%;
    margin-left: -3.45rem;
    margin-top: .3rem;
    margin-bottom: .3rem;
}
.pl {
    padding-top: .64rem;
}
.pl input {
    width: 4rem;
    height: .5rem;
    border: .02rem solid #ededed;
    float: left;
    margin-left: .3rem;
}
.pl img {
    width: .4rem;
    height: .4rem;
    margin-left: .2rem;
}
.pl>div {
    float: right;
    padding-right: .3rem;
    padding-top: .06rem;
}
.pl .c {
    display: block;
    width: .34rem;
    height: .34rem;
    background-color: #ff5000;
    border-radius: 50%;
    position: relative;
    border: .02rem solid #fff;
    bottom: .64rem;
    left: 1.08rem;
    line-height: .34rem;
    font-size: .15rem;
    color: #fff;
}
.ygz {
    background-color: #ccc;
}
.swiper-art {
    height: .34rem;
    overflow: hidden;
    position: relative;
    top: .35rem;
    text-align: left;
    padding-left: 1.26rem;
}

.ss {
animation: nav 1.2s linear 1 forwards;
}
@keyframes nav {
    0% {
        opacity:1
    }
    100% {
        top: 0;
        opacity:0
    }
}
.jone {
    position: relative;
    top: .4rem;
    left: .4rem;
    color: #8fc31f;
    font-size: .36rem;
}
.swiper-slide img {
    width: 100%;
}
.swiper-container {
    width: 6.1rem;
}
.swb {
    width: 5.5rem;
    padding-top: .08rem!important;
}
.swb .swiper-slide {
    height: .94rem;
}
.swb img {
    width: 90%;
    margin-top: .06rem;
}
.abc {
    background-color: #8fc31f;
}
.content>img {
    width: .29rem;
}
.leftj {
    position: relative;
    top: .84rem;
    right: 3rem;
}
.rightj {
    position: relative;
    bottom: .72rem;
    left: 3rem;
}
</style>
