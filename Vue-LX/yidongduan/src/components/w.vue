<template>
    <div id="app"><div><img src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png" class="user-poster"><div class="user-links van-row"><div class="van-col van-col--6"><i class="van-icon van-icon-pending-payment"><!----></i>
      待付款
    </div><div class="van-col van-col--6"><i class="van-icon van-icon-pending-orders"><!----></i>
      待接单
    </div><div class="van-col van-col--6"><i class="van-icon van-icon-pending-deliver"><!----></i>
      待发货
    </div><div class="van-col van-col--6"><i class="van-icon van-icon-logistics"><!----></i>
      待发货
    </div></div><div class="user-group van-cell-group van-hairline--top-bottom"><div class="van-cell van-cell--clickable"><i class="van-icon van-icon-records van-cell__left-icon"><!----></i><div class="van-cell__title"><span>全部订单</span><!----></div><!----><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div></div><div class="van-cell-group van-hairline--top-bottom"><div class="van-cell van-cell--clickable"><i class="van-icon van-icon-exchange van-cell__left-icon"><!----></i><div class="van-cell__title"><span>我的积分</span><!----></div><!----><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div><div class="van-cell van-cell--clickable"><i class="van-icon van-icon-gold-coin van-cell__left-icon"><!----></i><div class="van-cell__title"><span>我的优惠券</span><!----></div><!----><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div><div class="van-cell van-cell--clickable"><i class="van-icon van-icon-gift van-cell__left-icon"><!----></i><div class="van-cell__title"><span>我收到的礼物</span><!----></div><!----><i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div></div></div></div>
</template>


<style>
.user-poster {
    width: 100%;
    display: block;
}
.user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
}
.van-cell {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
    line-height: 24px;
    position: relative;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    overflow: hidden;
}
.user-links .van-icon {
    display: block;
    font-size: 24px;
}
.van-col--6 {
    width: 25%;
}
</style>
