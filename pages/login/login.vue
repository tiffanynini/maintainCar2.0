<template>
	<view id="app">
		<view class="title">欢迎登录养车呗</view>
		<view class="input_box">
			<input type="text" placeholder="请输入手机号" v-model="phone" class="phone" placeholder-style="color:#AAAAAA"/>
			<input type="password" placeholder="请输入密码" v-model="password" class="password" placeholder-style="color:#AAAAAA" v-show="isPass"/>
			<view class="login">登录</view>
			<view @click="change" class="loginType">{{loginText}}</view>
		</view>
		<view class="wechatLogin">
			<i class="iconfont icon-iconfontzhizuobiaozhunbduan32"></i>
			<text>微信登录</text>
			<view class="radio">
				<radio color="#EF8D34" @click="changeRadio" :checked="isChecked"></radio><view>我已阅读并同意<view @click="userProtocol" class="protocolColor">用户协议</view>和<view @click="privacityProtocol" class="protocolColor">隐私协议</view></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				phone:"",
				password:"",
				loginText:"快速登录",
				isPass:true,
				isChecked:false
			}
		},
		methods:{
			change(){
				this.isPass = !this.isPass;
				if(this.isPass){
					this.loginText = "快速登录";
				}else{
					this.loginText = "密码登录";
				}
			},
			changeRadio(){
				this.isChecked = !this.isChecked;
			},
			userProtocol(){
				wx.showModal({
				  title: '用户协议',
				  showCancel:false,
				  content: '养车呗小程序（以下简称“养车呗”），在使用前，请务必认真阅读和理解本协议（以下简称《协议》）中规定的所有权利和限制。除非您接受本《协议》条款，否则您无权下载、安装或使用本“养车呗”及其相关服务。您一旦安装、复制、下载、访问或以其它方式使用养车呗产品，将视为对本《协议》的接受，即表示您同意接受本《协议》各项条款的约束。如果您不同意本《协议》中的条款，请不要安装、复制或使用养车呗手机客户端软件。本《协议》是用户与养车呗之间关于用户下载、安装、使用、复制的法律协议。'
				})
			},
			privacityProtocol(){
				wx.showModal({
				  title: '隐私协议',
				  showCancel:false,
				  content: '养车呗小程序（以下简称“养车呗”），在使用前，请务必认真阅读和理解本协议（以下简称《协议》）中规定的所有权利和限制。除非您接受本《协议》条款，否则您无权下载、安装或使用本“养车呗”及其相关服务。您一旦安装、复制、下载、访问或以其它方式使用养车呗产品，将视为对本《协议》的接受，即表示您同意接受本《协议》各项条款的约束。如果您不同意本《协议》中的条款，请不要安装、复制或使用养车呗手机客户端软件。本《协议》是用户与养车呗之间关于用户下载、安装、使用、复制的法律协议。'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	#app{
		padding: 50rpx;
	}
	.title{
		font-size: 50rpx;
		font-weight: 600;
		margin-top: 60rpx;
		letter-spacing: 4rpx;
	}
	.input_box{
		display: flex;
		flex-direction: column;
		.login{
			flex: 1;
			text-align: center;
			background-color: #EF8D34;
			padding: 16rpx 0 16rpx 0;
			border-radius: 10rpx;
			margin-top: 60rpx;
			color: #fff;
		}
		.loginType{
			margin-top: 36rpx;
			color: #AAAAAA;
		}
	}
	.phone{
		flex: 1;
		margin-top: 80rpx;
		padding: 20rpx 0 20rpx 20rpx;
		border: 1px solid #c1c1c1;
		border-radius: 10rpx;
	}
	.password{
		flex: 1;
		margin-top: 50rpx;
		padding: 20rpx 0 20rpx 20rpx;
		border: 1px solid #c1c1c1;
		border-radius: 10rpx;
	}
	.wechatLogin{
		margin-top: 100rpx;
		display: flex;
		flex-direction: column;
		text-align: center;
		i{
			color: #4CBF2A;
			font-size: 90rpx;
		}
		>text{
			margin-top: 10rpx;
			font-weight: 400;
		}
	}
	.radio{
		margin-top: 48rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		>view{
			display: flex;
		}
	}
	.protocolColor{
		color: #4CBF2A;
	}
</style>
