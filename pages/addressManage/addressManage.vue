<template>
	<view class="container">
		<view class="header">
			<navigator url="../addAddress/addAddress" open-type="navigate">添加收货地址</navigator>
		</view>
		<view class="section">
			<view>
				<text class="iconfont icon-dingwei1 header-icon1"></text>
			</view>
			<view class="head-middle">
				<text space="emsp">梁先森 17600000000</text>
				<text space="emsp">广东省佛山市某某镇某某街道某某村某某巷15号</text>
			</view>
			<view>
				<navigator url="../editAddress/editAddress" open-type="navigate">
					<image src="../../static/images/edit.png"></image>
				</navigator>
			</view>
		</view>
		<view class="section">
			<view>
				<text class="iconfont icon-dingwei1 header-icon1"></text>
			</view>
			<view class="head-middle">
				<text space="emsp">梁先森 17600000000</text>
				<text space="emsp">广东省佛山市某某镇某某街道某某村某某巷15号</text>
			</view>
			<view>
				<navigator url="../editAddress/editAddress" open-type="navigate">
					<image src="../../static/images/edit.png"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	body,html{
		height: 100%;
	}
	.container{
		background-color: #F4F4F3;
		height: 100%;
		overflow: hidden;
	}
	.header{
		background-color: #fff;
		border: 1px #eee solid;
		border-radius: 24rpx;
		height: 80rpx;
		margin: 24rpx 12rpx;
		navigator{
			font-size: 36rpx;
			text-align: center;
			display: block;
			line-height: 80rpx;
		}
	}
	.section{
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		background: #fff;
		margin-bottom: 24rpx;
		>view:first-child{
			margin-top: 20rpx;
			.header-icon1{
				color: #FD8F33;
				line-height: 80rpx;
				font-size: 66rpx;
			}
		}
		.head-middle{
			display: flex;
			flex-direction: column;
			font-size: 32rpx;
			margin-top: 20rpx;
			text:last-child{
				font-size: 28rpx;
				line-height: 44rpx;
			}
		}
		>view:last-child{
			margin-top: 40rpx;
			navigator{
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			
		}
	}
	
</style>
