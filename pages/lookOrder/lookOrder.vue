<template>
	<view>
		<view class="container">
			<view class="context">
				<view class="header">
					<image src="../../static/images/bao.png"></image>
				</view>
				<view>
					<text>{{jYMsg}}</text>
					<text>再逛逛，下一件一定是有缘分的宝贝</text>
				</view>
			</view>
			<view class="section">
				<view class="section1">
					<text>自营店</text>
				</view>
				<view class="section2">
					<view class="set1-middle">
						<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>汽车贴膜（每10CM）</text>
							<text>￥29.9</text>
						</view>
						<view>
							<text class="set1-p2">汽车类型：轿车  位置：全车</text>
							<text class="set1-p2">×3</text>
						</view>
					</view>
				</view>
				<view class="addCar">
					<view></view>
					<view>加入购物车</view>
				</view>
				<view class="totalMoney">
					<view></view>
					<view>实付款：
						<text>￥151.05</text>
					</view>
				</view>
			</view>
			<view class="section">
				<view class="section1">
					<text>自营店</text>
				</view>
				<view class="section2">
					<view class="set1-middle">
						<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>汽车贴膜（每10CM）</text>
							<text>￥29.9</text>
						</view>
						<view>
							<text class="set1-p2">汽车类型：轿车  位置：全车</text>
							<text class="set1-p2">×3</text>
						</view>
					</view>
				</view>
				<view class="addCar">
					<view></view>
					<view>加入购物车</view>
				</view>
				<view class="totalMoney">
					<view></view>
					<view>实付款：
						<text>￥151.05</text>
					</view>
				</view>
			</view>
			<view class="orderMsg">
				<view class="footer">
					<view>
						<text>订单信息</text>
					</view>
					<view class="shAddress">
						<text>收货信息：</text>
						<text>梁先森，17600000000，广东省佛山市某某镇某某街道某某村某某巷15号</text>
					</view>
					<view class="orderNumber">
						<text>订单编号：</text>
						<text>2019102100000001</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bu"></view>
		<view class="fixedContent">
			<view></view>
			<view>
				<view class="delOrder">删除订单</view>
				<view>加入购物车</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				jYMsg:'',
			}
		},
		onLoad(options){
			if(options.msg == '支付成功'){
				this.jYMsg = '交易已完成'
			}else{
				this.jYMsg = '交易已取消'
			}
		},
	}
</script>

<style lang="less">
	.container{
		color:#333333;
		background-color: #F4F4F3;
		height: 100%;
		overflow: hidden;
		.context{
			background-color: #fff;
			margin: 20rpx 0rpx 0rpx 0rpx;
			display: flex;
			justify-content: space-between;
			font-size: 32rpx;
			height: 120rpx;
			align-items: center;
			padding: 0rpx 20rpx;
			.header{
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			>view:last-child{
				display: flex;
				flex-direction: column;
				width: 100%;
				margin-left: 26rpx;
				>text:first-child{
					font-size: 34rpx;
					color: #000;
					line-height: 48rpx;
				}
				>text:last-child{
					font-size: 24rpx;
					color: #AAAAAA;
				}
			}
		}
	}
	.section{
		margin-top: 24rpx;
		background-color: #fff;
	}
	.orderMsg{
		background-color: #fff;
		margin-top: 24rpx;
	}
	.section1{
		border-bottom: 2px solid #F2F2F2;
		height: 68rpx;
		line-height: 68rpx;
		text{
			font-size: 32rpx;
			padding-left: 20rpx;
		}
	}
	.section2{
		display: flex;
		margin-top: 20rpx;
		.set1-middle{
			margin-right: 24;
			padding-left: 24rpx;
			image{
				width: 200rpx;
				height: 160rpx;
				border-radius: 16rpx;
			}
		}
		.set1-bottom{
			display: flex;
			flex-direction: column;
			font-size: 32rpx;
			width: 100%;
			padding-right: 24rpx;
			margin-left: 20rpx;
			>view:first-child{
				display: flex;
				justify-content: space-between;
				margin-top: 10rpx;
				>text{
					font-size: 30rpx;
					line-height: 48rpx;
				}
				image{
					width: 38rpx;
					height: 40rpx;
					padding-right: 20rpx;
				}
			}
			>view:last-child{
				display: flex;
				justify-content: space-between;
				.set1-p2{
					color: #AAAAAA;
					font-size: 32rpx;
					margin-top: 14rpx;
				}
			}
		}
	}
	.addCar{
		display: flex;
		padding-right: 20rpx;
		>view:first-child{
			flex:6;
		}
		>view:last-child{
			flex: 2;
			height: 56rpx;
			border: 1px #AAAAAA solid;
			border-radius: 40rpx;
			font-size: 28rpx;
			text-align: center;
			line-height: 56rpx;
		}
	}
	.totalMoney{
		display: flex;
		padding-right: 20rpx;
		>view:first-child{
			flex:3;
		}
		>view:last-child{
			flex: 2;
			height: 56rpx;
			font-size: 33rpx;
			text-align: center;
			margin-top: 20rpx;
			>text{
				color: red;
			}
		}
	}
	.footer{
		margin-top: 20rpx;
		background-color: #fff;
		>view:first-child{
			font-size: 36rpx;
			padding-left: 20rpx;
			padding-top: 16rpx;
		}
		.shAddress{
			display: flex;
			justify-content: space-between;
			padding-left: 20rpx;
			padding-right: 20rpx;
			>text:first-child{
				font-size: 32rpx;
				height: 100rpx;
				flex: 1;
				line-height: 100rpx;
			}
			>text:last-child{
				font-size: 32rpx;
				flex: 3;
				height: 100rpx;
				line-height: 44rpx;
			}
		}
		.orderNumber{
			display: flex;
			justify-content: space-between;
			padding-left: 20rpx;
			padding-right: 20rpx;
			>text:first-child{
				font-size: 32rpx;
				flex: 1;
			}
			>text:last-child{
				font-size: 32rpx;
				flex: 3;
			}
		}
	}
	.bu{
		height: 100rpx;
	}
	.fixedContent{
		position: fixed;
		bottom: 0;
		left: 0;
		padding-left: 20rpx;
		padding-right: 20rpx;
		background-color: #fff;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		height: 70rpx;
		width: 100%;
		>view:first-child{
			flex: 1;
		}
		>view:last-child{
			flex: 1;
			display: flex;
			padding-right: 34rpx;
			>view:first-child{
				height: 60rpx;
				border: 1px #AAAAAA solid;
				border-radius: 40rpx;
				font-size: 24rpx;
				text-align: center;
				line-height: 60rpx;
				flex: 2;
				margin-right: 20rpx;
			}
			>view:last-child{
				flex: 2;
				height: 60rpx;
				border: 1px #AAAAAA solid;
				border-radius: 40rpx;
				font-size: 24rpx;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
</style>
