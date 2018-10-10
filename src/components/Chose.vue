<template>
    <div class="chose">
       <img src="../assets/img/art/chosemain.png" alt="">
       <div class="content">
           <img @click="$router.push({ path: '/main' })" src="../assets/img/art/fa1.png" alt="">
           <img @click="$router.push({ path: '/main2' })" src="../assets/img/art/fa2.png" alt="">
       </div>
    </div>
</template>
<script>
export default {
    name: 'ArtHd2',
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
.chose {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(../assets/img/art/chose.jpg);
    background-repeat: round;
}
.chose>img {
    margin-top: 2.1rem;
    width: 7rem;
}
.content {
    margin-top: .6rem;
}
.content img {
    width: 3.34rem;
}
</style>

