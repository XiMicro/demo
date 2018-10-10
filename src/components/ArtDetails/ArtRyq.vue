<template>
    <div class="zpdetails">
         <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="title">荣誉墙</div>
        </div>
        <div class="content" @click="$router.push({ path: '/artry' })">
            <img src="../../assets/img/art/rybj.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ZpDetails',
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
.content img {
    width: 100%;
    margin-top: -1rem;
}
</style>
