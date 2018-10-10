<template>
  <div class="art">
      <mt-swipe :auto="2000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      <ul class="art_nav">
        <li class="left"><a href="#">
          <span class="iconfont icon-homepage"></span>
          <span>艺术团</span>
          <p>用优雅的的艺术传递人世间美好</p></a>
        </li>
        <li>
          <a href="#">
          <span>场地预定</span>
          <span class="iconfont icon-dynamic"></span>
          <p>用优雅的的艺术传递人世间美好</p></a>
        </li>
        <li class="left">
          <a href="#">
          <span class="iconfont icon-people"></span>
          <span>行业新闻</span>
          <p>用优雅的的艺术传递人世间美好</p></a>
        </li>
        <li>
          <a href="#">
          <span>专题活动</span>
          <span class="iconfont icon-browse"></span>
          <p>用优雅的的艺术传递人世间美好</p></a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Art',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
.art {
  padding-top: .9rem;
}
.art .art_nav {
  overflow: hidden;
  padding: 0 .08rem;
}
.art .art_nav li {
  font-size: .32rem;
  font-weight: 700;
  float: left;
  width: 48%;
  height: 1.8rem;
  border: .02rem solid #ccc;
  margin: .1rem 0 0 0;
}
.art .art_nav li a {
  display: block;
  height: 100%;
  width: 100%;
}
.art .art_nav li p {
  font-size: .28rem;
  font-weight: 400;
  text-align: left;
}
.art .art_nav .left {
  margin-right: .2rem;
}
.art .art_nav .iconfont {
  font-size: .64rem;
}
</style>
