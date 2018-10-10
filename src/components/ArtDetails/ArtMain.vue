<template>
    <div class="art-mian">
        <router-view></router-view>
         <transition name="bounce">
            <div class="art_nav" v-if="navxxflag"></div>
        </transition>
        <div class="art_nav ss" @click="showcircle" v-if="navflag"></div>
        <div class="art_nav" @click="showcircle" v-if="navflag">有哎导航</div>
        <!-- <div class="art_navx" v-if="!navxflag">
            <div>
                <span class="iconfont icon-close close" @click="hidecircle"></span>
                <span class="iconfont icon-iccollection one"></span>
                <span class="iconfont icon-iccollection two"></span>
                <span class="iconfont icon-iccollection three"></span>
                <span class="iconfont icon-iccollection four"></span>
                <span class="iconfont icon-iccollection five"></span>
                <span class="iconfont icon-iccollection six"></span>
            </div>
        </div> -->
        <div class="circle" :class="{open:!navxflag}" v-if="!navflag">
            <div class="ring">
                <span class="menuItem w" style="left:50%;top:13%" @click="$router.push({ path: '/artlc' })">
                    <img src="../../assets/img/art/lc6.png" alt="">
                    <div>里程碑</div>
                </span>
                <span class="menuItem b" style="left:80.3109%;top:30.5%" @click="$router.push({ path: '/artryq' })">
                    <img src="../../assets/img/art/lc5.png" alt="">
                    <div>荣誉</div>
                </span>
                <span class="menuItem c" style="left:80.3109%;top:65.5%">
                    <img src="../../assets/img/art/lc4.png" alt="">
                    <div>成员</div>
                </span>
                <span class="menuItem d" style="left:50%;top:83%">
                    <img src="../../assets/img/art/lc3.png" alt="">
                    <div>简介</div>
                </span>
                <span class="menuItem e" style="left:19.6891%;top:65.5%" @click="$router.push({ path: '/zpDetails' })">
                    <img src="../../assets/img/art/lc2.png" alt="">
                    <div>作品</div>
                </span>
                <span class="menuItem f" style="left:19.6891%;top:30.5%" @click="$router.push({ path: '/artgg' })">
                    <img src="../../assets/img/art/cl1.png" alt="">
                    <div>日常</div>
                </span>
            </div>
            <div class="ringw" v-if="!navxflag"></div>
            <span class="center" @click="bb" v-if="!navxflag">
                <img src="../../assets/img/art/close.png" alt="">
            </span>
        </div>
        <div class="background" v-if="!navxflag"></div>
    </div>
</template>
<script>
export default {
    name: 'ArtMain',
    data () {
        return {
            activeFlag: false,
            navflag: true,
            navxflag: true,
            navxxflag: true,
            scrollflag: false,
        }
    },
    mounted () {
    window.scrollTo(0,0);
    },
    watch:{
       
    },
    methods: {
        bb(){
         document.body.removeAttribute("class","add_bg") 
        //圆盘导航收回
        this.navxxflag=!this.navxxflag
        this.navxflag=!this.navxflag
        var that=this
        setTimeout(function(){
            that.navflag=!that.navflag
        },300)
      },
      showcircle(){
        //圆盘导航显示
        document.getElementsByTagName("body")[0].className="add_bg";
        this.navflag=!this.navflag
        this.navxxflag=!this.navxxflag
        if(this.navflag==false){
            var that=this
            setTimeout(function(){
            that.navxflag=!that.navxflag
            },300)
        }
    },
    }
}
</script>
<style scoped>
.art_nav {
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    font-size: .3rem;
    padding: .08rem;
    background-color: #9dd22c;
    border: .08rem solid #8fc31f;
    color: #fff;
    position: fixed;
    top: 80%;
    left: .08rem;
    z-index: 999;  
}
.ss {
    animation: nav 1.2s linear infinite;
}
@keyframes nav {
    0% {
        transform:scale(1);
        opacity:1
    }
    50% {
        transform:scale(1.1);
        opacity:.8
    }
    98% {
        transform:scale(1.3);
        opacity:.2
    }
    100% {
        opacity:0
    }
}
.art_details .art_navx {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 50%;
    margin-left: -50%;
    background-color: yellowgreen;
}
.art_details .art_navx>div {
    width: 4rem;
    height: 4rem;
    border: .02rem solid #333;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2rem;
    margin-top: -2rem;
}
.bounce-enter-active {
    animation: bounce-in .3s;
}
.bounce-leave-active {
    animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
    0% {
        height: 1.6rem;
        width: 1.6rem;
        top: 43%;
        left: 50%;
        margin-left: -.8rem;
        border: .02rem solid #333;
    }
    100% {
        height: .86rem;
        width: .86rem;
        top: 80%;
        left: .08rem;
        border: .02rem solid #fff;
    }
}
.art_details .art_navx .iconfont {
    font-size: .6rem;
    position: relative;
    color: green;
}
.art_details .art_navx .close {
    font-size: .4rem;
    top: 1.66rem;
    left: 1.7rem;
    color: #000;
}
.art_details .art_navx .one {
    bottom: .44rem;
    left: 1.12rem;
}
.art_details .art_navx .two {
    right: 1.16rem;
    top: .38rem;
}
.art_details .art_navx .three {
    right: 1.84rem;
    top: 2.7rem;
}
.art_details .art_navx .four {
    top: 3.6rem;
    right: .88rem;
}
.art_details .art_navx .five {
    top: 2.69rem;
    left: .08rem;
}
.art_details .art_navx .six {
    left: 1.6rem;
    bottom: .46rem;
}
.a {
    width: .2rem;
    height: .2rem!important;
    border-radius: 50%;
    background-color: yellowgreen;
    position: relative;
    top: -1.16rem;
    left: 2.52rem;
    animation: dd 1.2s linear infinite;
}
@keyframes dd {
    0% {
        transform:scale(1);
        opacity:1
    }
    50% {
        transform:scale(1.6);
        opacity:.8
    }
    98% {
        transform:scale(2.2);
        opacity:.3
    }
    100% {
        opacity:0
    }
}
.circle,.ring {
    height:5.12rem;
    position:relative;
    width:5.12rem;
}
.circle {
    position: fixed;
    top: 33%;
    left: 50%;
    margin-left: -2.56rem;
    border: 0!important;
    z-index: 9999;
}
.ringw {
    width: 4rem;
    height: 4rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: 50%;
    position: absolute;
    top: .6rem;
    opacity: 0.5;
    left: .56rem;
    z-index: -1;
}
.ring {
    background-color:rgba(0,0,0,0.5);
    border-radius:50%;
    opacity:0;
    -webkit-transform-origin:50% 50%;
    -moz-transform-origin:50% 50%;
    transform-origin:50% 50%;
    -webkit-transform:scale(0.1) rotate(-270deg);
    -moz-transform:scale(0.1) rotate(-270deg);
    -transform:scale(0.1) rotate(-270deg);
    -webkit-transition:all 0.4s ease-out;
    -moz-transition:all 0.4s ease-out;
    transition:all 0.4s ease-out;
}
.ring img {
    width: .8rem;
    height: .8rem;
}
.ring .f img {
    position: relative;
    top: .16rem;
    left: .14rem;
}
.ring .f div {
    padding-left: .1rem;
}
.ring .w img {
    position: relative;
    top: .12rem;
}
.ring .b img {
    position: relative;
    top: .16rem;
    right: .14rem;
}
.ring .b div {
    margin-left: -.06rem;
}
.ring .e img {
    position: relative;
    left: .14rem;
}
.ring .e div {
    padding-left: .16rem;
    margin-top: -.16rem;
}
.ring .c img {
    position: relative;
    right: .14rem;
}
.ring .c div {
    margin-left: -.08rem;
    margin-top: -.16rem;
}
.ring .d div {
    margin-top: -.18rem;
}
.open .ring {
    opacity:1;
    -webkit-transform:scale(1.2) rotate(0);
    -moz-transform:scale(1.2) rotate(0);
    -transform:scale(1.2) rotate(0);
}
.center {
    background-color:yellowgreen;
    border-radius:50%;
    border:.04rem solid #ffffff;
    bottom:0;
    color:white;
    height:1.6rem;
    left:0;
    line-height:1.6rem;
    margin:auto;
    position:absolute;
    right:0;
    text-align:center;
    top:0;
    width:1.6rem;
    -webkit-transition:all 0.4s ease-out;
    -moz-transition:all 0.4s ease-out;
    transition:all 0.4s ease-out;
}
.center img {
    height: 100%;
}
.open .center {
    border-color:#aaaaaa;
}
.menuItem {
    border-radius:50%;
    color:#eeeeee;
    display:block;
    height:.8rem;
    line-height:.8rem;
    margin-left:-.4rem;
    margin-top:-.4rem;
    position:absolute;
    text-align:center;
    width:.8rem;
    font-size: .4rem;
}
.menuItem div {
    font-size: 12px;
    height: 14px;
    width: 40px;
    line-height: 14px;  
}
.background {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: block;
    position: fixed;
    top: 0;
    z-index: 8;
}
</style>