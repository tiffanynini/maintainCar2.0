<template>
	<view>
		<view class="container">
		<view class="context">
			<navigator class="header" url="../addressManage/addressManage" open-type="navigate">
				<view>
					<text class="iconfont icon-dingwei1 header-icon1"></text>
				</view>
				<view class="head-middle">
					<text v-show="defaultAddress" class="defaultAddress">当前无默认地址</text>
					<text space="emsp" v-show="!defaultAddress">{{address.receiverName}} {{address.receiverPhone}}</text>
					<text space="emsp" v-show="!defaultAddress">{{address.receiverProvince}}{{address.receiverCity}}{{address.receiverTown}}{{address.receiverAddress}}</text>
				</view>
				<view>
					<view class="iconfont icon-jiantou header-icon2"></view>
				</view>
			</navigator>
		</view>
		<view class="section" v-for="(v,i) in confirmData" :key="i">
			<view>
				<text>{{v.merchantName}}</text>
			</view>
			<view class="set-middle" v-for="(val,index) in v.content" :key="index">
				<view class="set1-middle">
					<image :src="val.image"></image>
				</view>
				<view class="set1-bottom">
					<text>{{val.name}}</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<text>单价：{{val.num}}×{{val.price}}</text>
				</view>
			</view>
			<view class="set-bottom">
				<text>商品价格</text>
				<text>¥ {{v.price}}</text>
			</view>
			<view class="set-bottom">
				<text>优惠</text>
				<text>¥ {{v.youHui}}</text>
			</view>
			<view class="set-bottom">
				<text>小计</text>
				<text id="xiaoJi">¥ {{v.xiaoJi}}</text>
			</view>
			<view class="set-bottom set-btm">
				<text>邮费</text>
				<text>¥ {{v.youFei}}</text>
			</view>
		</view>
		<view class="section3">
			<text class="beiZhu">订单备注</text>
			<textarea v-model="beiZhu"/>
		</view>
		<view class="section2">
			<text>支付方式</text>
			<view class="method">
				<view class="payMethod" :class="status == 1?'active':''" @click="payMethods1">在线支付</view>
				<view class="payMethod" :class="status == 2?'active':''" @click="payMethods2">货到付款</view>
			</view>
		</view>
		<view class="bu"></view>
		<view class="footer">
			<text class="footer-font">总额：<text class="money" space="emsp"> {{totalJi}} </text> 元</text>
			<view class="footer-btn" @click="confirmOrder" :data-id="address.id">确认订单</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				status:1, //在线支付为1，货到付款为2
				//渲染的数据
				confirmData:[],
				defaultAddress:false,
				//渲染地址
				address:{
					receiverName:'',
					receiverPhone:'',
					receiverProvince:'',
					receiverCity:'',
					receiverTown:'',
					receiverAddress:'',
					def:'0',//0是未选中，1是选中,
					userId:'1',
					id:''
				},
				//总金额
				totalJi:0,
				beiZhu:'',
			}
		},
		mounted(){
			// wx.showLoading({
			// 	title:"加载中",
			// 	success:()=>{
			// 		this.initAddress();
			// 	}
			// })
			this.initData();
			
			this.initAddress();
		},
		onShow() {
			//重新渲染地址
			this.initAddress();
		},
		methods:{
			initData(){
				let checkData = wx.getStorageSync('checkId');
				this.totalJi = wx.getStorageSync('zongJiE');
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
				this.confirmData = checkData;
				
				//循环取得商品价格
				for(let i= 0;i<this.confirmData.length;i++){
					let res = 0;
					for(let j=0;j<this.confirmData[i].content.length;j++){
						res += this.confirmData[i].content[j].totalPrice;
					}
					this.confirmData[i].price = res;
					this.confirmData[i].xiaoJi = res;
				}
			},
			//初始化地址
			initAddress(){
				wx.request({
					url:'http://172.17.1.203:6067/order/address?userId='+wx.getStorageSync('userId'),
					method:'get',
					header:{
						token:wx.getStorageSync('token')
					},
					success:(res)=>{
						if(res.statusCode === 200 ){
							// wx.hideLoading();
							//如果有结果	
							if(res.data.data != null){
								this.address = res.data.data;
							}else{
								//当前无默认数据
								this.defaultAddress = true;
							}
						}
					},
					fail:(err)=>{
						console.log(err);
					}
				})
			},
			confirmOrder(e){
				//存储收获方式
				wx.setStorageSync('payMethod',this.status);
				//当前收货地址的id
				wx.setStorageSync('addressId',e.currentTarget.dataset.id);
				wx.request({
					url:'http://172.17.1.203:6067/order/create',
					method:'post',
					header:{
						token:wx.getStorageSync('token')
					},
					data:{
						"buyerMessage": this.beiZhu,
						"goodsIds": wx.getStorageSync('goodsIds'),
						"paymentType": this.status,
						//收货地址id
						"shippingId": e.currentTarget.dataset.id
					},
					success: (res) => {
						console.log(res);
						if(res.statusCode === 200){
							//将这一波数据整理好，存储在本地
							if(res.data.data.length >0){
								let tempSkuData = res.data.data;
								let tempOrderData = [];
								//存储订单编号
								wx.setStorageSync('orderId',tempSkuData[0].orderId);
								//最初的数据样式
								tempOrderData.push({
									merchantId:tempSkuData[0].merchantId,
									merchantName:tempSkuData[0].merchantName,
									buyerMessage:tempSkuData[0].buyerMessage,
									orderId:tempSkuData[0].orderId,
									"xiaoJi":0,
									"youFei":0,
									"totalMoney":0,
									content:[
										{
											"createTime":tempSkuData[0].createTime,
											"name": tempSkuData[0].name,
											"skuId": tempSkuData[0].skuId,
											"image": tempSkuData[0].image,
											"price": tempSkuData[0].price,
											"num": tempSkuData[0].num,
											"totalPrice": tempSkuData[0].totalPrice,
										}
									]
								});
								outer:
								for(let i=0;i<tempSkuData.length;i++){
									for(let j=i+1;j<tempSkuData.length;j++){
										if(tempSkuData[i].merchantId === tempSkuData[j].merchantId){
											//如果merchantId相等则将后者的数据合并到前者数据中
											tempOrderData[i].content.push(
												{
													"createTime":tempSkuData[j].createTime,
													"name": tempSkuData[j].name,
													"skuId": tempSkuData[j].skuId,
													"image": tempSkuData[j].image,
													"price": tempSkuData[j].price,
													"num": tempSkuData[j].num,
													"totalPrice": tempSkuData[j].totalPrice,
												},
											) 
										}else{
											//如果merchantId不相等则将后者的数据合并到初始化数据中
											tempOrderData.push({
												merchantId:tempSkuData[j].merchantId,
												merchantName:tempSkuData[j].merchantName,
												buyerMessage:tempSkuData[j].buyerMessage,
												orderId:tempSkuData[j].orderId,
												"xiaoJi":0,
												"youFei":0,
												"totalMoney":0,
												content:[
													{
														"createTime":tempSkuData[j].createTime,
														"name": tempSkuData[j].name,
														"skuId": tempSkuData[j].skuId,
														"image": tempSkuData[j].image,
														"price": tempSkuData[j].price,
														"num": tempSkuData[j].num,
														"totalPrice": tempSkuData[j].totalPrice,
													},
												]
											}) 
										}
									}
									break outer;//只循环一次
								}
								console.log(tempOrderData);
								wx.setStorageSync('orderDetailData',tempOrderData);
							}
						}
						wx.navigateTo({
							url:'../orderDetail/orderDetail'
						})
					},
					fail: (err) => {
						console.log(err);
					}
				})
				
			},
			payMethods1(){
				this.status = 1;
			},
			payMethods2(){
				this.status = 2;
			},
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
		overflow: hidden;
		.context{
			background-color: #fff;
			padding-left: 10rpx;
			margin: 20rpx 0rpx;
			.header{
				height: 110rpx;
				display: flex;
				justify-content: space-around;
				>view:first-child{
					margin-top: 12rpx;
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
					margin-top: 16rpx;
					.defaultAddress{
						font-size: 36rpx;
						color: #AAAAAA;
						line-height: 80rpx;
					}
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
						margin-top: 16rpx;
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
		.set-btm{
			padding-bottom: 26rpx;
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
	}
	.active{
		background-color:#50C6F8;
		color: #fff;
	}
	.section3{
		background-color: #fff;
		height: 160rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 24rpx;
		padding: 0rpx 10rpx;
		.beiZhu{
			font-size: 28rpx;
			margin-right: 20rpx;
		}
		textarea{
			border: 1px #eee solid;
			width: 80%;
			height: 100rpx;
			border-radius: 16rpx;
			font-size: 30rpx;
		}
	}
	.section2{
		background-color: #fff;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		>text:first-child{
			font-size: 30rpx;
			padding-left: 20rpx;
			flex: 2;
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
	.bu{
		height: 80rpx;
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
</style>
