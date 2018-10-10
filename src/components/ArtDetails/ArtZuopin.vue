<template>
    <div class="art-zuopin">
        <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="title">作品展示</div>
        </div>
        <div class="content" @click="$router.push({ path: '/zpDetails' })">
            <img src="../../assets/img/art/zuopin1.jpg" alt="">
            <p>优雅之美，艺术传达</p>
            <div>
                <span class="time">2018-09-18 19:00</span>
                <ul>
                    <li>
                        <img src="../../assets/img/art/zpzan.png" alt="">
                        <span>赞788</span>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zpck.png" alt="">
                        <span>27789</span>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zphf.png" alt="">
                        <span>2778</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content a">
            <img src="../../assets/img/art/zuopin2.jpg" alt="">
            <p>深秋，拥有美好</p>
            <div>
                <span class="time">2018-09-18 19:00</span>
                <ul>
                    <li>
                        <img src="../../assets/img/art/zpzan.png" alt="">
                        <span>赞788</span>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zpck.png" alt="">
                        <span>27789</span>
                    </li>
                    <li>
                        <img src="../../assets/img/art/zphf.png" alt="">
                        <span>2778</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="more">
            <img src="../../assets/img/art/more.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArtZuopin',
    data () {
        return {
           
        }
    },
    mounted () {
    window.scrollTo(0,0);
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
.content {
    margin-top: .14rem;
    box-shadow: 0 .04rem .06rem #ccc;
    width: 7rem;
    position: absolute;
    left: 50%;
    margin-left: -3.5rem;
}
.content>img {
    width: 7rem;
    height: 3.3rem;
}
.content>p {
    font-size: .26rem;
    text-align: left;
    padding-left: .2rem;
    padding-top: .15rem  ;
    padding-bottom: .2rem;
}
.content>div {
    overflow: hidden;
    padding-bottom: .2rem;
}
ul {
    font-size: .22rem;
    color: #9f9f9f;
    text-align: left;
    float: right;
    padding-right: .45rem;
}
ul li {
    float: left;
}
li span {
    margin-left: .08rem;
}
li img {
    margin-left: .3rem;
}
li:first-child img {
    width: .24rem;
    position: relative;
    top: .02rem;
}
li:nth-child(2) img {
    width: .32rem;
    position: relative;
    top: .04rem;
}
li:nth-child(3) img {
    width: .24rem;
    position: relative;
    top: .04rem;
}
.time {
    float: left;
    padding-left: .2rem;
}
.a {
    margin-top: 5.08rem;
}
.more {
    margin-top: 10.2rem;
}
.more img {
    width: 2rem;
    height: .6rem;
}
</style>
