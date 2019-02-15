<template>
   <div class="detail">
<!--       <van-nav-bar
  title="标题"
 


 
/> -->

   
  <router-view></router-view>


  <van-tabbar v-model="active">
  <van-tabbar-item icon="shop" :to='{name:"home"}'>
     首页
  </van-tabbar-item>
  <van-tabbar-item icon="chat" :to='{name:"sp"}' dot>
   商品
  </van-tabbar-item>
  <van-tabbar-item icon="records" :to='{name:"gw"}' info="5">
      购物
  </van-tabbar-item>
  <van-tabbar-item :to='{name:"w"}' icon="gold-coin" info="20">
    我
  </van-tabbar-item>
</van-tabbar>


<!-- <van-swipe :autoplay="3000" style="height:300px;" >

  <van-swipe-item v-for="(image, index) in img" :key="index">
    <img :src="image" @click="lunbo"/>
  </van-swipe-item>
 
</van-swipe> -->


<!-- <van-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
 
/>

{{active}} -->

    </div>
</template>
 
<script>
import { Swipe, SwipeItem } from "vant";
import { ImagePreview } from "vant";
import { Dialog } from "vant";

export default {
  data() {
    return {
      active: 0,

      img: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542945953665&di=27523d49148fa99a07ee0db49ca91410&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F960a304e251f95cafcba278dc2177f3e670952b9.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542945954083&di=d46d07e55420daa975346939c3189046&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb17eca8065380cd708ae52d1aa44ad345982815e.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542945954082&di=e226e3dbf68316fd8e438687c201e132&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff603918fa0ec08fae0b1528f52ee3d6d55fbda61.jpg"
      ]
    };
  },
  methods: {
    aaa() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        // on close
      });
    },
    lunbo() {
      ImagePreview({
       images:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542945953665&di=27523d49148fa99a07ee0db49ca91410&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F960a304e251f95cafcba278dc2177f3e670952b9.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542945954083&di=d46d07e55420daa975346939c3189046&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb17eca8065380cd708ae52d1aa44ad345982815e.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542945954082&di=e226e3dbf68316fd8e438687c201e132&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff603918fa0ec08fae0b1528f52ee3d6d55fbda61.jpg'],
        startPosition: 1,
        showIndex:false,
        showIndicators:true
      });
    }
  }
};
</script>
<style scoped>
.van-swipe img {
  width: 100%;
  height: 100%;
}
</style>
