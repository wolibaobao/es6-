<template>
    <div id="app"><div class="goods"><div class="goods-swipe van-swipe"><div class="van-swipe__track" style="width: 750px; transition-duration: 500ms; transform: translateX(-375px);"><div class="van-swipe-item" style="width: 375px; height: 100%; transform: translateX(0px);"><img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"></div><div class="van-swipe-item" style="width: 375px; height: 100%; transform: translateX(0px);"><img src="https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"></div></div><div class="van-swipe__indicators"><i class="van-swipe__indicator"></i><i class="van-swipe__indicator van-swipe__indicator--active"></i></div></div><div class="van-cell-group van-hairline--top-bottom"><div class="van-cell"><!----><!----><div class="van-cell__value van-cell__value--alone"><div class="goods-title">美国伽力果（约680g/3个）</div><div class="goods-price">¥26.80</div></div><!----></div><div class="goods-express van-cell"><!----><!----><div class="van-cell__value van-cell__value--alone"><div class="van-col van-col--10">运费：免运费</div><div class="van-col van-col--14">剩余：19</div></div><!----></div></div><div class="goods-cell-group van-cell-group van-hairline--top-bottom"><div class="van-cell van-cell--clickable"><i class="van-icon van-icon-shop van-cell__left-icon"><!----></i><div class="van-cell__title"><span class="van-cell-text">有赞的店</span><span class="goods-tag van-tag" style="background-color: rgb(255, 68, 68);">官方</span></div><div class="van-cell__value"><span>进入店铺</span></div><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div><div class="van-cell van-cell--clickable"><i class="van-icon van-icon-location van-cell__left-icon"><!----></i><div class="van-cell__title"><span>线下门店</span><!----></div><!----><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div></div><div class="goods-cell-group van-cell-group van-hairline--top-bottom"><div class="van-cell van-cell--clickable"><!----><div class="van-cell__title"><span>查看商品详情</span><!----></div><!----><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div></div><div class="van-goods-action"><div class="van-hairline van-goods-action-mini-btn"><i class="van-icon van-icon-chat van-goods-action-mini-btn__icon"><!----></i>
      客服
    </div><div class="van-hairline van-goods-action-mini-btn"><i class="van-icon van-icon-cart van-goods-action-mini-btn__icon"><!----></i>
      购物车
    </div><button class="van-button van-button--warning van-button--large van-button--square van-goods-action-big-btn"><span class="van-button__text">
      加入购物车
    </span></button><button class="van-button van-button--danger van-button--large van-button--square van-goods-action-big-btn"><span class="van-button__text">
      立即购买
    </span></button></div></div></div>
</template>


<style>

.goods {
    padding-bottom: 50px;
}.van-swipe-item {
    float: left;
    height: 100%;
}
.goods-swipe img {
    width: 100%;
    display: block;
}.goods-title {
    font-size: 16px;
}.goods-price {
    color: #f44;
}.goods-cell-group {
    margin: 15px 0;
}.goods-tag {
    margin-left: 5px;
}.goods-cell-group .van-cell__value {
    color: #999;
}.van-col--10 {
    width: 41.66666667%;
}.goods-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
}
</style>
