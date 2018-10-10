<template>
  <div class="main">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/lunbo1.png" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/lunbo2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/lunbo3.png" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/lunbo1.png" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/lunbo2.jpg" alt=""></div> 
        </div>
    </div>
    <div class="main-nav">
      <img @click="$router.push({ path: '/artdetails' })" class="nav-art" src="../assets/img/van1.png" alt="">
      <div>
        <img class="nav-hd" src="../assets/img/nav2.png" alt="">
        <div class="nav-bot"> 
          <img src="../assets/img/nav3.png" alt=""><img src="../assets/img/nav4.png" alt="">
        </div>
      </div>
    </div>
    <div class="main-art">
      <div class="main-art-top">
        <img src="../assets/img/title1.png" alt="">
        <span>更 多></span>
      </div>
      <div class="main-art-bot">
        <ul>
          <li>
            <img src="../assets/img/ys1.jpg" alt="">
            <p>军旅之声合唱团</p>
          </li>
          <li>
            <img src="../assets/img/ys2.jpg" alt="">
            <p>北京夕阳红服饰表演队</p>
          </li>
          <li>
            <img src="../assets/img/ys3.jpg" alt="">
            <p>彩虹艺术团交谊舞队</p>
          </li>
          <li>
            <img src="../assets/img/ys1.jpg" alt="">
            <p>军旅之声合唱团</p>
          </li>
          <li>
            <img src="../assets/img/ys2.jpg" alt="">
            <p>北京夕阳红服饰表演队</p>
          </li>
          <li>
            <img src="../assets/img/ys3.jpg" alt="">
            <p>彩虹艺术团交谊舞队</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-hd">
      <div class="main-art-top">
        <img src="../assets/img/title2.png" alt="">
        <span>更 多></span>
      </div>
      <div class="main-art-bot">
        <ul>
          <li>
            <img src="../assets/img/hd1.jpg" alt="">
          </li>
          <li>
            <img src="../assets/img/hd2.jpg" alt="">
          </li>
          <li>
            <img src="../assets/img/hd3.jpg" alt="">
          </li>
          <li>
            <img src="../assets/img/hd1.jpg" alt="">
          </li>
          <li>
            <img src="../assets/img/hd2.jpg" alt="">
          </li>
          <li>
            <img src="../assets/img/hd3.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="main-cd">
      <div class="main-art-top">
        <img src="../assets/img/title4.png" alt="">
        <span>更 多></span>
      </div>
      <div class="main-art-bot">
        <ul>
          <li>
            <img src="../assets/img/cd1.jpg" alt="">
            <p>通州文化馆<span class="dw"><span><img src="../assets/img/dw.jpg" alt="">通州区</span></span></p>
            <div>
              <span>排练/演出</span>
              <span>500-1000人</span>
            </div>
          </li>
          <li>
            <img src="../assets/img/cd2.jpg" alt="">
            <p>纳兰园<span class="dw"><span><img src="../assets/img/dw.jpg" alt="">海淀区</span></span></p>
            <div>
              <span>聚会/团建</span>
              <span>&lt;500人</span>
            </div>
          </li>
          <li>
            <img src="../assets/img/cd3.jpg" alt="">
            <p>海航·和悦家-京西长者文..<span class="dw"><span><img src="../assets/img/dw.jpg" alt="">朝阳区</span></span></p>
            <div>
              <span>排练/演出</span>
              <span>&lt;20人</span>
            </div>
          </li>
          <li>
            <img src="../assets/img/cd4.jpg" alt="">
            <p>久久泰和养老驿站左..<span class="dw"><span><img src="../assets/img/dw.jpg" alt="">石景山区</span></span></p>
            <div>
              <span>排练/演出</span>
              <span>50-100人</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-new">
      <div class="main-art-top">
        <img src="../assets/img/title3.png" alt="">
        <span>更 多></span>
      </div>
      <div class="main-new-bot">
        <div class="main-new-con">
          <p>现金大奖花落谁家，我们一同见分晓丨赞美新时代 颂歌献给党</p>
          <div>
            <img src="../assets/img/new1.jpg" alt="">
            <img src="../assets/img/new2.jpg" alt="">
            <img src="../assets/img/new3.jpg" alt="">
          </div>
          <span>2018-7-10</span>
        </div>
        <div class="main-new-con">
          <p>有哎公益送“新鲜”，文艺演出进社区</p>
          <span>2018-8-28</span>
        </div>
        <div class="main-new-con">
          <p>中朝友谊花盛开丨记首届“有哎·中朝友谊交流活动”（一）</p>
          <span>2018-8-8</span>
        </div>
        <div class="main-new-con">
          <p>《赞美新时代 颂歌献给党》-首届中国（北京）优秀中老年合唱团展演圆满举办</p>
          <span>2018-7-3</span>
        </div>
        <div class="main-new-con">
          <p>《赞美新时代 颂歌献给党》丨“有哎”与北京合唱协会达成合作</p>
          <span>2018-6-20</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../static/swiper.min.js';
import '../assets/css/swiper.min.css';
export default {
  name: 'Main',
  data () {
    return {
        
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      autoplay:true,
      loop: true,
      slidesPerView : 3,
      slideNextClass  : 'swiperactive',
      slideDuplicatedActiveClass : 'swiperactive',
      // slidesOffsetBefore : -40
    })
  }
}
</script>
<style scoped>
.main {
  overflow: hidden;
}
.swiper-container {
    width: 100%;
    height: 3rem;
    padding-top: .6rem;
    overflow: inherit;
    padding-bottom: .8rem;
    perspective:150;
}
.swiper-container img {
    height: 100%;
    box-shadow: 0 .02rem .16rem;
}
.swiperactive {
    animation: aaa .6s forwards;
}
@keyframes aaa {
		0% {
      left: -1.5rem;
		}
		100% {
      transform: scale(1.2);
      z-index: 9999;
      left: -1.5rem;
		}
}
.main-nav {
  width: 6.9rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  margin-left: -3.45rem;
}
.nav-art {
  height: 3rem;
  width: 2.7rem!important;
  margin-right: .1rem ;
}
.nav-hd {
  width: 4.1rem;
  height: 1.45rem;   
}
.nav-bot img {
  width: 2rem;
  height: 1.45rem;
  float: left;
}
.nav-bot img:first-child {
  margin-right: .1rem;
}
.main-nav>img,.main-nav>div {
  float: left;
  display: inline-block;
  width: 4.1rem;
}
.main-nav>div {
  float: right;
}
.main-art {
  margin-top: 3.6rem;
  padding-left: .3rem;
  overflow-x: scroll;
}
.main-art-top img {
  height: .5rem;
  float: left;
  margin-bottom: .3rem;
}
.main-art-top span {
  float: right;
  font-size: .3rem;
  color: #9f9f9f;
  padding-top: .02rem;
  padding-right: .3rem;
  font-family: 'Microsoft YaHei';
}
.main-art-bot {
  width: 100%;
  overflow-x: scroll;
  padding-bottom: .5rem;
}
.main-art-bot ul {
  width: 17.6rem;
  overflow: hidden;
}
.main-art-bot li {
  float: left;
  margin-right: .2rem;
}
.main-art-bot img {
  width: 2.7rem;
  height: 1.85rem;
}
.main-art-bot p {
  width: 2.7rem;
  text-align: justify;
  font-size: .34rem;
  color: #474747;
  font-family: 'Microsoft YaHei';
}
.main-hd {
  margin: 0;
  padding-left: .3rem;
  overflow-x: scroll;
}
.main-new .main-art-top {
  overflow: hidden;
}
.main-new .main-art-top span {
  margin-right: .3rem;
  font-family: 'Microsoft YaHei';
}
.main-new {
  width: 100%;
  padding-left: .3rem;
  overflow: hidden;
  text-align: left;
  margin-bottom: .8rem;
}
.main-new-con {
  overflow: hidden;
  margin-top: .28rem;
  padding-right: .6rem;
}
.main-new-con:first-child {
  margin-top: 0;
}
.main-new-con span {
  display: block;
  font-size: .22rem;
  color: #9f9f9f;
  font-family: 'Microsoft YaHei';
  width: 6.9rem;
  border-bottom: .02rem solid #f4f4f4;
  padding-bottom: .22rem;
}
.main-new-con>div {
  overflow: hidden;
  margin-bottom: .12rem;
  margin-top: .2rem;
}
.main-new-con p {
  font-size: .34rem;
  text-align: justify;
  color: #474747;
  margin-bottom: .08rem;
  font-family: 'Microsoft YaHei';
}
.main-new-con img {
  width: 2.23rem;
  height: 1.5rem;
  float: left;
  margin-right: .1rem;
}
.main-new-con img:last-child {
  margin: 0;
}
.main-cd {
  padding-left: .3rem;
}
.main-cd .main-art-bot p img {
  height: .22rem;
  width: .17rem;
}
.main-cd .main-art-bot li>p {
  position: relative;
  height: 1rem;
  width: 2.5rem;
  font-size: .34rem;
  margin-bottom: .08rem;
}
.main-cd .main-art-bot li>div {
  width: 2.7rem;
}
.main-cd .main-art-bot p>span {
  position: absolute;
  bottom: .04rem;
  right: 0;
  font-size: .20rem;
}
.main-cd .main-art-bot .dw img {
  position: relative;
  top: .02rem;
  margin-right: .02rem;
}
.main-cd .main-art-bot .dw>span {
  line-height: .4rem;
}
.main-cd .main-art-bot ul {
  width: 11.8rem;
}
.main-cd .main-art-bot li>div span {
  font-size: .18rem;
  display: inline-block;
  height: .28rem;
  line-height: .31rem;
  padding: .02rem .04rem .01rem .04rem;
  float: left;
  margin-right: .06rem;
  margin-bottom: .06rem;   
}
.main-cd .main-art-bot li>div span:first-child {
  background-color: #f3fae3;
  color: #8fc31f;
  border: .02rem solid #8fc31f;
}
.main-cd .main-art-bot li>div span:nth-child(2) {
  background-color: #eef9ff;
  color: #42a1d2;
  border: .02rem solid #42a1d2;
}
.main-cd .main-art-bot li>div span:nth-child(3) {
  background-color: #fff9ef;
  color: #ee7800;
  border: .02rem solid #ee7800;
}

</style>

