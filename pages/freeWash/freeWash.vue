<template>
	<view class="box">
		<view class="head">
			<view class="title">新用户免费洗车</view>
		</view>
		<view class="appointment">
			<view class="title">
				洗车预约
			</view>
			<view class="gray">
				1.姓名<text class="red">*</text>
			</view>
			<view>
				<input type="text">
			</view>
			<view class="gray">
				2.联系方式<text class="red">*</text>
			</view>
			<view>
				<input type="text">
			</view>
			<view class="gray">
				3.洗车时间<text class="red">*</text>
			</view>
			<view>
				<picker mode="date" @change="dateCahnge">
					<input type="text" placeholder="年/月/日" :value="val">
				</picker>
			</view>
			<view class="gray">
				4.车型<text class="red">*</text>
			</view>
			<view>
				<input type="text">
			</view>
		</view>
		<view class="btn">立即预约</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				val:''
			}
		},
		methods:{
			dateCahnge(event){
				this.val = event.detail.value;
			}
		}
	}
</script>

<style lang="less">
	.red{
		color: red;
	}
	.gray{
		color: #7F7F7F;
	}
	.box{
		margin: 20rpx 14rpx;
		.head{
			>.title{
				border-bottom: 1px solid #A6A6A6;
				padding-bottom: 16rpx;
				font-size: 36rpx;
			}
		}
		.appointment{
			display: flex;
			flex-direction: column;
			input{
				border: 1px solid #7F7F7F;
				height: 70rpx;
				line-height: 70rpx;
				flex: 1;
				border-radius: 10rpx;
				margin-top: 26rpx;
			}
			.gray{
				margin-top: 60rpx;
				font-size: 34rpx;
			}
			>.title{
				margin-top: 14rpx;
				color: #A6A6A6;
			}
		}
		.btn{
			background-color: #FD8F33;
			color: #fff;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			margin-top: 100rpx;
			border-radius: 10rpx;
		}
	}
</style>
