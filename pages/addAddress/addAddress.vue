<template>
	<view class="container">
		<view class="context">
			<view class="inputContent">
				<label for="address.receiverName">收货人</label>
				<input v-model="receiverName" placeholder="请输入收货人" id="receiverName" />
			</view>
			<view class="inputContent">
				<label for="receiverPhone">手机号码</label>
				<input v-model="address.receiverPhone" placeholder="请输入手机号码" id="receiverPhone" />
			</view>
			<view class="inputContent">
				<label for="region">所在地区</label>
				<picker mode="region" value="region" @change="bindRegionChange">
				    <view class="picker">
						{{region[0]}}/{{region[1]}}/{{region[2]}}
				    </view>
				</picker>
			</view>
			<view class="inputContent">
				<label for="receiverAddress">详细地址</label>
				<input v-model="address.receiverAddress" placeholder="请输入详细地址" id="receiverAddress" />
			</view>
			<view class="inputBottom">
				 <label class="radio"><radio value="r1" :checked="selStatus" @click="changeRadio"/>设置默认地址</label>
			</view>
		</view>
		<view class="footer">	
			<view class="footer-content">
				<navigator url="../addressManage/addressManage" open-type="navigate" @click="baoCun">保存</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				address:{
					receiverName:'',
					receiverPhone:'',
					receiverProvince:'',
					receiverCity:'',
					receiverTown:'',
					receiverAddress:'',
					status:''//0是未选中，1是选中,
				},
				region: ['广东省', '广州市', '海珠区'],
				// //用来存放选择的省
				// provice:'',
				// //用来存放选择的市
				// city:'',
				// //用来存放选择的区
				// town:'',
			}
		},
		methods:{
			bindRegionChange(e){
				console.log(this.region);
				address.receiverProvince = this.region[0];
				address.receiverCity = this.region[1];
				address.receiverTown = this.region[2];
				address.region = e.detail.value;
			},
			changeRadio(){
				this.selStatus = !this.selStatus;
			},
			baoCun(){
				wx.request({
					url:'http://172.17.1.221:6060/order/addAddress',
					method:'post',
					data:address,
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="less">
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
			.inputContent{
				border-bottom: 1px #D7D7D7 solid;
				display: flex;
				align-items: center;
				font-size: 34rpx;
				height: 70rpx;
				width: 98%;
				label{
					margin-right: 20rpx;
					display: block;
					width: 140rpx;
					margin-left: 12rpx;
				}
			}
			.inputBottom{
				display: flex;
				align-items: center;
				font-size: 34rpx;
				height: 70rpx;
				label{
					font-size: 32rpx;
					line-height: 70rpx;
					radio{
						transform: scale(0.6);
						margin-left: -10rpx;
					}
				}
			}
			
		}
	}
	.footer{
		display: flex;
		justify-content: center;
		.footer-content{
			background-color: #FD8F33;
			border-radius: 40rpx;
			height: 80rpx;
			margin: 50rpx 12rpx;
			text-align: center;
			width: 94%;
			navigator{
				font-size: 36rpx;
				display: block;
				line-height: 80rpx;
				color: #fff;
			}
		}
	}
</style>
