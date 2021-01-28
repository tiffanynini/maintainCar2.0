<template>
	<view class="div1">
		<!-- 聊天 -->
		<view class="chat" :key="index" v-for="(item,index) in chatCon">
			<!-- 客户 -->
			<view class="chatClient">
				<!-- 聊天消息 -->
				<view class="chatCon">{{item.client}}</view>
				<!-- 头像 -->
				<view class="chatHead"> 
					<!-- <image src=""></image> -->
				</view>
			</view>
			<!-- 商家 -->
			<view class="chatMechant">
				<!-- 头像 -->
				<view class="chatHead1"></view>
				<!-- 聊天消息 -->
				<view class="chatCon1">{{item.mechant}}</view>
				
			</view>
		</view>
		
		<!-- 发送消息 -->
		<view class="sendNew">
			<!-- 输入框 -->
			<view class="inp1">
				<uni-easyinput focus v-model="value"></uni-easyinput>
			</view>
			<!-- 按钮 -->
			<view class="btn" @click='sendNew'>发送</view>
		</view>
		<view class="sendNew1"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1、输入框
				value: '',
				// 2、聊天内容
				chatCon:[]
			};
		},
		methods: {
			sendNew() {
				console.log(this.value);
				// 把评论的文字赋给客户
				// 同时设置商家的自动回复
				this.chatCon.push({
					client:this.value,
					mechant:'你好！我是客服小妮，即将为您服务，前方排队255人，请稍等会儿'
				})
				
				
				// 清空输入框
				this.value = '';
				
			}
		}
	}
</script>

<style lang="less">
	.div1 {
		// height: 100%;
		// background-color: #F4F4F3;
		// position: relative;
		padding: 20rpx;
		// 输入框
		.sendNew {
			// margin-top: 50rpx;
			height: 100rpx;
			width: 100%;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			padding: 20rpx;
			align-items: center;
			// z-index: -1;
			.inp1 {
				width: 540rpx;
				height: 70rpx;
				// background-color: pink;
			}

			.btn {
				width: 150rpx;
				height: 70rpx;
				background-color: #FD8F33;
				margin: 0 20rpx;
				text-align: center;
				line-height: 70rpx;
				color: #fff;
				border-radius: 10rpx;
			}
		}
		// 聊天
		.chat {
			width: 100%;
			margin: 20rpx 0;

			// 客户
			.chatClient {
				margin-bottom: 20rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.chatCon {
					// width: 490rpx;
					background-color: #FD8F33;
					color: #fff;
					// height: 80rpx;
					border-radius: 10rpx;
					line-height: 40rpx;
					padding: 20rpx;
				}

				.chatHead {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					// background-color: green;
					margin-left: 20rpx;
					background: url(../../static/images-index/detai2.png) no-repeat center center;
					// background-size: cover;
					
				}
			}

			// 商家
			.chatMechant {
				// height: 100rpx;
				margin-bottom: 20rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.chatCon1 {
					width: 510rpx;
					background-color: #9EEA6A;
					border-radius: 10rpx;
					padding: 20rpx;
					line-height: 40rpx;
				}

				.chatHead1 {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					// background-color: green;
					margin-right: 20rpx;
					background: url(../../static/images-index/auto2.jpg) no-repeat center center;
				}
			}
		}
		.sendNew1{
			height: 100rpx;
		}
	}
</style>
