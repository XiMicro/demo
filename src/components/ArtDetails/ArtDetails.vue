<template>
  <div class="art_details">
    <cube-scroll-nav-bar class="scrollnav" :current="current" :labels="labels" @change="changeHandler" v-if="scrollflag" />
    <div>
        <div class="art-title">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fh.png" alt="">
                    返回
                </span>
                <span>
                    <img src="../../assets/img/art/fx.png" alt="">
                    分享
                </span>
            </div>
            <div class="art-tx">
                <img src="../../assets/img/art/tx.jpg" alt="">
                <div>
                    <p>心美模特队</p>
                    <p><img src="../../assets/img/art/bz.png" alt="">我健康我快乐，快乐在我心中。</p>
                </div>
            </div>
            <div class="art-fs">
                <ul>
                    <li>
                        <p>2789</p>
                        <span>粉 丝</span>
                    </li>
                    <li class="line"></li>
                    <li>
                        <p>5570</p>
                        <span>点赞数</span>
                    </li>
                    <li class="line"></li>
                    <li>
                        <p>5</p>
                        <span>作品数</span>
                    </li>
                </ul>
                <div v-if="flaggz" @click="flaggz=false" class="art-gz">
                    + 关 注
                </div>
                <div v-if="!flaggz" @click="flaggz=true" class="art-gz ygz">
                    已 关 注
                </div>
            </div>
        </div>
        <div class="art-titleb">
            <!-- <p>有哎 · 中俄文化艺术交流活动正在火热招募中！</p> -->
            <div class="swiper-art">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">有哎 · 中俄文化艺术交流活动正在火热招募中！</div>
                    <div class="swiper-slide">有哎 · 艺术团活动开始！</div>
                    <div class="swiper-slide">有哎 · 中俄文化艺术交流活动结束！</div>
                </div>
            </div>
        </div>
        <div class="art-jj" id="art">
            <div class="art-alltitle">
                <img src="../../assets/img/art/title1.png" alt="">
                <span v-if="flagzk" @click="flagzk=false">展 开<span>></span></span>
                <span v-if="!flagzk" @click="flagzk=true">收 起></span>
            </div>
            <div class="jj-content">
                <p>建团时间：2009初</p>
                <p>所在地：北京市大兴区</p>
                <p class="zk" v-if="flagzk">心美模特队是大兴区第一支时装表演队，团员主要来…</p>
                <p class="zk" v-if="!flagzk">心美模特队是大兴区第一支时装表演队，团员主要来自红西门社区退休居民。成立近十年。</p>
            </div>
        </div>
        <div class="art-lc" id="marker">
            <div class="art-alltitle">
                <img src="../../assets/img/art/title2.png" alt="">
                <span @click="$router.push({ path: '/artlc' })">更 多></span>
            </div>
            <div class="lc-sj">
                <div class="line">
                    <img src="../../assets/img/art/line.png" alt="">
                    <img class="cc" src="../../assets/img/art/c1.png" alt="">
                    <img class="cc" src="../../assets/img/art/c2.png" alt="">
                    <img class="cc" src="../../assets/img/art/c3.png" alt="">
                </div>
                <div class="content">
                    <ul class="left">
                        <li>2018年7月30日</li>
                        <li>2018年5月20日</li>
                        <li>2018年10月22日</li>
                    </ul>
                    <ul class="right">
                        <li>
                            <p>参加有哎首届朝鲜文化艺术交流</p>
                            <p>获中朝友谊大使称号</p>
                            </li>
                        <li>
                            <p>参加“2018我是超模”</p>
                            <p>北京时装周50年专项选拔赛</p>
                        </li>
                        <li>参加夕阳红重阳时装展演</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="art-cy" id="team">
            <div class="art-alltitle">
                <img src="../../assets/img/art/title3.png" alt="">
                <span>更 多></span>
            </div>
            <div class="fc-lb">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="../../assets/img/art/txq.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <div>
                                <img src="../../assets/img/art/txq.jpg" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div>
                                <img src="../../assets/img/art/txq.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        <div class="art-fc" id="daily">
           <div class="art-alltitle">
                <img src="../../assets/img/art/title4.png" alt="">
                <span @click="$router.push({ path: '/text3' })">更 多></span>
            </div>
            <div class="main-art-bot">
                <ul>
                    <li @click="$router.push({ path: '/artgg' })">
                        <img src="../../assets/img/art/fc1.jpg" alt="">
                        <p>2017年9月-狼牙山牡丹园赏花</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/fc2.jpg" alt="">
                        <p>2018年6月-大连海边合影</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/fc3.jpg" alt="">
                        <p>2018年5月-集体排练</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys1.jpg" alt="">
                        <p>军旅之声合唱团</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys2.jpg" alt="">
                        <p>北京夕阳红服饰表演队</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys3.jpg" alt="">
                        <p>彩虹艺术团交谊舞队</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="art-zp" id="works">
            <div class="art-alltitle">
                <img src="../../assets/img/art/title5.png" alt="">
                <span @click="$router.push({ path: '/artzuopin' })">更 多></span>
            </div>
            <div class="main-art-bot">
                <ul>
                    <li @click="$router.push({ path: '/zpDetails' })">
                        <img src="../../assets/img/art/fc1.jpg" alt="">
                        <p>2017年9月-狼牙山牡丹园赏花</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/fc2.jpg" alt="">
                        <p>2018年6月-大连海边合影</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/fc3.jpg" alt="">
                        <p>2018年5月-集体排练</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys1.jpg" alt="">
                        <p>军旅之声合唱团</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys2.jpg" alt="">
                        <p>北京夕阳红服饰表演队</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys3.jpg" alt="">
                        <p>彩虹艺术团交谊舞队</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="art-hd" id="hd">
            <div class="art-alltitle">
                <img src="../../assets/img/art/title6.png" alt="">
                <span @click="$router.push({ path: '/arthd' })">更 多></span>
            </div>
            <div class="main-art-bot">
                <ul>
                    <li @click="$router.push({ path: '/artjx' })">
                        <img src="../../assets/img/art/zs.jpg" alt="">
                        <p>回到那青葱岁月，知青小镇有个你</p>
                    </li>
                    <li @click="$router.push({ path: '/artjs' })">
                        <img src="../../assets/img/art/zs.jpg" alt="">
                        <p>活动招募：回到那青葱岁月，知青小镇有</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zs.jpg" alt="">
                        <p>活动招募：回到那青葱岁月，知青小镇有</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zs.jpg" alt="">
                        <p>军旅之声合唱团</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zs.jpg" alt="">
                        <p>北京夕阳红服饰表演队</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zs.jpg" alt="">
                        <p>彩虹艺术团交谊舞队</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="art-ry" id="honor">
            <div class="art-alltitle">
                <img src="../../assets/img/art/title7.png" alt="">
                <span @click="$router.push({ path: '/artryq' })">更 多></span>
            </div>
            <div class="main-art-bot">
                <ul>
                    <li @click="$router.push({ path: '/artry' })">
                        <img src="../../assets/img/art/ry1.jpg" alt="">
                        <p>荣获金鹤奖奖杯以及荣誉证书</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/ry2.jpg" alt="">
                        <p>荣获“长城颂歌”合唱大赛荣誉证书</p>
                    </li>
                    <li>
                        <img src="../../assets/img/art/ry3.jpg" alt="">
                        <p>2015北京国际中老年</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys1.jpg" alt="">
                        <p>军旅之声合唱团</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys2.jpg" alt="">
                        <p>北京夕阳红服饰表演队</p>
                    </li>
                    <li>
                        <img src="../../assets/img/ys3.jpg" alt="">
                        <p>彩虹艺术团交谊舞队</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="art-zan">
            <img src="../../assets/img/art/zan.jpg" @click="oneflag=false" @touchend="oneflag=true" alt="">
            <div class="jone ss" v-if="!oneflag">+1</div>
            <span>868</span>
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
  </div>
</template>
<script>
import Swiper from '../../../static/swiper.min.js';
import '../../assets/css/swiper.min.css';
export default {
  name: 'ArtDetails',
  data () {
    return {
    current: '艺术团简介',
    labels: [
        '艺术团简介',
        '里程碑',
        '团队成员',
        '日常风采',
        '作品展示',
        '活动展示',
        '荣誉展示'
      ],
      content: '合唱团成立于1996年，共40余人，成员来自各行各业，有医生、教师、退休干部，还有企、事业单位的领导干部等等。团员们认同本团的演唱风格。合唱团成立于1996年，共40余人，成员来自各行各业，有医生、教师、退休干部，还有企、事业单位的领导干部等等。团员们认同本团的演唱风格。',
      newcontent: '',
      flag: true,
      attentionFlag: true,
      activeFlag: false,
      scrollflag: false,
      snav: 'art',
      flaggz: true,
      flagzk: true,
      flaglogo: false,
      oneflag: true
    }
  },
  mounted(){
    this.getLine()
    //监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination',
        }
    })
    var mySwiper = new Swiper('.swiper-art', {
        autoplay: true,
        direction : 'vertical',
        loop : true,
        delay: 800,
    })
  },
  methods: {
      handleScroll(){
        //导航栏与top显示隐藏
        if(window.pageYOffset>=180){
            this.scrollflag=true
        }else{
            this.scrollflag=false
        }
    },
    changeHandler(cur){
        console.log(cur)
        this.current=cur
        //锚点跳转
        switch(cur){
            case '艺术团简介':
                this.snav='art'
                break;
            case '里程碑':
                this.snav='marker'
                break;
            case '团队成员':
                this.snav='team'
                break;
            case '日常风采':
                this.snav='daily'
                break;
            case '作品展示':
                this.snav='works'
                break;
            case '活动展示':
                this.snav='hd'
                break;
            case '荣誉展示':
                this.snav='honor'
                break;
        }
        this.return1(this.snav)
    },
    return1(val){
      //平滑锚点
      let total=document.getElementById(val).offsetTop-65
      let step=total/100
      let distance = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (distance > total){
        smoothDown()
      }
      if (distance < total){
        smoothUp()
      }
      function smoothDown () {
        if (distance > total) {
          distance -= step
      　　// 移动一小段
         window.scrollTo(0,distance);
      　　// 设定每一次跳动的时间间隔为10ms
          setTimeout(smoothDown, 1)
        } else {
      　　// 限制滚动停止时的距离
         window.scrollTo(0,total);
        }
      }
      function smoothUp () {
        if (distance < total) {
          distance += step
      　　// 移动一小段
         window.scrollTo(0,distance);
      　　// 设定每一次跳动的时间间隔为10ms
          setTimeout(smoothUp, 1)
        } else {
      　　// 限制滚动停止时的距离
         window.scrollTo(0,total);
        }
      }
    },
    getLine(){
        //限制字符串长度
        if(this.content.length>85){
            this.newcontent = this.content.substr(0,85)
        }
    },
    spread(){
        this.flag=!this.flag
    },
    praiseRotate(){
        this.activeFlag=!this.activeFlag;
    }
  }
}
</script>
<style scoped>
    .jone {
        position: relative;
        top: .4rem;
        left: .4rem;
        color: #8fc31f;
        font-size: .36rem;
    }
    .art_details .scrollnav {
        position: fixed;
        width: 100%;
        z-index: 7;
        margin: 0;
        right: 0;
        box-shadow: 0 .04rem .08rem #ccc;
    }
    .art-title {
        width: 100%;
        height: 3.8rem;
        background-image: url(../../assets/img/art/bj.png);
        background-repeat: round;
    }
    .art-ff img {
        width: .26rem;
        height: .26rem;
        position: relative;
        top: .02rem;
    }
    .art-ff {
        font-size: .26rem;
        color: #fff;
        overflow: hidden;
        margin-bottom: .35rem;
    }
    .art-ff span:first-child {
        float: left;
        margin-left: .3rem;
        margin-top: .4rem;
    }
    .art-ff span:last-child {
        float: right;
        margin-right: .3rem;
        margin-top: .4rem;
    }
    .art-tx {
        overflow: hidden;
        margin-bottom: .48rem;
    }
    .art-tx>img {
        width: 1.24rem;
        height: 1.24rem;
        border-radius: 50%;
        margin-right: .2rem;
        margin-left: .6rem;
    }
    .art-tx>img,.art-tx>div {
        float: left;
    }
    .art-tx p:first-child {
        font-size: .38rem;
        color: #202020;
    }
    .art-tx p:last-child {
        font-size: .28rem;
        color: #474747;
    }
    .art-tx p img {
        width: .15rem;
        height: .22rem;
        margin-right: .1rem;
    }
    .art-tx p {
        text-align: left;
    }
    .art-fs ul {
        float: left;
        margin-left: .3rem;
    }
    .art-fs li {
        float: left;
    }
    .art-fs .line {
        height: .7rem;
        width: .02rem;
        background-color: #bf9d6d;
        margin: .1rem .15rem 0 .15rem!important;
    }
    .art-fs li p {
        font-size: .28rem;
        color: #fff;
        text-align: center
    }
    .art-fs li span {
        font-size: .26rem;
        color: #474747;
    }
    .art-gz {
        width: 1.9rem;
        height: .6rem;
        line-height: .6rem;
        background-color: #bf9d6d;
        font-size: .26rem;
        color: #fff;
        float: right;
        border-radius: .05rem;
        margin-right: .3rem;
    }
    .art-titleb {
        width: 100%;
        height: 1rem;
        background-image: url(../../assets/img/art/gg.png);
        background-repeat: round;
        margin-bottom: .4rem;
    }
    .art-titleb p{
        position: relative;
        top: .36rem;
        color: #474747;
        font-size: .24rem;
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
    .art-jj {
        margin-bottom: .57rem;
    }
    .jj-content {
        color: #474747;
        font-size: .28rem;
        text-align: left;
        padding-left: .3rem;
    }
    .jj-content .zk {
        height: .8rem;
        padding-right: .3rem;
    }
    .lc-sj .line {
        width: .2rem;
        height: 3.33rem;
        position: absolute;
        left: 2.8rem;
    }
    .lc-sj .line img {
        height: 100%;
    }
    .lc-sj .line .cc {
        width: .32rem;
        height: .32rem;
        position: relative;
        bottom: 2.9rem;
        right: .07rem;
    }
    .lc-sj .line .cc:nth-child(3) {
        bottom: 2.4rem;
    }
    .lc-sj .line .cc:nth-child(4) {
        bottom: 1.9rem;
    }
    .lc-sj .content {
        color: #474747;
        font-size: .28rem;
        height: 3.8rem;
    }
    .lc-sj .content .left {
        text-align: right;
        position: relative;
        right: 4.9rem;
        top: .48rem;
    }
    .lc-sj .content .left li {
        padding-bottom: .52rem;
    }
    .lc-sj .content .right {
        width: 4rem;
        text-align: left;
        position: relative;
        left: 3.2rem;
        bottom: 2.44rem;
    }
    .lc-sj .content .right li {
        padding-bottom: .18rem;
    }
    .lc-sj .content .right li:last-child {
        padding-top: .12rem;
    }
    .swiper-container {
        height: 100%;
    }
    .swiper-container .swiper-slide img {
        width: 6.9rem;
        height: .95rem;
    }
    .fc-lb {
        height: 1.8rem;
        margin-top: .36rem;
    }
    .swiper-pagination {
        bottom: .32rem
    }
    .main-art-bot {
        width: 100%;
        overflow-x: scroll;
        padding-bottom: .5rem;
    }
    .main-art-bot ul {
        width: 17.6rem;
        overflow: hidden;
        margin-left: .3rem;
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
        font-size: .28rem;
        color: #474747;
        font-family: 'Microsoft YaHei';
    }
    .art-zan {
        width: 100%;
        height: 2.65rem;
        position: relative;
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

   
</style>
<style>
.art_details .swiper-pagination-bullet {
    background: #fff;
    border: .04rem solid #8fc31f;
}
.swiper-pagination-bullet-active {
    background: #8fc31f!important;
}
.add_bg {
        overflow: hidden;
}
.cube-scroll-nav-bar-item_active {
    color: #8fc31f!important;
}
.cube-scroll-nav-bar-item_active span {
    padding-bottom: .08rem;
    border-bottom: .04rem solid #8fc31f;
}
.cube-scroll-list-wrapper {
    height: 1rem;
}
</style>
