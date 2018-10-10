<template>
    <div class="text">
        <div class="fy">
            <div class="art-ff">
                <span @click="$router.back(-1)">
                    <img src="../../assets/img/art/fhfc.png" alt="">
                    返回
                </span>
            </div>
            <div class="title">日常风采</div>
        </div>
        <div class="fc2">
            <div @click="$router.push({ path: '/artgg2' })">
                <p>2017年9月-狼牙山牡丹园</p>
                <img src="../../assets/img/art2/fc1.jpg" alt="">
            </div>
            <div>
                <p>2018年6月-大连海边合影</p>
                <img src="../../assets/img/art2/fc2.jpg" alt="">
            </div>
            <div>
                <p>2018年7月——在久久泰和养老驿站排练</p>
                <img src="../../assets/img/art2/fc3.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Text3',
    data () {
        return {
        }
    },
    mounted(){
        window.scrollTo(0,0);
        
    },
    methods: {
    }
}
</script>
<style scoped>
.title {
    font-size: .32rem;
    color: #fff;
    position: relative;
    top: .28rem;
}

.item {
    box-shadow: 0px 2px 4px #ccc;
    position: absolute;
}
.item p {
    font-size: .26rem;
    text-align: left;
    padding: 0 .12rem;
    margin-top: .12rem;
}
.fy {
    width: 100%;
    height: 1.11rem;
    background-image: url(../../assets/img/art/bjrc.png);
    background-repeat: round;
}
.art-ff span {
    z-index: 999;
    position: absolute;
    margin-top: .34rem;
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
.fc2 {
    margin-bottom: .9rem;
}
.fc2>div {
    height: 4.92rem;
}
.fc2 img {
    width: 7.16rem;
}
.fc2 p {
    font-size: .26rem;
    margin-left: .5rem;
    text-align: left;
    position: relative;
    top: .64rem;
}
</style>
