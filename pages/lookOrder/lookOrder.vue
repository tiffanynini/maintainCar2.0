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
			<view class="section" v-for="(v,i) in orderMsg" :key="i">
				<view class="section1">
					<text>{{v.merchantName}}</text>
				</view>
				<view class="section2" v-for="(val,index) in v.content" :key="index">
					<view class="set1-middle">
						<image :src="val.image"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>{{val.name}}</text>
							<text>￥{{val.price}}</text>
						</view>
						<view>
							<text class="set1-p2">汽车类型：轿车  位置：全车</text>
							<text class="set1-p2">×{{val.num}}</text>
						</view>
					</view>
				</view>
				<view class="totalMoney">
					<view></view>
					<view>实付款：
						<text>￥{{v.price}}</text>
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
						<text>{{address.receiverName}}，{{address.receiverPhone}}，{{address.receiverProvince}}{{address.receiverCity}}{{address.receiverTown}}{{address.receiverAddress}}</text>
					</view>
					<view class="orderNumber">
						<text>订单编号：</text>
						<text>{{orderId}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bu"></view>
		<!-- <view class="fixedContent">
			<view></view>
			<view>
				<view class="delOrder">删除订单</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				jYMsg:'',
				orderMsg:[],
				//订单编号
				orderId:'',
				//渲染地址
				address:{
					receiverName:'梁先森',
					receiverPhone:'17600000000',
					receiverProvince:'广东省',
					receiverCity:'佛山市',
					receiverTown:'某某镇',
					receiverAddress:'某某街道某某村某某巷15号',
					def:'0',//0是未选中，1是选中,
					userId:'2'
				},
			}
		},
		mounted(){
			this.initAddress();
			this.initData();
			this.orderId = wx.getStorageSync('orderId');
		},
		methods:{
			initData(){
				let checkData = wx.getStorageSync('checkId');
				//将满足要求的数据写到skuData数组中
				for(let i= 0;i<checkData.length;i++){
					for(let j=i+1;j<checkData.length;j++){
						if(checkData[i].merchantId === checkData[j].merchantId){
							//合并content部分
							checkData[i].content.push(checkData[j].content[0]);
							//剔除对应的checkid
							checkData.splice(j,1);
							//一定要回退一下，不然不对
							j--;
						}
					}
				}
				this.orderMsg = checkData;
				
				//循环取得商品价格
				for(let i= 0;i<this.orderMsg.length;i++){
					let res = 0;
					for(let j=0;j<this.orderMsg[i].content.length;j++){
						res += this.orderMsg[i].content[j].totalPrice;
					}
					this.orderMsg[i].price = res;
				}
			},
			
			initAddress(){
				//初始化渲染页面
				wx.request({
					url:'http://172.16.14.29:6067/order/{id}?id='+wx.getStorageSync('addressId'),
					method:'get',
					header:{
						token: wx.getStorageSync('token')
					},
					success:(res)=>{
						// console.log(res);
						if(res.statusCode === 200){
							if(typeof res.data.data==='object'){
								this.address = res.data.data;
							}
						}
					},
					fail:(err)=>{
						console.log(err);
					}
				})
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
	.totalMoney{
		display: flex;
		padding-right: 20rpx;
		>view:first-child{
			flex:4;
		}
		>view:last-child{
			flex: 2;
			height: 56rpx;
			font-size: 33rpx;
			// text-align: center;
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
	// .fixedContent{
	// 	position: fixed;
	// 	bottom: 0;
	// 	left: 0;
	// 	padding-left: 20rpx;
	// 	padding-right: 20rpx;
	// 	background-color: #fff;
	// 	display: -webkit-box;
	// 	display: -webkit-flex;
	// 	display: flex;
	// 	height: 70rpx;
	// 	width: 100%;
	// 	>view:first-child{
	// 		flex: 1;
	// 	}
	// 	>view:last-child{
	// 		flex: 1;
	// 		display: flex;
	// 		padding-right: 34rpx;
	// 		>view:first-child{
	// 			height: 60rpx;
	// 			border: 1px #AAAAAA solid;
	// 			border-radius: 40rpx;
	// 			font-size: 24rpx;
	// 			text-align: center;
	// 			line-height: 60rpx;
	// 			margin-right: 20rpx;
	// 		}
	// 	}
	// }
</style>
