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
        <div id="box" @click="$router.push({ path: '/artgg' })">
            <div class="item" v-for="(item,index) in imgs" :key="index">
                <img :src='item.url' alt="">
                <p>{{item.content}}</p>
                <div>
                    <span class="left">
                        <img src="../../assets/img/art/yj.png" alt="">
                        <span>{{item.gk}}</span>
                    </span>
                    <span class="right">
                        <img src="../../assets/img/art/dz.png" alt="">
                        <span>{{item.dz}}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Text3',
    data () {
        return {
            imgs: [
                {
                    url:require("../../assets/img/art/pb1.jpg"),
                    content:'2017年9月-狼牙山牡丹园赏花',
                    gk:'49999',
                    dz:'3926'
                },
                {
                    url:require("../../assets/img/art/pb2.jpg"),
                    content:'2018年6月-大连海边合影',
                    gk:'89970',
                    dz:'6688'
                },
                {
                    url:require("../../assets/img/art/pb3.jpg"),
                    content:'2018年7月——在久久泰和养老驿站排练',
                    gk:'89797',
                    dz:'3926'
                },
                {
                    url:require("../../assets/img/art/pb4.jpg"),
                    content:'2018年5月-集体排练',
                    gk:'27781',
                    dz:'6688'
                },
                {
                    url:require("../../assets/img/art/pb5.jpg"),
                    content:'2018年5月-集体排练',
                    gk:'27781',
                    dz:'3926'
                },
                {
                    url:require("../../assets/img/art/pb1.jpg"),
                    content:'2017年9月-狼牙山牡丹园赏花',
                    gk:'49999',
                    dz:'6688'
                },
                {
                    url:require("../../assets/img/art/pb2.jpg"),
                    content:'2018年6月-大连海边合影',
                    gk:'89970',
                    dz:'6688'
                },
                {
                    url:require("../../assets/img/art/pb3.jpg"),
                    content:'2018年7月——在久久泰和养老驿站排练',
                    gk:'89797',
                    dz:'6688'
                },
                {
                    url:require("../../assets/img/art/pb4.jpg"),
                    content:'2018年5月-集体排练',
                    gk:'27781',
                    dz:'3926'
                },
            ]
        }
    },
    mounted(){
        window.scrollTo(0,0);
        var that=this
        setTimeout(function(){
            that.waterFall()
        },500)
    },
    methods: {
        getClient() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        },
        waterFall(){
            var box = document.getElementById('box');
            var items = box.children;
            console.log(items)
            // 定义每一列之间的间隙 为10像素
            var gap = 10;
            var pageWidth = this.getClient().width;
            var itemWidth = items[0].offsetWidth;
            var columns = parseInt(pageWidth / (itemWidth + gap));
            var arr = [];
            for (var i = 0; i < items.length; i++) {
                if (i < columns) {
                    // 确定第一行
                    items[i].style.top = 0;
                    items[i].style.left = ((itemWidth + gap) * i + 10)  + 'px';
                    console.log(items[i].offsetHeight)
                    arr.push(items[i].offsetHeight);
                    console.log(arr)
                } else {
                    // 其他行
                    // 找到数组中最小高度 和 它的索引
                    var minHeight = arr[0];
                    var index = 0;
                    for (var j = 0; j < arr.length; j++) {
                        if (minHeight > arr[j]) {
                            minHeight = arr[j];
                            index = j;
                        }
                    }
                    // 设置下一行的第一个盒子位置
                    // top值就是最小列的高度 + gap
                    items[i].style.top = (arr[index] + gap)  + 'px';
                    // left值就是最小列距离左边的距离
                    items[i].style.left = (items[index].offsetLeft)  + 'px';
                    // 修改最小列的高度 
                    // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
                    arr[index] = arr[index] + items[i].offsetHeight + gap;
                }
            }
        },
    }
}
</script>
<style scoped>
#box {
    position: absolute;
    top: 1.34rem;
    left: 50%;
    margin-left: -3.75rem;
}
.title {
    font-size: .32rem;
    color: #fff;
    position: relative;
    top: .28rem;
}
.text {
    position: relative;
}

img {
    width: 3.4rem;
    display: block;
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
.item>div {
    overflow: hidden;
    margin-top: .28rem;
    margin-bottom: .2rem;
    font-size: .22rem;
    color: #9f9f9f;
}
.left {
    float: left;
    margin-left: .12rem;
}
.left img {
    position: relative;
    top: .02rem;
    width: .32rem;
    height: .22rem;
    display: inline-block;
}
.right {
    float: right;
    margin-right: .12rem;
}
.right img {
    position: relative;
    top: .02rem;
    width: .24rem;
    height: .24rem;
    display: inline-block;
}
</style>
