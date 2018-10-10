<template>
    <div class="zpdetails">
        <div class="content" @click="$router.push({ path: '/artr' })">
            <img src="../../assets/img/art2/ryq.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ZpDetails',
    data () {
        return {
            flaglogo: false,
            oneflag: true
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
.content {
    background-color: #b91c22;
}
.content img {
    width: 100%;
    margin-bottom: .7rem;
}
</style>
