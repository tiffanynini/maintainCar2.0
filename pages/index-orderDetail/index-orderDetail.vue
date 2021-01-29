<template>
	<view class="orderDetail">
		<!-- 订单编号 -->
		<view class="orderNum1">
			<view class="orderNum">
				<view class="">
				订单编号  2019102100000001
				</view>
				<!-- 未付款 -->
				<view class="unpaid">
					未付款
				</view>
			</view>
		</view>
		<!-- 详细信息 -->
		<view class="detailInfo">
			<!-- 订单时间 -->
			<view class="detailTime">
				<view class="">
					下单时间：20191021 14:44
				</view>
				<view class="">
					订单备注:
				</view>
			</view>
			<!-- 有图 -->
			<view class="hasImg">
				<!-- 图片 -->
				<view class="hasImg1"></view>
				<!-- 描述 -->
				<view class="des">
					<view class="">汽车贴膜（每10CM）</view>
					<view class="des1">汽车类型：轿车 位置：全车</view>
					<view class="desPrice">
						<view class="">1</view>
						<view class="">x</view>
						<view class="">29.9</view>
					</view>
				</view>
			</view>
			<!-- 有图 -->
			<view class="hasImg">
				<!-- 图片 -->
				<view class="hasImg1"></view>
				<!-- 描述 -->
				<view class="des">
					<view class="">汽车贴膜（每10CM）</view>
					<view class="des1">汽车类型：轿车 位置：全车</view>
					<view class="desPrice">
						<view class="">1</view>
						<view class="">x</view>
						<view class="">29.9</view>
					</view>
				</view>
			</view>
			<!-- 支付详细 -->
			<view class="payInfo">
				<!-- 小计 -->
				<view class="subtotal">
					<view class="">小计</view>
					<view class="subtotal1">￥29.9</view>
				</view>
				<!-- 邮费 -->
				<view class="subtotal">
					<view class="">邮费</view>
					<view class="subtotal1">￥0</view>
				</view>
			</view>
			<!-- 应付金额 -->
			<view class="payMoney">
				<view class="">应付金额</view>
				<view class="payMoney1">￥29.9</view>
			</view>
		</view>
		<!-- 收货人 -->
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
			</view>
		</view>
		<!-- 支付方式 -->
		<view class="payType">
			<view class="payText">
				<view class="">支付方式</view>
				<view class="payText1">在线支付</view>
			</view>
			<view class="">
					<label class="payZhifubao">
						<checkbox value="" checked="true" />
							<view class="pay2">
								<!-- 支付宝图片 -->
								<view class="iconfont icon-zhifubao zhifubao1"></view>
								<text>支付宝客户端</text>
							</view>
					</label>
			</view>
		</view>
		<!-- 立即支付 -->
		<view class="nowPay">
			<view class="nowPay1">
				<view class="orderBtn">取消订单</view>
				<view class="orderBtn active"  @click="paySuccess">立即支付</view>
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
		},
		methods:{
			// 支付成功
			paySuccess(){
				wx.navigateTo({
					url:'../index-paySuccess/index-paySuccess'
				});
			}
		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");
	.orderDetail{
		height: 100%;
		background-color: #F4F4F3;
		// 订单编号
		.orderNum1{
			height: 120rpx;
			background-color: #F4F4F3;
			overflow: hidden;
			.orderNum{
				height: 100rpx;
				background-color: #fff;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 20rpx;
				font-size: 30rpx;
				// 未付款
				.unpaid{
					width: 120rpx;
					height: 46rpx;
					text-align: center;
					border-radius: 30rpx;
					background-color: red;
					color: #fff;
					font-size: 26rpx;
					line-height: 46rpx;
				}
			}
			
		}
		// 详细信息
		.detailInfo{
			margin-top: 20rpx;
			background-color: #fff;
			font-size: 30rpx;
			padding: 20rpx;
			// <!-- 订单时间 -->
			.detailTime{
				height: 110rpx;
				border-bottom: 2rpx solid #F4F4F3;
				line-height: 50rpx;
			}
			// 有图
			.hasImg{
				padding:20rpx 0;
				border-bottom: 2rpx solid #F4F4F3;
				display: flex;
				// background-color: pink;
				height: 120rpx;
				// 图片
				.hasImg1{
					width: 160rpx;
					background-color: red;
					height: 120rpx;
					margin-right: 20rpx;
					background: url(https://zhangwei-1304470545.cos.ap-chengdu.myqcloud.com/chenjie/beatifulcar2.jpg);
					background-size: contain;
				}
				.des{
					font-size: 28rpx;
					.des1{
						color: #ccc;
						font-size: 26rpx;
					}
					.desPrice{
						display: flex;
						height: 50rpx;
						// background-color: red;
						line-height: 50rpx;
					}
				}
			}
			// 支付详细
			.payInfo{
				border-bottom: 2rpx solid #F4F4F3;
				padding: 10rpx 0;
				// 小计
				.subtotal{
					height: 60rpx;
					// background-color: pink;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.subtotal1{
						color: red;
					}
				}
			}
			// 应付金额
			.payMoney{
				padding-top: 20rpx;
				height: 40rpx;
				display: flex;
				justify-content: space-between;
				.payMoney1{
					color: red;
				}
			}
		}
		// 收货人
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
			}
			
		}
		// 支付方式
		.payType{
			height: 160rpx;
			margin-top: 20rpx;
			background-color: #fff;
			.payText{
				height: 40rpx;
				padding: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30rpx;
				border-bottom: 2rpx solid #F4F4F3;
				.payText1{
					color: #C0C0C0;
					font-size: 28rpx;
				}
			}
			.payZhifubao{
				display: flex;
				font-size: 26rpx;
				padding: 20rpx;
				.pay2{
					display: flex;
					align-items: center;
					.zhifubao1{
						color: skyblue;
						font-size: 50rpx;
						margin-right: 10rpx;
					}
				}
			}
		}
		// 立即支付
		.nowPay{
			height: 90rpx;
			width: 100%;
			background-color: #fff;
			position: absolute;
			bottom: 0;
			display: flex;
			justify-content: flex-end;
			.nowPay1{
				display: flex;
				width: 360rpx;
				// background-color: pink;
				align-items: center;
			}
			.orderBtn{
				width: 160rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border: 2rpx solid #BCBEC2;
				margin-right: 20rpx;
				border-radius: 14rpx;
				font-size: 28rpx;
			}
			.active{
				background-color: red;
				color: #fff;
				border: 0;
			}
		}
	}
</style>
