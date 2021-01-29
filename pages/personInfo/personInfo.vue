<template>
 <view class="overall">
  <view class="header">
   <view class="headerNavigator">
	   <!-- 设置路由 -->
	   <navigator url="/pages/set/set" hover-class="none"><uni-icons type="gear" size="28"></uni-icons></navigator>
	   <!-- 消息路由 -->
	   <navigator url="/pages/msg/msg" hover-class="none"><uni-icons type="chat" size="28"></uni-icons></navigator>
   </view>
   <view>
    <view class="img">
     <image :src="photo" mode="heightFix"></image>
    </view>
   </view>
   <view>
    <text>{{name}}</text>
    <text>{{signature}}</text>
   </view>
   <view>
   </view>
  </view>
  <view class="body">
  	<view>
  		<text>我的购物</text>
  	</view>
	<view>
		<navigator url="/pages/orderStatus/orderStatus?status=1" class="option" hover-class="none">
				<span class="iconfont icon-daifukuan"></span>
				<text>待付款</text>
		</navigator>
		<navigator url="/pages/orderStatus/orderStatus?status=2" class="option" hover-class="none">
				<span class="iconfont icon-daifahuo"></span>
				<text>待发货</text>
		</navigator>
		<navigator url="/pages/orderStatus/orderStatus?status=3" class="option" hover-class="none">
				<span class="iconfont icon-daishouhuo"></span>
				<text>待收货</text>
		</navigator>
		<navigator url="/pages/orderStatus/orderStatus?status=4" class="option" hover-class="none">
				<span class="iconfont icon-daipingjia"></span>
				<text>待评价</text>
		</navigator>
		<navigator url="/pages/shopCar/shopCar" open-type="switchTab" class="option" hover-class="none">
				<span class="iconfont icon-gouwuche"></span>
				<text>购物车</text>
		</navigator>
		<navigator url="/pages/location/location" class="option" hover-class="none">
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
				//用户头像
				photo:'../../static/neil-modal/logo.png',
				// 用户签名
				signature:'',
				// 用户名
				name:'温故知新'
			}
		},
	methods:{
		getInformation(){
			uni.request({
				url: this.pageUrl.pageUrl+'/userInfo/userInfo', 
				method:'get', 
				header: {
					'token': wx.getStorageSync('token')
				},
				success: (res) => {
					console.log(res);
					if(res.data.data.image!=null){
						this.photo=res.data.data.image;
					}
					this.signature=res.data.data.signature;
				}
			}); 
		},
  
	},
	 onLoad(res) {
		this.id=wx.getStorageSync('id');
		this.getInformation();
	 },
	 onShow(){
		this.id=wx.getStorageSync('id');
	 	this.getInformation();
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
  overflow: hidden;
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
			 width: calc(100%/3);
			 display: flex;
			 flex-wrap: wrap;
			 justify-content: space-around;
			 align-content: center;
			 height: 180rpx;
			 text-align: center;
			 span{
				 width: 100%;
				 color: #FDAE6B;
				 font-size: 80rpx;
			 }
			 text{
				 width: 100%;
				 font-size: 28rpx;
			 }
		 }
	 }
 }
 
</style>