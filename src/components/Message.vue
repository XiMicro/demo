<template>
  <div class="message">
    信息页
    <!-- <div class="circle" :class="{open:flag}">
      <div class="ring">
        <span class="iconfont icon-homepage menuItem" style="left:50%;top:15%"></span>
        <span class="iconfont icon-homepage menuItem" style="left:80.3109%;top:32.5%"></span>
        <span class="iconfont icon-homepage menuItem" style="left:80.3109%;top:67.5%"></span>
        <span class="iconfont icon-homepage menuItem" style="left:50%;top:85%"></span>
        <span class="iconfont icon-homepage menuItem" style="left:19.6891%;top:67.5%"></span>
        <span class="iconfont icon-homepage menuItem" style="left:19.6891%;top:32.5%"></span>
      </div>
      <a href="#" class="center fa fa-th fa-2x" @click="bb"></a>
    </div> -->




    <figure class='book' @click="flag=!flag" :class="{gg:flag}">

      <!-- Front -->

      <ul class='paperback_front' :class="{a:flag}">
        <li>
          <span class="ribbon">Nº1</span>
          <img src="img/bg.jpg" alt="" width="100%" height="100%">
        </li>
        <li></li>
      </ul>

      <!-- Pages -->

      <ul class='ruled_paper'>
        <li></li>
		<li></li>
		<li :class="{d:flag}"></li>
		<li :class="{e:flag}"></li>
		<li :class="{f:flag}"></li>
      </ul>

      <!-- Back -->

      <ul class='paperback_back'>
        <li>
          <img src="img/bg.jpg" alt="" width="100%" height="100%">
        </li> 
        <li></li>
      </ul>
    </figure>



	<div id="taobao-best">
		<!-- Swiper -->
		<div class="swiper-container show-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="goods">
						<img src="../assets/img/001.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide">
					<div class="goods">
						<img src="../assets/img/002.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide">
					<div class="goods">
						<img src="../assets/img/003.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide">
					<div class="goods">
						<img src="../assets/img/004.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide">
					<div class="goods">
						<img src="../assets/img/005.jpg" alt="">
					</div>
				</div>
				<div class="swiper-slide last-slide">
				<span class="icon"></span>
				<p class="text">右滑查看更多</p>
				</div>
			</div>
		</div>
		
		<div class="swiper-container bg-swiper swiper-no-swiping">
			<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="../assets/img/blur001.jpg"></div>
			<div class="swiper-slide"><img src="../assets/img/blur002.jpg"></div>
			<div class="swiper-slide"><img src="../assets/img/blur003.jpg"></div>
			<div class="swiper-slide"><img src="../assets/img/blur004.jpg"></div>
			<div class="swiper-slide"><img src="../assets/img/blur005.jpg"></div>
			</div>
		</div>
	</div>





  </div>
</template>

<script>
import Swiper from '../../static/swiper.min.js';
import '../assets/css/swiper.min.css';
import '../assets/css/style.css'
// import '../assets/js/taobao.min.js'
export default {
  name: 'Message',
  data () {
    return {
      // items:document.querySelectorAll('.menuItem'),
      flag:false
    }
  },
  created(){
	  
  },
  mounted(){
	  console.log(swiperBg)
	// console.log(this.items)
	var swiperBg = new Swiper(".bg-swiper", {
			effect: "fade",
			fadeEffect: {
				crossFade: !1
			}
		}),
		swiperShow = new Swiper(".show-swiper", {
			slidesPerView: "2",
			watchSlidesProgress: !0,
			slidesOffsetBefore: 40,
			spaceBetween: 200,
			resistanceRatio: 1,
			controller: {
				control: swiperBg
			},
			on: {
				progress: function (b) {
					for (var i = 0; i < this.slides.length; i++) this.slide = this.slides.eq(i), this.slideProgress = this.slides[i].progress, this.prevIndent = 4 == i ? .3228 : .0898, this.scale = 1 > Math.abs(this.slideProgress + this.prevIndent) ? .1 * (1 - Math.abs(this.slideProgress + this.prevIndent)) + 1 : 1, this.slide.find(".goods").transform("scale3d(" +
						this.scale + "," + this.scale + ",1)")
				},
				setTransition: function (b) {
					for (var a = 0; a < this.slides.length; a++) this.slides.eq(a).find(".goods").transition(b)
				},
				touchMove: function () {
					this.controller.control = .01 > this.progress ? "" : swiperBg
				},
				touchEnd: function () {
					-1515 > this.translate && alert("\u8df3\u8f6c")
				}
			}
		});
  },
  methods: {
  //   aa(){
  //     for(var i = 0, l = items.length; i < l; i++) {
  //       items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  //       items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  //       console.log(11)
  //     }
  //   },
  //   bb(){
  //     this.flag=!this.flag
  //   }




  }
}
</script>
<style scoped>
.message {
  padding-top: .9rem;
}
/* .circle,.ring{height:256px;position:relative;width:256px;}
.circle{margin:100px auto 0 auto;}
.ring{background-color:rgba(0,0,0,0.5);border-radius:50%;opacity:0;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:scale(0.1) rotate(-270deg);-moz-transform:scale(0.1) rotate(-270deg);-transform:scale(0.1) rotate(-270deg);-webkit-transition:all 0.4s ease-out;-moz-transition:all 0.4s ease-out;transition:all 0.4s ease-out;}
.open .ring{opacity:1;-webkit-transform:scale(1) rotate(0);-moz-transform:scale(1) rotate(0);-transform:scale(1) rotate(0);}
.center{background-color:rgba(255,255,255,0.3);border-radius:50%;border:2px solid #ffffff;bottom:0;color:white;height:80px;left:0;line-height:80px;margin:auto;position:absolute;right:0;text-align:center;top:0;width:80px;-webkit-transition:all 0.4s ease-out;-moz-transition:all 0.4s ease-out;transition:all 0.4s ease-out;}
.open .center{border-color:#aaaaaa;}
.menuItem{border-radius:50%;color:#eeeeee;display:block;height:40px;line-height:40px;margin-left:-20px;margin-top:-20px;position:absolute;text-align:center;width:40px;} */



.book {
	position: relative;
	width: 3.2rem; 
	height: 4.4rem;
	-webkit-perspective: 20rem;
	-moz-perspective: 20rem;
	perspective: 20rem;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
	z-index: 99;
}


.paperback_front {
	background-color: #000;
}

.paperback_front::after{
	background-image: -webkit-linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%)!important;
	background-image: -moz-linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%)!important;
	background-image: linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%)!important;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.paperback_back {
	background-color: #333;
}


.ruled_paper > li {
	background-color: #fff;
	background-image: url('../assets/xian.png');
	background-size: 100% 0.6em;
	box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);
	border-radius: 0 .2rem .2rem 0px;
}


.paperback_front {
	-webkit-transform: rotateY(-38deg) translateZ(0px);
	-moz-transform: rotateY(-38deg) translateZ(0px);
	transform: rotateY(0deg) translateZ(0px);
	z-index: 100;
}

.paperback_back {
	-webkit-transform: rotateY(-0deg);
	-moz-transform: rotateY(-0deg);
	transform: rotateY(0deg);
}

.ruled_paper li:nth-child(3) {
	-webkit-transform: rotateY(-0deg);
	-moz-transform: rotateY(-0deg);
	transform: rotateY(-0deg);
}

.ruled_paper li:nth-child(4) {
	-webkit-transform: rotateY(-0deg);
	-moz-transform: rotateY(-0deg);
	transform: rotateY(-0deg);
}

.ruled_paper li:nth-child(5) {
	-webkit-transform: rotateY(-0deg);
	-moz-transform: rotateY(-0deg);
	transform: rotateY(-0deg);
}

.paperback_front,
.paperback_back,
.paperback_front li,
.paperback_back li {
	border-radius: .04rem .16rem .16rem .04rem;
	position: absolute;
	top: 0;
	left: 0px;
	width: 100%;
	height: 100%;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
}

.paperback_front,
.paperback_back {
	-webkit-transform-origin: 0% 100%;
	-moz-transform-origin: 0% 100%;
	transform-origin: 0% 100%;
}

.paperback_front{
	-webkit-transition: all 0.5s ease, z-index 0.6s;
	-moz-transition: all 0.5s ease, z-index 0.6s;
	transition: all 0.5s ease, z-index 0.6s;
}

.paperback_front li img,
.paperback_back li img {
	border-radius: .04rem .16rem .16rem .04rem;
	position: absolute;
	top: 0;
	left: 0;
}

.ruled_paper,
.ruled_paper > li {
	position: absolute;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
}

.ruled_paper {
	width: 98%;
	height: 98%;
	top: 1%;
	left: 1%;
	z-index: 10;
}

.ruled_paper > li {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.ruled_paper > li {
	-webkit-transform-origin: left center;
	-moz-transform-origin: left center;
	transform-origin: left center;
	-webkit-transition-property: transform;
	-moz-transition-property: transform;
	transition-property: transform;
	-webkit-transition-timing-function: ease;
	-moz-transition-timing-function: ease;
	transition-timing-function: ease;
}

.ruled_paper li:nth-child(3) {
	-webkit-transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	transition-duration: 0.4s;
}

.ruled_paper li:nth-child(4) {
	-webkit-transition-duration: 0.5s;
	-moz-transition-duration: 0.5s;
	transition-duration: 0.5s;
}

.ruled_paper li:nth-child(5) {
	-webkit-transition-duration: 0.5s;
	-moz-transition-duration: 0.5s;
	transition-duration: 0.5s;
}

.a {
  -webkit-transform: rotateY(-125deg) translateZ(0px);
	-moz-transform: rotateY(-125deg) translateZ(0px);
	transform: rotateY(-125deg) translateZ(0px);
	z-index: 0;
}


.d {
	-webkit-transform: rotateY(-110deg)!important;
	-moz-transform: rotateY(-110deg)!important;
	transform: rotateY(-110deg)!important;
	transition-delay: .3s;
	-moz-transition-delay: .3s; /* Firefox 4 */
	-webkit-transition-delay: .3s; /* Safari 和 Chrome */
	-o-transition-delay: 2.3s;
	-webkit-transition-duration: 2.2s;
	-moz-transition-duration: 2.2s;
	transition-duration: 2.2s;
}

.e {
	-webkit-transform: rotateY(-115deg)!important;
	-moz-transform: rotateY(-115deg)!important;
	transform: rotateY(-115deg)!important;
	transition-delay: .3s;
	-moz-transition-delay: .3s; /* Firefox 4 */
	-webkit-transition-delay: .3s; /* Safari 和 Chrome */
	-o-transition-delay: 2.3s;
	-webkit-transition-duration: 1.8s;
	-moz-transition-duration: 1.8s;
	transition-duration: 1.8s;
}

.f {
	-webkit-transform: rotateY(-120deg)!important;
	-moz-transform: rotateY(-120deg)!important;
	transform: rotateY(-120deg)!important;
	transition-delay: .3s;
	-moz-transition-delay: .3s; /* Firefox 4 */
	-webkit-transition-delay: .3s; /* Safari 和 Chrome */
	-o-transition-delay: 2.3s;
	-webkit-transition-duration: 1.2s;
	-moz-transition-duration: 1.2s;
	transition-duration: 1.2s;
}

.gg {
  animation: aaa 1.5s forwards;
}

@keyframes aaa {
		20% {
			position: fixed;
			top: 50%;
			margin-top: -2.4rem;
			left: 50%;
			margin-left: -1.6rem;
		}
		100% {
			transform: scale(2);
			position: fixed;
			top: 50%;
			margin-top: -2.2rem;
			left: 50%;
			margin-left: -1.6rem;
		}
    }
.green {
	background: #2ecc71;
}
.red {
	background: #cb0000;
}
.ribbon{
	background: #c0392b;
	color: #fff;
	display: block;
	font-size: 0.7em;
	position: absolute;
	top: 11px;
	right: 1px;
	width: 40px;
	height: 20px;
	line-height: 20px;
	letter-spacing: 0.15em; 
	text-align: center;
	-webkit-transform: rotateZ(45deg) translateZ(1px);
	-moz-transform: rotateZ(45deg) translateZ(1px);
	transform: rotateZ(45deg) translateZ(1px);
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	z-index: 10;
}
.ribbon::before,
.ribbon::after{
	position: absolute;
	top: -20px;
	width: 0;
	height: 0;
	border-bottom: 20px solid #c0392b;
	border-top: 20px solid transparent;
}
.ribbon::before{
	left: -20px;
	border-left: 20px solid transparent;
}
.ribbon::after{
	right: -20px;
	border-right: 20px solid transparent;
}
figcaption {
	padding-left: 40px;
	text-align: left;
	position: absolute;
	top: 0%;
	left: 160px;
	width: 310px;
}

figcaption h1 {
	margin: 0;
}

figcaption span {
	color: #16a085;
	padding: 0.6em 0 1em 0;
	display: block;
}

figcaption p {
	color: #63707d;
	line-height: 1.3;
}

.show-swiper .swiper-slide .goods {
	width: 4.6rem;
	height: 6rem;
}
.goods img {
	width: 100%;
	height: 100%;
}
.show-swiper .swiper-slide .goods {
	padding: 0;
}
.bg-swiper {
	height: 8.7rem;
}
</style>