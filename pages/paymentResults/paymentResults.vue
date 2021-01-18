<template>
	<view class="container">
		<view class="iconfont icon-zhifuchenggong"></view>
		<view class="p2">{{msg}}</view>
		<view>
			<view :class="state?'active':''">返回首页</view>
			<view :class="state?'':'active'">查看订单</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				msg:'',
				state:1
			}
		},
		onLoad(options){
			if(options.index == 1){
				//是从立即支付跳转过来的页面
				this.msg = '支付成功';
			}else{
				//是从取消支付跳转过来的页面
				this.msg = '取消支付';
			}
		},
		methods:{
			
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
	.active{
		background-color: #F53218;
		color: #fff;
	}
		
</style>
