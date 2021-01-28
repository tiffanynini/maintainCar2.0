<template>
	<view class="paySuccess">
		<!-- 支付成功 -->
		<view class="pay1">
			<!-- 图标 -->
			<view class="iconfont icon-zhifuchenggong payIcon"></view>
			<!-- 文字 -->
			<view class="paySuccess2">支付成功</view>
		</view>
		<!-- 按钮 -->
		<view class="payBtn">
			<!-- 返回首页 -->
			<view class="backBtn btnRed" @click="backIndex">
				返回首页
			</view>
			<!-- 查看订单 -->
			<view class="backBtn">
				查看订单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// ip
				ip:'http://172.16.14.29:6067',
				// token
				token:'88318de7a5b44fc0aa43fadf22e1980a'
			};
		},
		methods:{
			// 返回首页
			backIndex(){
				console.log(111)
				uni.switchTab({
				    url: '../index/index'
				});
			}
		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");
	.paySuccess{
		height: 100%;
		background-color: #F4F4F3;
		.pay1{
			height: 400rpx;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.payIcon{
				font-size: 200rpx;
				color: #2BBA43;
			}
			.paySuccess2{
				font-size: 40rpx;
			}
		}
		.payBtn{
			height: 100rpx;
			// background-color: pink;
			display: flex;
			justify-content: center;
			align-items: center;
			.backBtn{
				width: 280rpx;
				height: 74rpx;
				background-color: #fff;
				border: 2rpx solid #C8C8C8;
				border-radius: 14rpx;
				margin-right: 20rpx;
				text-align: center;
				line-height: 74rpx;
				font-size: 30rpx;
				// color: #fff;
			}
			.btnRed{
				background-color: red;
				color: #fff;
				border: 0;
			}
		}
	}
</style>
