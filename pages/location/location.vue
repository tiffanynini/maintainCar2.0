<template>
	<view class="body">
		<view>
			<view class="uni-padding-wrap uni-common-mt add">
				<button type="default" @click="skip1">添加收货地址</button>
			</view>
		</view>
		<view class="location">
			<!-- <image src="../../static/images-location/moren.png"></image> -->
			<view class="list" v-for="(v,i) in informationArr" :key="i">
				<text class="iconfont icon-dingwei font1"></text>
				<view class="data">
					<view>
						<text>{{v.receiverName}}</text>
						<text class="phone">{{v.receiverPhone}}</text>
					</view>
					<view>
						{{v.receiverCity}}{{v.receiverAddress}}
					</view>
				</view>
				<view @click="skip2" :data-id="v.id" :data-userId="v.userId">
					<text class="iconfont icon-shezhi font2"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 整体数据
				informationArr:[]
			};
		},
		methods:{
			//跳转添加地址界面
			skip1(){
				uni.navigateTo({
				    url: '../addLocation/addLocation?status=1'
				});
			},
			//跳转添加地址界面
			skip2(e){
				uni.navigateTo({
				    url:`../addLocation/addLocation?status=0&&id=${e.currentTarget.dataset.id}&&userId=${e.currentTarget.dataset.userid}`
				});
			},
			//获取用户信息
			getInformation(){
				uni.request({
				    url: this.pageUrl.pageUrl+'/order/findAllAddress', 
					method:'get',
				    data: {
				        'userId':wx.getStorageSync('id')
				    },
				    header: {
				        'token': wx.getStorageSync('token') //自定义请求头信息
				    },
				    success: (res) => {
						this.informationArr=res.data.data;
				    }
				});
			}
		},
		onLoad(res){
			this.id=wx.getStorageSync('id');
			this.getInformation();
		},
		onShow(){
			this.id=wx.getStorageSync('id');
			this.getInformation();
		}
	}
</script>
<style lang="less" scoped>
	@import url("../../static/font/iconfont.css");
	page,.body{
		height: 100%;
		background-color: #F4F4F3;
	}
	.add{
		margin: 20rpx;
	}
	.list{
		display: flex;
		background-color: #fff;
		align-items: center;
		margin-top: 10rpx;
		.data{
			flex: 3;
			.phone{
				margin-left: 20rpx;
			}
		}
		.font1{
			font-size: 80rpx;
			z-index: 2;
			margin: 0 30rpx;
			color: #FD8F33;
		}
		.font2{
			font-size: 80rpx;
			z-index: 2;
			margin: 0 30rpx;
			color: #5E5E5E;
		}
	}
	// .location{
	// 	position: relative;
	// 	top: 0;
	// 	left: 0;
	// 	image{
	// 		position: absolute;
	// 		left: 0;
	// 		top: 0;
	// 		width: 60rpx;
	// 		height: 60rpx;
	// 	}
	// }
</style>
