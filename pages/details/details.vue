<template>
	<view class="box">
		<view class="banner">
			<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=43c6cafcd9a3653c7c5079e3c439f2e742551157dae1b391451dc1137723ecc8" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="container">
			<view class="title">
				汽车贴膜（每10CM）
			</view>
			<view class="price red">
				￥9.9
			</view>
			<view class="info">
				<text>剩余库存: 995</text><text>累计销售: 5</text>
			</view>
		</view>
		<view class="evaluate">
			<view>商品评价</view>
			<view>0条评价 ></view>
		</view>
		<view class="product">
			<view class="title">
				商品详情
			</view>
			<view class="detailImage">
				<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=43c6cafcd9a3653c7c5079e3c439f2e742551157dae1b391451dc1137723ecc8" mode="widthFix" style="width: 100%;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		created() {
			wx.setNavigationBarTitle({
				title:'标题'
			})
		}
	}
</script>

<style lang="less">
	.box{
		background-color: #F4F4F3;
		.banner{
			background-color: #fff;
		}
	}
	.red{
		color: red;
	}
	.container{
		background-color: #fff;
		padding: 16rpx 12rpx;
		.title{
			font-size: 30rpx;
			padding-bottom: 16rpx;
			border-bottom: 1px solid #AAAAAA;
		}
		.price{
			margin-top: 18rpx;
		}
		.info{
			color: #7F7F7F;
			margin-top: 10rpx;
			font-size: 28rpx;
			text:nth-child(2){
				margin-left: 20rpx;
			}
		}
	}
	.evaluate{
		padding: 16rpx 12rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 28rpx;
	}
	.product{
		padding: 16rpx 12rpx;
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		font-size: 28rpx;
		.title{
			flex: 1;
			padding-bottom: 16rpx;
			border-bottom: 1px solid #AAAAAA;
		}
		.detailImage{
			margin-top: 20rpx;
		}
	}
</style>
