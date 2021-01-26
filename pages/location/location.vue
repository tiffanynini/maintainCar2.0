<template>
	<view class="body">
		<view>
			<view class="uni-padding-wrap uni-common-mt add">
				<button type="default" @click="skip">添加收货地址</button>
			</view>
		</view>
		<view class="location">
			<image src="../../static/images-location/moren.png"></image>
			<view class="list">
				<text class="iconfont icon-dingwei font1"></text>
				<view class="data">
					<view>
						<text>梁先生</text>
						<text class="phone">12131313131</text>
					</view>
					<view>
						广东省佛山市某某镇某某街道某某村某某巷15号
					</view>
				</view>
				<navigator url="../addLocation/addLocation?status=0">
					<text class="iconfont icon-shezhi font2"></text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转添加地址界面
			skip(){
				uni.navigateTo({
				    url: '../addLocation/addLocation?status=1'
				});
			}
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
	.location{
		position: relative;
		top: 0;
		left: 0;
		image{
			position: absolute;
			left: 0;
			top: 0;
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>
