<template>
	<view class="body">
		<view class="order" v-for="(v,i) in data" :key="i">
			<view>
				<text class="serialNumber">
					<text>订单编号</text>
					<text>{{v.orderId}}</text>
				</text>
				<text class="state">{{state}}</text>
			</view>
			<navigator url="">
				<image :src="v.image"  mode="heightFix"></image>
				<view>
					<text>{{v.name}}</text>
					<text>汽车类型：轿车 位置：全车</text>
					<text>{{v.num}} x {{v.price}}</text>
				</view>
			</navigator>
			<view class="operation">
				<view>
					<text>共1件商品</text>
					<text>¥ {{v.astualPay}}</text>
				</view>
				<view>
					<text v-if="status==1" @click="switchShowPayment">立即付款</text>
					<text v-if="false" @click="showEvaluate()">去评价</text>
				</view>
			</view>
			<!-- 评价框 -->
			<view class="evaluate" v-if="evaluateState&&evaluateNum==v.orderId">
				<view class="uni-textarea">
					<textarea @blur="bindTextAreaBlur"  auto-blur  placeholder="请输入内容" />
				</view>
				<view class="uni-padding-wrap uni-common-mt">
					<button type="primary" @click="submitComments(v.orderId)">提交</button>
				</view>
			</view>
		</view>
		<!-- 支付模态框 -->
		<view class="update" v-if="shadow"></view>
		<view class="content" v-if="showPayment">
			<view class="contentText1">
				<text>支付方式</text>
				<text class="close" @click="switchShowPayment">×</text>
			</view>
			<view class="contentText2">
					<radio checked="true" value="zfb" /><image src="../../static/images-orderStatus/zfb.png" mode="widthFix"></image><text>支付宝客户端</text>
			</view>
			<view class="contentText3" @click="pay">确定</view>
		</view>
		<view class="paySuccess" v-if="showPay">
			<view>
				<image src="../../static/images-orderStatus/success.png"></image>
			</view>
			<text>支付成功</text>
		</view>
	</view>
</template>

<script>
	// 引入模态框
	import kModel from '@/components/k-model/k-model.vue';
	export default {
		data() {
			return {
				//状态码 1:未付款,2:已付款未发货,3:已发货,4:交易成功,5:交易关闭,6:已评价
				status:0,
				// 页面订单显示状态
				state:0,
				// 显示支付模态框
				showPayment:false,
				//显示支付成功状态
				showPay:false,
				//显示蒙层状态
				shadow:false,
				//显示评论状态
				evaluateState:false,
				//用户id
				userId:9,
				//用户数据
				data:[],
				//订单评论
				evaluate:'',
				//选择哪条订单评论
				orderId:0
			};
		},
		methods:{
			initialize(){
				switch(this.status){
					//状态码 1:未付款
					case 1:
					this.state="未付款"
					uni.setNavigationBarTitle({
					    title: '待付款'
					});
					this.arrStatus();
					break;
					//状态码 2:已付款未发货
					case 2:
					this.state="待发货"
					uni.setNavigationBarTitle({
					    title: '待发货'
					});
					this.arrStatus();
					break;
					//状态码 3:已发货
					case 3:
					this.state="待收货"
					uni.setNavigationBarTitle({
					    title: '待收货'
					});
					this.arrStatus();
					break;
					//状态码 4:交易成功
					case 4:
					this.state="待评价"
					uni.setNavigationBarTitle({
					    title: '待评价'
					});
					this.arrStatus();
					break;
					//状态码 5:交易关闭
				}
			},
			//初始化数据
			arrStatus(){
				uni.request({
					url:'http://172.16.14.29:6067/order/find?userId='+1,
					header: {
					    'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
					},
					success:(res)=>{
						// console.log(res)
						// if(res.data.data.length>0){
							let arr=[];
							for(let i=0;i<res.data.data.length||0;i++){
							// for(let i=0;i<arr.length;i++){
								if(res.data.data[i].status==this.status){
									arr.push(res.data.data[i])
								}
							}
							this.data=arr;
							// console.log(this.data)
						// }
					}
				})
			},
			// 开关支付模态框
			switchShowPayment(){
				this.showPayment=!this.showPayment;
				this.shadow=!this.shadow;
			},
			//支付成功模态框
			paySuccess(){
				this.showPay=!this.showPay;
				this.shadow=!this.shadow;
			},
			//确定支付
			pay(){
				this.switchShowPayment();
				//loading框
				uni.showToast({
				    title: '',
				    duration: 1500,
					icon:"loading"
				});
				setTimeout(()=>{
					this.paySuccess();
				},1500);
				setTimeout(this.paySuccess,2500);
			},
			//评价框
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value);
			},
			//开关评论框
			showEvaluate(){
				this.evaluateState=true;
			},
			//提交评论
			submitComments(){
				this.evaluateState=false;
				uni.showToast({
				    title: '评论成功',
				    duration: 1500
				});
			}
		},
		onLoad(res){
			//状态码 1:未付款,2:已付款未发货,3:已发货,4:交易成功,5:交易关闭,6:已评价
			this.status=Number(res.status);
			this.initialize();
		}
	}
</script>

<style lang="less" scoped>
	page,.body{
		background-color: #F4F4F3;
	}
	.order{
		margin-top: 20rpx;
		background-color: #fff;
		padding: 20rpx;
		view:nth-child(1){
			display: flex;
			justify-content: space-between;
			.serialNumber{
				text:nth-child(1){
					font-size: 30rpx;
				}
				text:nth-child(2){
					margin-left: 20rpx;
					font-size: 30rpx;
				}
			}
			.state{
				background-color: #F53218;
				color: #FDE1DF;
				padding: 6rpx 12rpx;
				border-radius: 26rpx;
			}
		}
		navigator:nth-child(2){
			display: flex;
			justify-content: start;
			border-bottom: 1rpx solid #F2F2F2;
			padding: 20rpx 0;
			image{
				width: 160rpx;
				height: 160rpx;
			}
			view:nth-child(2){
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin-left: 10rpx;
				text:nth-child(1){
					font-size: 36rpx;
				}
				text:nth-child(2){
					font-size: 28rpx;
					color: #AAAAAA;
				}
				text:nth-child(3){
					font-size: 28rpx;
				}
			}
		}
		.operation{
			padding: 20rpx 0;
			view:nth-child(1){
				display: flex;
				justify-content: space-between;
				text:nth-child(1){
					font-size: 26rpx;
				}
				text:nth-child(2){
					font-size: 26rpx;
					color: #D9001B;
				}
			}
			view:nth-child(2){
				display: flex;
				justify-content: flex-end;
				text{
					margin: 30rpx 10rpx 0 0;
					color: #EE372C;
					background-color: #fff;
					border: 2rpx solid #EE372C;
					padding: 12rpx 20rpx;
					border-radius: 40rpx;
				}
			}
		}
	}
	.update{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(153,153,153,.7);
	}
	.content{
		position: fixed;
		left: 50%;
		top: 50%;
		margin-top: -150rpx;
		margin-left: -250rpx;
		flex-wrap: wrap;
		width: 500rpx;
		height: 300rpx;
		background-color: #fff;
		display: flex;
		align-content: space-around;
		z-index: 1;
		.contentText1{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			border-bottom: 1rpx solid #D7D7D7;
			display: flex;
			justify-content: space-between;
			padding: 0 20rpx;
			.close{
				font-size: 50rpx;
			}
		}
		.contentText2{
			width: 100%;
			height: 100rpx;
			line-height: 80rpx;
			display: flex;
			justify-content: space-around;
			padding: 0 20rpx;
			image{
				width: 160rpx;
				height: 80rpx;
				margin: 4rpx 20rpx 0;
			}
		}
		.contentText3{
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			display: flex;
			justify-content: space-around;
			margin: 20rpx 50rpx 20rpx;
			background-color: #EE3328;
			color: #fff;
		}
	}
	.paySuccess{
		position: fixed;
		left: 50%;
		top: 50%;
		margin-top: -150rpx;
		margin-left: -200rpx;
		width: 400rpx;
		height: 300rpx;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		z-index: 1;
		text-align: center;
		view:first-child{
			justify-content: center;
			image{
				width: 160rpx;
				height: 160rpx;
			}	
		}
		text{
			font-size: 40rpx;
		}
	}
	.evaluate{
		border: 4rpx #F4F4F3 solid;
		transition: all .5 linear;
	}
</style>
