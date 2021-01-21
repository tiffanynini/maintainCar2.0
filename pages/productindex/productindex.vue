<template>
	<view class="product">
		<view class="headimg">
			<image :src="productinform.productheadimg" mode=""></image>
		</view>
		<view class="productinformbox">
			<view class="productname">{{productinform.productname}}</view>
			<view class="productprice">￥ {{productinform.productprice}}</view>
			<view class="productnumber">
				<view class="">剩余库存：{{productinform.productnumber}}</view>
				<view class="">累计销售：{{productinform.productednumber}}</view>
			</view>
		</view>
		<view class="review" @click="reviewIndex">
			<view class="productreview">
				<view class="">商品评价</view>
				<view class="">{{productinform.reviewnumber}}条评价<text class="iconfont icon-jiantou"></text></view>
			</view>
		</view>
		<view class="productdetail">
			<view class="">商品详情</view>
			<view class="productimg">
				<image :src="productinform.productimg" mode=""></image>
			</view>
		</view>
		<view class="productfooter">
			<view class="footericon">
				<view class="">
					<text class="iconfont icon-xingxing"></text>
				</view>
				<view class="">
					<text class="iconfont icon-gouwuche"></text>
				</view>
			</view>
			<view class="footerbtn">
				<view class="">加入购物车</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 商品消息
				productinform: {
					productid: '',
					productname: '汽车保养',
					productprice: '888.00',
					productnumber: 432,
					productednumber: 231,
					reviewnumber: 5,
					ifcollect: true,
					productheadimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
				},
			}
		},
		methods: {
			reviewIndex(){
				let val = this.productinform.productid;
				wx.navigateTo({
					url: "../reviewindex/reviewindex?id='"+val+"'"
				})
			},
		},
		onLoad(val) {
			console.log(val);
			this.productinform.productid = val;
		},
	}
</script>

<style lang="less">
	/* 字体图标引入 */
	@import url("../../static/font/iconfont.css");
	
	.product {
		position: relative;
	}
	/* 头部展示图 */
	.headimg image {
		width: 100%;
		height: 590rpx;
	}
	.productinformbox {
		padding: 0 20rpx;
		border-bottom: 2rpx solid #D7D7D7;
	}
	.productname {
		height: 82rpx;
		line-height: 82rpx;
		font-size: 30rpx;
		border-bottom: 2rpx solid #D7D7D7;
	}
	.productprice {
		color: #DB001B;
		margin-top: 30rpx;
	}
	.productnumber {
		height: 86rpx;
		font-size: 30rpx;
		color: #7F7F7F;
		display: flex;
		vertical-align: middle;
		align-items: center;
	}
	.productnumber>view{
		margin-right: 40rpx;
	}
	.review{
		background-color: #F4F4F3;
		padding: 20rpx 0;
	}
	.productreview{
		height: 80rpx;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #7F7F7F;
		background-color: #ffffff;
		border-top: 1rpx solid #D7D7D7;
		border-bottom: 1rpx solid #D7D7D7;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.productdetail{
		padding: 20rpx;
		padding-bottom: 90rpx;
	}
	.productdetail>view:first-child{
		height: 60rpx;
		font-size: 28rpx;
		color: #7F7F7F;
		border-bottom: 1rpx solid #D7D7D7;
		margin-bottom: 20rpx;
	}
	.productimg image{
		width: 100%;
	}
	.productfooter{
		height: 80rpx;
		width: 100%;
		position: fixed;
		bottom: 0rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.footericon{
		width: 140rpx;
		padding-left: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.footericon text{
		vertical-align: middle;
		font-size: 50rpx;
	}
	.footerbtn{
		height: 80rpx;
		width: 240rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		background-color: #F53218;
	}
</style>
