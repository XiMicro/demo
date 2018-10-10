<template>
  <div class="hello">
    <router-view></router-view>
    <div class="foot">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
          <div @click="btn1">
            <img v-if="flag1" src="../assets/img/foot1.jpg" alt="">
            <img v-if="!flag1" src="../assets/img/foot11.jpg" alt="">
          </div>
        </mt-tab-item>
        <mt-tab-item id="艺术团">
          <div @click="btn2">
            <img v-if="flag2" src="../assets/img/foot2.jpg" alt="">
            <img v-if="!flag2" src="../assets/img/foot22.jpg" alt="">
          </div>
        </mt-tab-item>
        <mt-tab-item  id="消息">
          <div @click="btn3">
            <img v-if="flag3" src="../assets/img/foot4.jpg" alt="">
            <div v-if="flag3" class="newcircle">18</div>
            <img v-if="!flag3" src="../assets/img/foot44.jpg" alt="">
          </div>
        </mt-tab-item>
        <mt-tab-item  id="我的">
          <div @click="btn4">
            <img v-if="flag4" src="../assets/img/foot3.jpg" alt="">
            <img v-if="!flag4" src="../assets/img/foot33.jpg" alt="">
          </div>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      selected: '',
      topflag: false,
      flag1: true,
      flag2: true,
      flag3: true,
      flag4: true
    }
  },
  created () {
    // this.$router.push({ path: '/main' })
  },
  watch:{
    selected:function(val){
      //页面跳转
      console.log(val)
      switch(val){
        case '首页':
        this.$router.push({ path: '/main2' })
        break;
        case '艺术团':
        this.$router.push({ path: '/more' })
        break;
        case '我的':
        this.$router.push({ path: '/more' })
        break;
        case '消息':
        this.$router.push({ path: '/more' })
        break;
      }
    }
  },
  mounted(){
    //监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>=10){
        this.topflag=true
      }else{
        this.topflag=false
      }
    },
    btn1(){
      console.log(11)
      this.flag1=true
      this.flag2=true
      this.flag3=true
      this.flag4=true
    },
    btn2(){
      this.flag1=false
      this.flag2=false
      this.flag3=true
      this.flag4=true
    },
    btn3(){
      this.flag1=false
      this.flag2=true
      this.flag3=false
      this.flag4=true
    },
    btn4(){
      this.flag1=false
      this.flag2=true
      this.flag3=true
      this.flag4=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
  padding-bottom: .24rem;
}
.hello .header {
  background-color: #fff;
  z-index: 99999;
  position: fixed;
  width: 99%;
  border: .02rem solid rgba(121, 121, 121, 1);
  height: .72rem;
  line-height: .72rem;
  padding: .02rem;
  right: 0;
}
.hello .header .logo {
  height: .68rem;
  float: left;
  border: .02rem solid rgba(121, 121, 121, 1);
  padding: 0 .12rem;
}
.hello .header .title {
  font-size: 14px;
  color: #333;
}
.hello .header .badge {
  line-height: .32rem;
  position: absolute;
  top: .04rem;
  right: .04rem;
}
.hello .header .icon-mail {
  float: right;
  font-size: .8rem;
  color: #ccc;
  margin-right: .32rem;
}
.hello .foot {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1rem;
  line-height: .64rem;
  padding: .01rem;
  z-index: 999;
}
.hello .foot img {
  height: .8rem;
  padding-top: .1rem;
  margin-top: -.12rem;
}
.hello .foot .mint-tabbar {
  background-color: #fff;
  box-shadow: 0 .18rem .48rem;
}
.newcircle {
  width: .4rem;
  height: .4rem;
  text-align: center;
  line-height: .4rem;
  background-color: #ff5000;
  color: #fff;
  border-radius: 50%;
  position: relative;
  bottom: .94rem;
  left: 1.04rem;
  border: .02rem solid #fff;
}
</style>
