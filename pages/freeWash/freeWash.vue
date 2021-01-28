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
				<input type="text" v-model="name">
			</view>
			<view class="gray">
				2.联系方式<text class="red">*</text>
			</view>
			<view>
				<input type="text" v-model="tel">
			</view>
			<view class="gray">
				3.洗车时间<text class="red">*</text>
			</view>
			<view>
				<picker mode="date" @change="dateCahnge">
					<input type="text" placeholder="年/月/日" v-model="val">
				</picker>
			</view>
			<view class="gray">
				4.车型<text class="red">*</text>
			</view>
			<view>
				<input type="text" v-model="type">
			</view>
		</view>
		<view class="btn" @click="confirm">立即预约</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				val:'',
				name:'',
				tel:'',
				type:'',
				reg:/^1[3-9]\d{9}$/,
			}
		},
		methods:{
			//时间选择器
			dateCahnge(event){
				this.val = event.detail.value;
			},
			//立即预约按钮
			confirm(){
				if(this.val==='' || this.tel==='' || this.type==='' || this.name===''){
					wx.showModal({
					  title: '提示',
					  showCancel:false,
					  content: '请完成必填项再提交',
					})
				}else {
					if(!this.reg.test(this.tel)){
						wx.showModal({
						  title: '提示',
						  showCancel:false,
						  content: '请输入正确的手机号',
						});
						return;
					}
					if(new Date().getTime() - new Date(this.val).getTime() > 0){
						wx.showModal({
						  title: '提示',
						  showCancel:false,
						  content: '预约时间必须为今天之后的日期',
						});
						return;
					}
					wx.showToast({
					  title: '提交成功',
					  icon: 'success',
					  duration: 2000
					});
					setTimeout(function(){
						wx.switchTab({
						  url: '../index/index'
						})
					},2200)
				}
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
