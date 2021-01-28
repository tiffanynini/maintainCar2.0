<template>
	<view>
		<view class="container">
			<view class="context">
				<view class="header">
					<text space="emsp">订单编号 {{orderId}}</text>
				</view>
				<view>
					<text>未付款</text>
				</view>
			</view>
			<view class="context1">
				<view class="header">
					<text space="emsp">下单时间 {{createTime}}</text>
				</view>
			</view>
			<view class="section" v-for="(v,i) in orderMsg" :key="i">
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
					<text>小计</text>
					<text id="xiaoJi">¥ {{totalJi}}</text>
				</view>
				<view class="set-bottom set-btm">
					<text>邮费</text>
					<text>¥ {{v.youFei}}</text>
				</view>
			</view> 
			<view class="context1">
				<view class="header">
					<text space="emsp">订单备注 {{buyerMessage}}</text>
				</view>
			</view>
			<view class="section2">
				<view>
					<text class="iconfont icon-dingwei1 header-icon1"></text>
				</view>
				<view class="head-middle">
					<text space="emsp">{{address.receiverName}} {{address.receiverPhone}}</text>
					<text space="emsp">{{address.receiverProvince}}{{address.receiverCity}}{{address.receiverTown}}{{address.receiverAddress}}</text>
				</view>
			</view>
			<view class="section3">
				<view>
					<text>支付方式</text>
					<text>{{payMethod}}</text>
				</view>
				<view v-show="showPayMethod">
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
						<view class="footer-btn" :class="state?'':'active'" @click="clearPay">取消订单</view>
					</navigator>
					<navigator url="../paymentResults/paymentResults?index=1" open-type="navigate">
						<view class="footer-btn" :class="state?'active':''" @click="pay">立即支付</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				state:1, //1是立即支付，0是取消订单,
				payMethod:'在线支付',
				//是否显示支付宝支付
				showPayMethod:true,
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
				},
				buyerMessage:'',//备注
				orderId:'',//订单编号
				createTime:'',//下单时间
				orderMsg:[],//渲染数据
				totalJi:''
			}
		},
		mounted(){
			//渲染地址
			this.initAddress();
			this.buyerMessage = wx.getStorageSync('buyerMessage');
			let tempTime = wx.getStorageSync('createTime');
			//将时间字符串切割成符合要求的数据
			this.createTime = this.strToDate(tempTime);
			this.orderId = wx.getStorageSync('orderId');
			this.initData();//取数据
			this.totalJi = wx.getStorageSync('totalJi');
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
					this.orderMsg[i].xiaoJi = res;
				}
			},
			//将时间格式进行转化
			strToDate(str){
				let arr = str.split(/[T.]/);
				return arr[0] + ' ' + arr[1];
			},
			initAddress(){
				//初始化渲染页面
				wx.request({
					url:this.pageUrl.pageUrl+'/order/{id}?id='+wx.getStorageSync('addressId'),
					method:'get',
					header:{
						token: wx.getStorageSync('token')
					},
					success:(res)=>{
						if(res.statusCode === 200){
							if(typeof res.data.data==='object'){
								this.address = res.data.data;
							}
						}
						if(wx.getStorageSync('payMethod') === 1){
							this.payMethod = '在线支付',
							this.showPayMethod = true;
						}else{
							this.payMethod = '货到付款',
							this.showPayMethod = false;
						}
					},
					fail:(err)=>{
						console.log(err);
					}
				})
			},
			pay(){
				this.state = 1;
			},
			clearPay(){
				this.state = 0;
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
		overflow: hidden;
		.context{
			background-color: #fff;
			margin: 20rpx 0rpx;
			display: flex;
			justify-content: space-between;
			font-size: 32rpx;
			height: 66rpx;
			align-items: center;
			padding: 0rpx 20rpx;
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
		.context1{
			background-color: #fff;
			margin: 20rpx 0rpx;
			display: flex;
			justify-content: space-between;
			font-size: 32rpx;
			height: 66rpx;
			align-items: center;
			padding: 0rpx 20rpx;
			.header{
				>view{
					>text{
						font-size: 32rpx;
					}
				}
			}
		}
	}
	.section2{
		background-color: #fff;
		height: 110rpx;
		display: flex;
		justify-content: space-around;
		margin-bottom: 20rpx;
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
	.section4{
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
				margin-left: -18rpx;
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
		height: 120rpx;
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
	.active{
		background-color: #F53218;
		color: #fff;
	}
</style>
