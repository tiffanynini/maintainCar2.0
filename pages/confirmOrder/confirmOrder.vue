<template>
	<view class="container">
		<view class="context">
			<view class="header">
				<view>
					<text class="iconfont icon-dingwei1 header-icon1"></text>
				</view>
				<view class="head-middle">
					<text space="emsp">梁先森 17600000000</text>
					<text space="emsp">广东省佛山市某某镇某某街道某某村某某巷15号</text>
				</view>
				<view>
					<navigator class="iconfont icon-jiantou header-icon2" url="../addressManage/addressManage" open-type="navigate"></navigator>
				</view>
			</view>
		</view>
		<view class="section">
			<view>
				<text>自营店</text>
			</view>
			<view class="set-middle">
				<view class="set1-middle">
					<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=ed2c33fc3f37644f09247f0de49812ec563ceab3e7d8ec4c251f4a1ca413d8a1"></image>
				</view>
				<view class="set1-bottom">
					<text>汽车贴膜（每10CM）</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<text>单价：1×29.9</text>
				</view>
			</view>
			<view class="set-bottom">
				<text>商品价格</text>
				<text>¥ 29.9</text>
			</view>
			<view class="set-bottom">
				<text>优惠</text>
				<text>¥ 0</text>
			</view>
			<view class="set-bottom">
				<text>小计</text>
				<text id="xiaoJi">¥ 29.9</text>
			</view>
			<view class="set-bottom">
				<text>邮费</text>
				<text>¥ 29.9</text>
			</view>
			<view class="set-bottom">
				<text>支付方式</text>
				<view class="method">
					<view class="payMethod" :class="status?'active':''" @click="payMethods">在线支付</view>
					<view class="payMethod" :class="status?'':'active'" @click="payMethods">货到付款</view>
				</view>
			</view>
			<view class="set-order">
				<text class="beiZhu">订单备注</text>
				<textarea />
			</view>
		</view>
		<view class="bu"></view>
		<view class="footer">
			<text class="footer-font">总额：<text class="money" space="emsp"> xx </text> 元</text>
			<navigator url="../orderDetail/orderDetail" open-type="navigate">
			    <view class="footer-btn">确认订单</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				status:1 //在线支付为1，货到付款为0
			}
		},
		methods:{
			payMethods(){
				
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
			padding-left: 10rpx;
			margin: 20rpx 0rpx;
			.header{
				height: 110rpx;
				display: flex;
				justify-content: space-around;
				>view:first-child{
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
					margin-top: 8rpx;
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
		}
	}
	.section{
		margin-top: 24rpx;
		padding-left: 20rpx;
		background-color: #fff;
		margin-bottom: 24rpx;
		>view:first-child{
			height: 46rpx;
			font-size: 32rpx;
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
			height: 52rpx;
			line-height: 52rpx;
			>text:last-child{
				padding-right: 20rpx;
				color: #7F7F7F;
			}
			#xiaoJi{
				color: #D9001B;
			}
			.method{
				display: flex;
				.payMethod{
					width: 142rpx;
					height: 42rpx;
					border: 1px #D7D7D7 solid;
					text-align: center;
					font-size: 24rpx;
					line-height: 42rpx;
					border-radius: 10rpx;
					margin-right: 20rpx;
				}
			}
		}
		.set-order{
			display: flex;
			margin-top: 20rpx;
			height: 120rpx;
			.beiZhu{
				font-size: 28rpx;
				margin-right: 20rpx;
			}
			textarea{
				border: 1px #eee solid;
				width: 80%;
				height: 100rpx;
				border-radius: 16rpx;
			}
		}
	}
	.active{
		background-color:#50C6F8;
		color: #fff;
	}
	.bu{
		height: 70rpx;
	}
	.footer{
		background-color: #fff;
		font-size: 32rpx;
		position: fixed;
		bottom: 0;
		left: 0rpx;
		padding-left: 20rpx;
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		.footer-font{
			.money{
				color: #F53218;
			}
		}
		navigator{
			.footer-btn{
				width: 140rpx;
				height: 50rpx;
				background-color: #F53218;
				border-radius: 12rpx;
				color: #fff;
				text-align: center;
				line-height: 50rpx;
				margin-right: 40rpx;
				font-size: 30rpx;
			}
		}
	}
</style>
