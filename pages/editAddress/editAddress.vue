<template>
	<view class="container">
		<view class="context">
			<view class="inputContent">
				<label for="consignee">收货人</label>
				<input v-model="consignee" placeholder="请输入收货人" id="consignee" />
			</view>
			<view class="inputContent">
				<label for="phone">手机号码</label>
				<input v-model="phone" placeholder="请输入手机号码" id="phone" />
			</view>
			<view class="inputContent">
				<label for="area">所在地区</label>
				<picker mode="region" value="region" @change="bindRegionChange">
				    <view class="picker">
						{{region[0]}}/{{region[1]}}/{{region[2]}}
				    </view>
				</picker>
			</view>
			<view class="inputContent">
				<label for="area">详细地址</label>
				<input v-model="area" placeholder="请输入详细地址" id="area" />
			</view>
			<view class="inputBottom">
				 <label class="radio"><radio value="r1" :checked="selStatus" @click="changeRadio"/>设置默认地址</label>
			</view>
			<view class="delAddress" @click="del">删除收货地址</view>
		</view>
		<view class="footer">	
			<view class="footer-content">
				<navigator url="../addressManage/addressManage" open-type="navigate">保存</navigator>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				consignee:'',
				phone:'',
				area:'',
				region: ['广东省', '广州市', '海珠区'],
				selStatus:0,//0是未选中，1是选中
			}
		},
		methods:{
			bindRegionChange(e){
				this.region = e.detail.value;
			},
			changeRadio(){
				this.selStatus = !this.selStatus;
			},
			del(){
				wx.showModal({
				  content: '确定要删除该地址吗？',
				  success (res) {
				    if (res.confirm) {
				      console.log('用户点击确定')
					  //删除成功后提示并且可以跳回地址管理页面
					  
					  wx.showToast({
					    title: '删除成功',
					    icon: 'success',
					    duration: 1000
					  })
				    } else if (res.cancel) {
				      console.log('用户点击取消')
				    }
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
			.delAddress{
				color: red;
				font-size: 32rpx;
				padding: 30rpx 0rpx 20rpx 10rpx;
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
