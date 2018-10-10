<template>
    <div class="art-lc">
        <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="title">里程碑</div>
        </div> 
        <div class="content">
            <div class="line"></div>
            <div class="lc">
                <div :class="{hide:0<=num}">
                    <span class="left">7月30日</span>
                    <img class="cc" src="../../assets/img/art/c1.png" alt="">
                    <span class="right">参加有哎首届朝鲜文化艺术交流获中朝友谊大使称号</span>
                </div>
                <div :class="{hide:1<=num}">
                    <span class="left">5月20日</span>
                    <img class="cc" src="../../assets/img/art/c2.png" alt="">
                    <span class="right">参加“2018我是超模”北京时装周50年专项选拔赛</span>
                </div>
                <div :class="{hide:2<=num}">
                    <span class="left c">10月22日</span>
                    <img class="cc b" src="../../assets/img/art/c3.png" alt="">
                    <span class="right a">参加夕阳红重阳时装展演</span>
                </div>
                <div :class="{hide:3<=num}">
                    <span class="left">7月30日</span>
                    <img class="cc" src="../../assets/img/art/c1.png" alt="">
                    <span class="right">参加有哎首届朝鲜文化艺术交流获中朝友谊大使称号</span>
                </div>
                <div :class="{hide:4<=num}">
                    <span class="left">5月20日</span>
                    <img class="cc" src="../../assets/img/art/c2.png" alt="">
                    <span class="right">参加“2018我是超模”北京时装周50年专项选拔赛</span>
                </div>
                <div :class="{hide:5<=num}">
                    <span class="left c">10月22日</span>
                    <img class="cc b" src="../../assets/img/art/c3.png" alt="">
                    <span class="right a">参加夕阳红重阳时装展演</span>
                </div>
                <div :class="{hide:6<=num}">
                    <span class="left">7月30日</span>
                    <img class="cc" src="../../assets/img/art/c1.png" alt="">
                    <span class="right">参加有哎首届朝鲜文化艺术交流获中朝友谊大使称号</span>
                </div>
                <div :class="{hide:7<=num}">
                    <span class="left">5月20日</span>
                    <img class="cc" src="../../assets/img/art/c2.png" alt="">
                    <span class="right">参加“2018我是超模”北京时装周50年专项选拔赛</span>
                </div>
                <div :class="{hide:8<=num}">
                    <span class="left c">10月22日</span>
                    <img class="cc b" src="../../assets/img/art/c3.png" alt="">
                    <span class="right a">参加夕阳红重阳时装展演</span>
                </div>
            </div>
        </div> 
        <img src="../../assets/img/art/dh.png" alt="">                
    </div>
</template>
<script>
export default {
    name: 'ArtZuopin',
    data () {
        return {
            num: -1,
            timetop: 60,
            endY: 0,
            direction: 1
        }
    },
    mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('touchmove', this.touchMove)
    },
    watch:{
        endY:function(val,oldval){
            if(val-oldval<0){
                this.direction=1
            }else if(val-oldval>0){
                this.direction=2
            }
        },
        timetop:function(newval,oldval){
            if(newval-oldval>0){
                this.num++
            }else if(newval-oldval<0){
                this.num--
            }
        }
    },
    methods: {
        touchMove(e){
            if(e.touches.length == 1) {    //等于1时表示此时有只有一只手指在触摸屏幕
                this.endY = e.touches[0].clientY; // 记录开始位置
            }
        },
        handleScroll(){
            if(this.direction==1){
                if(window.pageYOffset>this.timetop){
                    this.timetop=this.timetop+75
                    // console.log(this.num)
                }
            }else if(this.direction==2){
                if(window.pageYOffset+60<this.timetop){
                    if(this.timetop>0){
                        this.timetop=this.timetop-75
                        // console.log(this.num)
                    } 
                }
            }
        }
    }
}
</script>
<style scoped>
.fy {
    position: fixed;
    z-index: 999;
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
.line {
    position: absolute;
    top: 0;
    height: 2000px;
    width: .08rem;
    background-color: #d0eb95;
    left: 1.7rem;
}
.content {
    padding-top: 2rem;
}
.lc {
    overflow: hidden;
}
.lc>div {
    margin-bottom: .8rem;
    font-size: .26rem;
    height: .72rem;
}
.cc {
    width: .32rem;
    position: relative;
    left: -1.02rem;
}
.left {
    position: relative;
    left: -1.2rem;
    top: -.04rem;
    text-align: right;
    display: inline-block;
    width: 1.2rem;
     transition: left 1s;
    -webkit-transition: left 1s;
}
.right {
    display: inline-block;
    width: 3.2rem;
    text-align: left;
    position: relative;
    left: -.78rem;
    top: .16rem;
     transition: left 1s;
    -webkit-transition: left 1s;
}
.a {
    top: .26rem;
}
.b {
    top: .32rem;
}
.c {
    top: .3rem;
}
.art-lc>img{
    width: 1.55rem;
    position: fixed;
    top: 5.8rem;
    right: .3rem;
}
.hide .left {
    left: -3.2rem;
}
.hide .right {
    left: 5rem;
}
</style>