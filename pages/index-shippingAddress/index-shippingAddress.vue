<template>
	<view class="addressManage">
		<!-- 添加收货地址 -->
		<view class="addShipping">
			<view class="addShipping1">
				添加收货地址
			</view>
		</view>
		<!-- 默认地址 -->
		<view class="addressInfo" @click="shipAddress">
			<view class="addressInfo1">
				<!-- 图标 -->
				<view class="iconfont icon-dingwei addressIcon"></view>
				<!-- 信息 -->
				<view class="orderInfo">
					<view class="orderInfo1">
						<view class="">梁先生</view>
						<view class="orderTel">17600000000</view>
					</view>
					<view class="orderAddress">广东省佛山市某某镇某某街道某某村某某巷15号</view>
				</view>
				<!-- 箭头 -->
				<view class="iconfont">></view>
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
				token:'88318de7a5b44fc0aa43fadf22e1980a',
			};
		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");
	.addressManage{
		height: 100%;
		background-color: #F3F4F6;
		// 添加收货地址
		.addShipping{
			height: 90rpx;
			background-color: #F3F4F6;
			padding: 24rpx;
			.addShipping1{
				background-color: #fff;
				height: 100%;
				width: 100%;
				border: 2rpx solid #C0C0C0;
				border-radius: 12rpx;
				text-align: center;
				line-height: 90rpx;
				font-size: 30rpx;
			}
		}
	}
	// 地址
	.addressInfo{
		overflow: hidden;
		height: 180rpx;
		background-color: #F3F4F6;
		.addressInfo1{
			display: flex;
			width: 100%;
			height: 140rpx;
			background-color: #fff;
			margin-bottom: 40rpx;
			align-items: center;
			// 图标
			.addressIcon{
				color: #FD8F33;
				font-size: 80rpx;
				margin: 0 20rpx;
			}
			// 信息
			.orderInfo{
				flex: 1;
				// background-color: pink;
				height: 100%;
				.orderInfo1{
					display: flex;
					height: 90rpx;
					align-items: center;
					// background-color: red;
					.orderTel{
						color: #ccc;
						font-size: 24rpx;
						margin-left: 20rpx;
					}
				}
				.orderAddress{
					font-size: 26rpx;
				}
			}
			// 箭头
			.orderArrow{
				width: 50rpx;
				color: #ccc;
			}
		}
		
	}
</style>
