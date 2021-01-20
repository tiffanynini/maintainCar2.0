<template>
	<view class="container">
		<view class="iconfont icon-zhifuchenggong"></view>
		<view class="p2">{{msg}}</view>
		<view>
			<navigator url="../index/index" open-type="switchTab">
				<view :class="state?'active':''" @click="fanHui">返回首页</view>
			</navigator>
			<navigator :url="'../lookOrder/lookOrder?msg='+msg" open-type="navigate">
				<view :class="state?'':'active'" @click="lookOrder">查看订单</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				msg:'',
				state:1 //返回首页是1，查看订单是0
			}
		},
		onLoad(options){
			if(options.index == 1){
				//是从立即支付跳转过来的页面
				this.msg = '支付成功';
			}else{
				//是从取消支付跳转过来的页面
				this.msg = '取消订单成功';
			}
		},
		methods:{
			fanHui(){
				this.state = 1;
			},
			lookOrder(){
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
		background-color: #F4F4F3;
		height: 100%;
		>view:first-child{
			font-size: 200rpx;
			color: #2BBA43;
			text-align: center;
			padding-top: 100rpx;
		}
		.p2{
			font-size: 40rpx;
			text-align: center;
			margin-bottom: 60rpx;
		}
		>view:last-child{
			display: flex;
			justify-content: center;
			navigator{
				>view{
					font-size: 36rpx;
					border: 1px #AAAAAA solid;
					width: 300rpx;
					height: 80rpx;
					border-radius: 14rpx;
					margin-right: 20rpx;
					text-align: center;
					line-height: 80rpx;
				}
			}
		}
	}
	.active{
		background-color: #F53218;
		color: #fff;
	}
		
</style>
