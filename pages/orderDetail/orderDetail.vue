<template>
	<view class="container">
		<view class="context">
			<view class="header">
				<text space="emsp">订单编号 2019102100000001</text>
			</view>
			<view>
				<text>未付款</text>
			</view>
		</view>
		<view class="section">
			<view class="set-content">
				<text space="emsp">下单时间：20191021 14:44</text>
			</view>
			<view class="set-content">
				<text>订单备注：</text>
			</view>
			<view class="set-middle">
				<view class="set1-middle">
					<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=ed2c33fc3f37644f09247f0de49812ec563ceab3e7d8ec4c251f4a1ca413d8a1"></image>
				</view>
				<view class="set1-bottom">
					<text>汽车贴膜（每10CM）</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<text>1×29.9</text>
				</view>
			</view>
			<view class="set-bottom">
				<text>小计</text>
				<text>¥ 29.9</text>
			</view>
			<view class="set-bottom">
				<text>邮费</text>
				<text>¥ 0</text>
			</view>
			<view class="set-bottom">
				<text>应付金额</text>
				<text>¥ 29.9</text>
			</view>
		</view>
		<view class="section2">
			<view>
				<text class="iconfont icon-dingwei1 header-icon1"></text>
			</view>
			<view class="head-middle">
				<text space="emsp">梁先森 17600000000</text>
				<text space="emsp">广东省佛山市某某镇某某街道某某村某某巷15号</text>
			</view>
		</view>
		<view class="section3">
			<view>
				<text>支付方式</text>
				<text>在线支付</text>
			</view>
			<view>
				<label class="radio">
					<radio value="r1" checked="true" class="set3-radio" />
					<text class="iconfont icon-zhifubao zfb-icon"></text>
					<text class="zfb-content">支付宝客户端</text>
				</label>
			</view>
		</view>
		<view class="bu"></view>
		<view class="footer">
			<view></view>
			<view>
				<navigator url="../paymentResults/paymentResults?index=0" open-type="navigate">
					<view class="footer-btn">取消订单</view>
				</navigator>
				<navigator url="../paymentResults/paymentResults?index=1" open-type="navigate">
					<view class="footer-btn">立即支付</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				focus:true
			}
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	
	body,html{
		height: 100%;
	}
	.container{
		color:#333333;
		background-color: #F4F4F3;
		height: 100%;
		.context{
			background-color: #fff;
			    padding: 0rpx 20rpx;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: flex;
			    -webkit-justify-content: space-around;
			    justify-content: space-between;
			    font-size: 32rpx;
			    height: 66rpx;
			    align-items: center;
			.header{
				>view:first-child{
					>text{
						font-size: 32rpx;
					}
				}
			}
			>view:last-child{
				width: 110rpx;
				height: 42rpx;
				background: #F53218;
				border-radius: 20rpx;
				text-align: center;
				line-height: 34rpx;
				>text{
					font-size: 24rpx;
					color: #fff;
				}
			}
		}
	}
	.section2{
		background-color: #fff;
		height: 110rpx;
		display: flex;
		justify-content: space-around;
		>view:first-child{
			flex: 1;
			.header-icon1{
				color: #FD8F33;
				line-height: 110rpx;
				font-size: 66rpx;
			}
		}
		.head-middle{
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			flex-direction: column;
			font-size: 32rpx;
			margin-top: 18rpx;
			-webkit-box-flex: 4;
			-webkit-flex: 4;
			flex: 8;
			text:last-child{
				font-size: 28rpx;
				line-height: 44rpx;
			}
		}
		>view:last-child{
			.header-icon2{
				color: #AAAABD;
				line-height: 80rpx;
				font-size: 30rpx;
			}
		}
	}
	.section{
		margin-top: 24rpx;
		padding-left: 20rpx;
		background-color: #fff;
		margin-bottom: 24rpx;
		.set-content{
			font-size: 32rpx;
			height: 50rpx;
			line-height: 50rpx;
			padding-top: 8rpx;
		}
		.set-middle{
			display: flex;
			padding-top: 18rpx;
			height: 138rpx;
			border-top: 1px solid #F2F2F2;
			border-bottom: 1px solid #FAFAFA;
			.set1-middle{
				margin-right: 30rpx;
				image{
					width: 164rpx;
					height: 120rpx;
				}
			}
			.set1-bottom{
				display: flex;
				flex-direction: column;
				font-size: 32rpx;
				width: 100%;
				.set1-p2{
					color: #AAAAAA;
					font-size: 30rpx;
				}
			}
		}
		.set-bottom{
			display: flex;
			font-size: 30rpx;
			justify-content: space-between;
			height: 60rpx;
			line-height: 60rpx;
			>text:last-child{
				padding-right: 20rpx;
				color: #D9001B;
			}
		}
	}
	.section3{
		background-color: #fff;
		margin-top: 24rpx;
		>view:first-child{
			display: flex;
			font-size: 28rpx;
			justify-content: space-between;
			border-bottom: 1px #eee solid;
			height: 65rpx;
			align-items: center;
			>text{
				padding: 10rpx;
			}
		}
		>view:last-child{
			padding: 10rpx 20rpx;
			.set3-radio{
				transform: scale(0.5);
			}
			.zfb-icon{
				font-size: 58rpx;
				margin-right: 10rpx;
				vertical-align: middle;
			}
			.zfb-content{
				font-size: 30rpx;
			}
		}
	}
	.bu{
		height: 70rpx;
	}
	.footer{
		background-color: #fff;
		font-size: 32rpx;
		position: fixed;
		bottom: 0;
		right: 0rpx;
		height: 70rpx;
		display: flex;
		width: 100%;
		align-items: center;
		>view:first-child{
			flex: 5;
		}
		>view:last-child{
			display: flex;
			justify-content: space-between;
			navigator{
				.footer-btn{
					width: 170rpx;
					height: 50rpx;
					border-radius: 12rpx;
					text-align: center;
					line-height: 50rpx;
					margin-right: 20rpx;
					font-size: 26rpx;
					border: 1px #AAAAAA solid;
					&:active{
						background-color: #F53218;
						color: #fff;
					}
				}
			}
		}
	}
</style>
