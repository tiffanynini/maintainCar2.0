<template>
 <view class="overall">
  <view class="header">
   <view class="headerNavigator">
	   <!-- 设置路由 -->
	   <navigator url=""><uni-icons type="gear" size="28"></uni-icons></navigator>
	   <!-- 消息路由 -->
	   <navigator url=""><uni-icons type="chat" size="28"></uni-icons></navigator>
   </view>
   <view>
    <view class="img">
     <image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/我的/u1718.svg?token=fad4d6d7a0b28d1cf92674226532085ab0026fd61558abb4a0be96d7cd18432a" mode="heightFix"></image>
    </view>
   </view>
   <view>
    <text>梁先森559</text>
    <text>失败乃成功TM</text>
   </view>
   <view>
   </view>
  </view>
  <view class="body">
  	<view>
  		<text>我的购物</text>
  	</view>
	<view>
		<navigator url="" class="option">
				<span class="iconfont icon-daifukuan"></span>
				<text>待付款</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-daifahuo"></span>
				<text>待发货</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-daishouhuo"></span>
				<text>待收获</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-daipingjia"></span>
				<text>待评价</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-tuikuan"></span>
				<text>待退款</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-gouwuche"></span>
				<text>购物车</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-huiyuanqia"></span>
				<text>会员卡</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-youhuiquan"></span>
				<text>优惠券</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-liulanjilu"></span>
				<text>浏览记录</text>
		</navigator>
		<navigator url="" class="option">
				<span class="iconfont icon-weibiaoti2fuzhi08"></span>
				<text>收货地址</text>
		</navigator>
		
	</view>
  </view>
 </view>
</template>

<script>

 import uniIcons from "@/components/uni-icons/uni-icons.vue";
 export default {
  data() {
   return {
    
   };
  }
 }
</script>

<style lang="less" scoped>
	@import url("../../static/font/iconfont.css");
	*{
		margin: 0;
		padding: 0;
	}
 page{
  height: 100%;
 }
 .overall{
  background-color: #F4F4F3;
  height: 100%;
 }
 .header{
  position: relative;
  top: 0;
  left: 0;
 }
 .header view:nth-child(1){
  display: flex;
  justify-content: space-between;
  background-color: #04C4E0;
  height: 180rpx;
 }
 .headerNavigator{
	navigator:nth-child(1){
		height: 60rpx;
		margin: 20rpx 0 0 20rpx;
	}
 	navigator:nth-child(2){
		height: 60rpx;
		margin: 20rpx 20rpx 0 0;
 		
 	}
 }
 .img {
  background-color: #fff;
  border-radius:50%;
  height: 180rpx;
  width: 180rpx;
  position: absolute;
  top: 84rpx;
  left: 60rpx;
  border: 6rpx solid rgba(255,255,255,.8);
  image{
   height: 180rpx;
  }
 }
 .header view:nth-child(3){
  display: flex;
  position: absolute;
  top: 110rpx;
  left: 280rpx;
  justify-content: space-between;
  flex-direction: column;
  height: 140rpx;
  text{
   font-size: 28rpx;
  }
  text:nth-child(1){
   color: #fff;
  }
  text:nth-child(2){
   color: #aaa;
  }
 }
 .header view:nth-child(4){
  background-color: #fff;
  height: 120rpx;
 }
 .body{
	 margin-top: 20rpx;
	 background-color: #fff;
	 view:first-child{
		 border-bottom: 4rpx solid #F2F2F2;
		 margin: 0 20rpx;
		 height: 60rpx;
		 line-height: 60rpx;
	 }
	 view:nth-child(2){
		 display: flex;
		 flex-wrap: wrap;
		 justify-content: space-around;
		 .option{
			 width: 20%;
			 display: flex;
			 flex-wrap: wrap;
			 justify-content: space-around;
			 align-content: center;
			 height: 180rpx;
			 span{
				 color: #FDAE6B;
				 font-size: 80rpx;
			 }
			 text{
				 font-size: 28rpx;
			 }
		 }
	 }
 }
 
</style>