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
                <div class="swiper-slide"><img src="../../assets/img/art/jxz.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/img/art/jxz.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/img/art/jxz.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="content">
            <h2>“传承中朝友谊，争做友好大使” ——中朝艺术文化交流活动（5日）</h2>
        </div>
        <img src="../../assets/img/art/jxzcontent.jpg" alt="">
        <div class="money" :class="{ff:scrollflag}">
            <img class="a" src="../../assets/img/art/bm.jpg" alt="">
        </div>
        <img class="jz" src="../../assets/img/art/jz.jpg" alt="">
        <div class="titlejz">
            <div class="art-alltitle">
                <img src="../../assets/img/art/hdjs.jpg" alt="">
            </div>
        </div>
        <div class="contentjz">
            <img src="../../assets/img/art/jxcontent.jpg" alt="">
            <img class="jt" v-if="flag" @click="bb" src="../../assets/img/art/more1.png" alt="">
        </div>
        <div class="art-yx">
            <div class="yx-title">
                <span></span>
                <span>印象（2）</span>
            </div>
            <div class="yx-content">
                <img src="../../assets/img/art/yx1.jpg" alt="">
                <div class="yx-content-top">
                    <span>风信子</span>
                    <span>2018-09-18</span>
                    <span>19:00</span>
                    <div>
                        <span>
                            <img src="../../assets/img/art/yxz.jpg" alt="">
                            <span>赞1</span>
                        </span>
                        <span>
                            <img src="../../assets/img/art/yxh.jpg" alt="">
                            <span>回复</span>
                        </span>
                    </div>
                </div>
                <p>不错，值得点赞！</p>
            </div>
            <div class="yx-content hf">
                <img src="../../assets/img/art/yx2.jpg" alt="">
                <div class="yx-content-top">
                    <span>洋水仙</span>
                    <span>2018-09-20</span>
                    <span>15:00</span>
                    <div>
                        <span>
                            <img src="../../assets/img/art/yxz.jpg" alt="">
                            <span>赞1</span>
                        </span>
                        <span>
                            <img src="../../assets/img/art/yxh.jpg" alt="">
                            <span>回复</span>
                        </span>
                    </div>
                </div>
                <p>不错，值得点赞！不错，值得点赞！不错，值得点赞！不错，值得点赞！不错，值得点赞！</p>
            </div>
            <div class="yx-content">
                <img src="../../assets/img/art/yx3.jpg" alt="">
                <div class="yx-content-top">
                    <span>旷野玫瑰花</span>
                    <span>2018-09-19</span>
                    <span>08:26</span>
                    <div>
                        <span>
                            <img src="../../assets/img/art/yxz.jpg" alt="">
                            <span>赞2</span>
                        </span>
                        <span>
                            <img src="../../assets/img/art/yxh.jpg" alt="">
                            <span>回复</span>
                        </span>
                    </div>
                </div>
                <p>不错，值得点赞！</p>
            </div>
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
    name: 'ArtZuopin',
    data () {
        return {
            flaglogo: false,
           selected: '1',
           scrollflag: false,
           flag: true
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
    window.addEventListener('scroll', this.aa)
    },
    watch:{
       
    },
    methods: {
        bb(){
            window.scrollTo(0,2000);
        },
       aa(){
        //    console.log(window.pageYOffset)
            var a = (document.documentElement.scrollHeight||document.body.scrollHeight)-(document.documentElement.clientHeight || document.body.clientHeight)
            if(window.pageYOffset>=375){
                this.scrollflag=true
            }else{
                this.scrollflag=false
            }
            if(window.pageYOffset>=375){
                this.flag=false
            }else {
                this.flag=true
            }
       }
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
.art-jx>img {
    width: 7rem;
    margin-top: .3rem;
}
.money img {
    width: 7rem;
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
.jz {
    width: 2.86rem!important;
    margin-top: 0rem!important;
    float: left;
    margin-left: .3rem;
    z-index: 999;
}
.titlejz {
    margin-top: .9rem;
}
.contentjz {
    margin-bottom: .9rem;
}
.contentjz img {
    width: 7rem;
    margin-top: .16rem;
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
.ff {
    position: fixed;
    top: 0;
    width: 100%;
    padding-top: .2rem;
    background-color: #fff;
}
.jt {
    z-index: 999;
    position: fixed!important;
    width: 1.1rem!important;
    position: relative;
    top: -.2rem;
    top: 10rem;
    left: 50%;
    margin-left: -.55rem;
    animation: sx .7s linear infinite;
}
@keyframes sx {
    100% {
        top: 10.4rem;
    }
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
