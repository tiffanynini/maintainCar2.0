<template>
	<view class="box">
		<view class="banner">
			<image :src="dataArr.image" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="container">
			<view class="title">
				{{dataArr.name}}
			</view>
			<view class="price red">
				￥{{dataArr.price}}
			</view>
			<view class="info">
				<text>剩余库存: {{inventory}}</text><text>累计销售: {{dataArr.number}}</text>
			</view>
		</view>
		<view class="evaluate" @click="goEvaluate">
			<view>商品评价</view>
			<view>{{num}}条评价 ></view>
		</view>
		<view class="product">
			<view class="title">
				商品详情
			</view>
			<view class="detailImage">
				<image :src="dataArr.image" mode="widthFix" style="width: 100%;"></image>
			</view>
		</view>
		<view class="footerBar">
			<i class="iconfont icon-gouwuche"><text></text></i>
			<view class="addCart" @click="add">加入购物车</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				id:0,
				dataArr:[],
				inventory:0,
				num:0
			}
		},
		created() {
			
		},
		methods:{
			goEvaluate(){
				wx.navigateTo({
					url:'../productEvaluation/productEvaluation?id='+this.id
				})
			},
			add(){
				wx.request({
					url:'http://172.16.14.29:6067/cart/add?num=1&skuId='+this.id,
					method:'post',
					header: {
						'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
					},
					success:(res)=>{
						if(res.data.code === 0){
							wx.showToast({
							  title: '添加成功',
							  icon: 'success',
							  duration: 2000
							})
						}else{
							wx.showToast({
							  title: '添加失败',
							  icon: 'none',
							  duration: 2000
							})
						}
					}
				})
			}
		},
		onLoad(option) {
			this.id = option.id;
			wx.request({
				url:this.pageUrl.pageUrl+'/sku/findById?id='+option.id,
				method:'post',
				header: {
					'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
			    },
				success:(res)=>{
					this.dataArr = res.data;
					console.log(res)
				}
			});
			wx.request({
				url:this.pageUrl.pageUrl+'/sku/findEvaluateById?goodsId='+option.id,
				method:'post',
				header: {
					'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
				},
				success:(res)=>{
					this.num = res.data.length;
				}
			});
			wx.request({
				url:this.pageUrl.pageUrl+'/sku/findGoodsById?goodsId='+option.id,
				method:'post',
				header: {
					'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
				},
				success:(res)=>{
					this.inventory = res.data.inventory;
				}
			})
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	.box{
		margin-bottom: 80rpx;
		background-color: #F4F4F3;
		position: relative;
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
	.footerBar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background-color: #FFF;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		.icon-gouwuche{
			color: #000;
			font-size: 60rpx;
			line-height: 100rpx;
			margin-left: 30rpx;
			position: relative;
			>text{
				position: absolute;
				top: 18rpx;
				right: 0;
				width: 30rpx;
				height: 30rpx;
				background-color: #ff0000;
				border-radius: 50rpx;
			}
		}
		.addCart{
			width: 200rpx;
			height: 100rpx;
			line-height: 100rpx;
			background-color: #F53218;
			color: #fff;
			text-align: center;
		}
	}
</style>
