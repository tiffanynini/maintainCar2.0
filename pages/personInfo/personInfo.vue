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
  flex-wrap: wrap;
  align-content: space-between;
  height: 140rpx;
  text{
   width: 100%;
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
 
 
</style>