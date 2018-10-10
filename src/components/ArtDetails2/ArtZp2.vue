<template>
    <div class="art-zuopin">
        <div class="content" @click="$router.push({ path: '/zpdetails2' })">
            <img src="../../assets/img/art2/zpcontent.jpg" alt="">
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
.content img {
    width: 7.16rem;
    margin-top: .4rem;
}
.more img {
    width: 2rem;
    height: .6rem;
    margin: .5rem 0;
}
</style>
