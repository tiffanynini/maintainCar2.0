<template>
	<view class="order">
		<!-- 地址 -->
		<view class="addressInfo" @click="shipAddress">
			<view class="addressInfo1">
				<!-- 图标 -->
				<view class="iconfont icon-dingwei addressIcon"></view>
				<!-- 信息 -->
				<view class="orderInfo">
					<view class="orderInfo1">
						<view class="">{{shippingAddress.receiverName}}</view>
						<view class="orderTel">{{shippingAddress.receiverPhone}}</view>
					</view>
					<view class="orderAddress">{{shippingAddress.receiverAddress}}</view>
				</view>
				<!-- 箭头 -->
				<view class="orderArrow">></view>
			</view>
		</view>
		<!-- 订单 -->
		<view class="orderDetail">
			<view class="orderStore">自营店</view>
			<!-- 商品信息 -->
			<view class="orderCommodity">
				<!-- 图片 -->
				<view class="orderImg">
					<image src="../../static/images-index/beatifulcar1.jpg" mode=""></image>
				</view>
				<!-- 描述 -->
				<view class="orderDescript">
					<view class="orderDes1">
						汽车贴膜（每10CM）
					</view>
					<view class="orderDes2">汽车类型：轿车 位置：全车</view>
					<!-- 价格 -->
					<view class="orderDes3">
						<view class="">1</view><text>x</text>
						<view class="">29.9</view>
					</view>
				</view>
			</view>
			<!-- 详细信息 -->
			<view class="detailInfo">
				<!-- 商品价格 -->
				<view class="detailPrice">
					<view class="">商品价格</view>
					<view class="price1">￥29.9</view>
				</view>
				<!-- 优惠 -->
				<view class="detailPrice">
					<view class="">优惠</view>
					<view class="price1">￥0</view>
				</view>
				<!-- 小计 -->
				<view class="detailPrice">
					<view class="">小计</view>
					<view class="price2">￥29.9</view>
				</view>
				<!-- 邮费 -->
				<view class="detailPrice">
					<view class="">邮费</view>
					<view class="price1">￥0</view>
				</view>
			</view>
			<!-- 支付方式 -->
			<view class="payType">
				<view class="">支付方式</view>
				<!-- 按钮 -->
				<view class="payBtn">
					<view class="payBtn1 active">在线支付</view>
					<view class="payBtn1">货到付款</view>
				</view>
				
			</view>
			<!-- 订单备注 -->
			<view class="orderMsg">
				<text>订单备注</text>
				<textarea value="" placeholder="" />
			</view>
		</view>
		<!-- 总金额 -->
		<view class="totalMoney1"></view>
		<view class="totalMoney">
			<view class="totalMoney1">
				<view class="">总额</view>
				<view class="totalMoneyRed">29.9</view>
				<view class="">元</view>
			</view>
			<!-- 确认订单 -->
			<view class="affirmOrder"  @click="enterOrderDetail">
				确认订单
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
				// 收货地址
				shippingAddress:{
					receiverName:'小王',
					receiverAddress:'天府三街',
					receiverPhone:'111111111'
				}
			};
		},
		methods:{
			// 进入订单详情
			enterOrderDetail(){
				wx.navigateTo({
					url:'../index-orderDetail/index-orderDetail'
				});
			},
			// 进入修改收货地址界面
			shipAddress(){
				wx.navigateTo({
					url:'../location/location'
				});
			}
		},
		onLoad() {
			// 收货地址
			uni.request({
				url:this.pageUrl.pageUrl+'/order/address?userId=1',
				method:'get',
				header:{
					token:this.token
				},
				success: (res) => {
					console.log(res.data.data);
				}
				
			});
			// 取出session
			var v=wx.getStorageSync('bbb');
			console.log(v);
		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");
	.order{
		height: 100%;
		background-color: #F3F4F6;
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
				margin-top: 40rpx;
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
		// 订单
		.orderDetail{
			// height: 600rpx;
			background-color: #fff;
			margin-top: 30rpx;
			// 自营店
			.orderStore{
				height: 80rpx;
				line-height: 80rpx;
				padding-left: 20rpx;
				// background-color: pink;
				border-bottom: 2rpx solid #F3F4F6;
			}
			// 商品信息
			.orderCommodity{
				height: 130rpx;
				border-bottom: 1rpx solid #F3F4F6;
				padding: 20rpx;
				display: flex;
				align-items: center;
				// 图片
				.orderImg{
					width: 180rpx;
					height: 100%;
					background-color: red;
					image{
						width: 100%;
						height: 100%;
					}
				}
				// 描述
				.orderDescript{
					flex: 1;
					height: 100%;
					margin-left: 20rpx;
					.orderDes1{
						font-size: 30rpx;
					}
					.orderDes2{
						font-size: 28rpx;
						color: #ccc;
					}
					.orderDes3{
						display: flex;
						height: 44rpx;
						align-items: flex-end;
					}
				}
			}
			//详细信息
			 .detailInfo{
				 // height: 300rpx;
				 border-bottom: 2rpx solid #F3F4F6;
				 .detailPrice{
					 display: flex;
					 justify-content: space-between;
					 padding: 20rpx;
					 height: 40rpx;
					 // background-color: pink;
					 font-size: 28rpx;
					 .price1{
						 color: #ccc;
						 // font-size: ;
					 }
					 .price2{
						 color: red;
					 }
				 }
			 }
			// 支付方式
			.payType{
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				font-size: 30rpx;
				height: 50rpx;
				// background-color: pink;
				border-bottom: 2rpx solid #F3F4F6;
				.payBtn{
					display: flex;
					width: 340rpx;
					// background-color: red;
					height: 50rpx;
					font-size: 26rpx;
					.payBtn1{
						width: 150rpx;
						height: 50rpx;
						border: 2rpx solid #ccc;
						color: #ccc;
						text-align: center;
						line-height: 50rpx;
						border-radius: 10rpx;
						margin-left: 20rpx;
					}
					.active{
						border: 2rpx solid skyblue;
					}
				}
			}
			// 订单备注
			.orderMsg{
				height: 120rpx;
				display: flex;
				font-size: 28rpx;
				padding: 20rpx;
				textarea{
					border: 2rpx solid #ccc;
					height: 120rpx;
					border-radius: 10rpx;
					flex: 1;
					margin-left: 20rpx;
				}
			}
		}
		// 金额
		.totalMoney1{
			height: 100rpx;
			width: 100%;
		}
		.totalMoney{
			position: absolute;
			bottom: 0;
			left: 0;
			height: 100rpx;
			background-color: #fff;
			width: 100%;
			font-size: 28rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.totalMoney1{
				width: 220rpx;
				// background-color: red;
				display: flex;
				justify-content: center;
				align-items: center;
				.totalMoneyRed{
					color: red;
					font-size: 32rpx;
				}
			}
			.affirmOrder{
				width: 160rpx;
				height: 60rpx;
				background-color: red;
				color: #fff;
				border-radius: 10rpx;
				margin-right: 20rpx;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
</style>
