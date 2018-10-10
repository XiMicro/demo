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
            <img src="../../assets/img/art2/content1.jpg" alt="">
        </div>
        <div class="more">
            <img src="../../assets/img/art/more.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArtZuopin2',
    data () {
        return {
           
        }
    },
    mounted () {
    
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
    width: 7rem;
    position: absolute;
    left: 50%;
    margin-left: -3.5rem;
}
.content>img {
    width: 7rem;
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
