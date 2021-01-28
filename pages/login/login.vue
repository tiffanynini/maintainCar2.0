<template>
	<view id="app">
		<view :class="isShow?'layer':''">
			<view class="infoModel" v-show="isShow">
				<view class="infoText">请输入验证码</view>
				<view class="inputCode">
					<input type="number" v-model="input" maxlength="6">
				</view>
				<view class="confirmBtn" :class="input.length===6?'pass':'disabled'" @click="confirm" disabled="isDisabled?true:false">确定</view>
				</view>
			</view>
		<view class="title">欢迎登录养车呗</view>
		<view class="input_box">
			<input type="text" placeholder="请输入手机号" v-model="phone" class="phone" placeholder-style="color:#AAAAAA"/>
			<text class="info">未注册则手机验证后自动创建新账号</text>
			<view class="login" @click="getCode">{{codeText}}</view>
		</view>
		<view class="wechatLogin">
			<i class="iconfont icon-iconfontzhizuobiaozhunbduan32" @click="wechatLogin"></i>
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
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
				phone:"",
				password:"",
				isPass:true,
				isChecked:false,
				reg:/^1[3-9]\d{9}$/,
				selTag:0,
				isFocus:true,
				input:"",
				isShow:false,
				code:'',
				isDisabled:false,
				codeText:"获取验证码"
			}
		},
		methods:{
			//微信登录
			wechatLogin(){
				//检查微信登录状态
				wx.checkSession({
				  success: ()=>{
					  wx.getStorage({
					  	key:"token",
						//如果是登录状态
					  	success(res){
					  		wx.showToast({
					  		  title: '已是登录状态',
					  		  icon: 'success',
					  		  duration: 2000
					  		})
					  	},
						//如果wx.login为登录状态，而token不存在，重新进行token存储
						fail:()=>{
							//协议检查
							if(!this.isChecked){
								wx.showModal({
								  title: '提示',
								  content: '请先同意下方协议',
								  showCancel: false,
								});
								return;
							}
							wx.showLoading({
							  title: '正在处理',
							}); 
							//请求接口
							wx.request({
								url:'http://172.17.1.203:9090/user/wx/login',
								method:'post',
								data:{
									code:this.code
								},
								success:(res)=>{
									//成功并返回token值
									if(res.data.data.token){
										wx.setStorage({
											key:"token",
											data:res.data.data.token
										});
										//检查token是否存在
										wx.getStorage({
											key:"token",
											success(res){
												//存在并请求接口返回用户id
												console.log(res.data);
												wx.request({
													url:'http://49.234.8.137:9090/user/queryuser?token='+res.data,
													method:'post',
													success:(res)=>{
														//设置用户id
														wx.setStorage({
															key:"id",
															data:res.data.data.id
														});
														//检查用户id是否存在
														wx.getStorage({
															key:"id",
															//存在返回登录成功
															success: () => {
																wx.hideLoading();
																wx.showToast({
																  title: '登录成功',
																  icon: 'success',
																  duration: 2000
																});
																setTimeout(function(){
																	wx.navigateBack({
																		delta:1
																	});
																},2200);
															},
															//不存在则返回登录失败
															fail: () => {
																wx.hideLoading();
																wx.showToast({
																  title: '用户信息设置失败',
																  icon: 'none',
																  duration: 2000
																})
															}
														})
													},
													//请求接口失败
													fail: () => {
														wx.hideLoading();
														wx.showToast({
														  title: '用户信息设置失败',
														  icon: 'none',
														  duration: 2000
														})
													}
												})
											},
											//检查token不存在，登录失败
											fail() {
												wx.hideLoading();
												wx.showToast({
												  title: '登录失败',
												  icon: 'none',
												  duration: 2000
												})
											}
										})
										//如果后台返回的数据中不包含token，则授权失败
									}else{
										wx.showToast({
										  title: '授权失败',
										  icon: 'none',
										  duration: 2000
										})
									}
								},
								//接口请求失败
								fail:(res)=>{
									wx.showToast({
									  title: '连接失败',
									  icon: 'none',
									  duration: 2000,
									})
								}
							})
						}
					})
				  },
				  //如果wx.login未登录
				  fail:()=>{
					  //协议检查
				    if(!this.isChecked){
				    	wx.showModal({
				    	  title: '提示',
				    	  content: '请先同意下方协议',
				    	  showCancel: false,
				    	});
				    	return;
				    }
					//调用wx.login
				    wx.login({
				    	success:(res)=>{
				    		if(res.code){
				    			wx.showLoading({
				    			  title: '正在处理',
				    			});
								//将code存入变量，避免接口请求失败时wx.login仍为登录状态出现的问题
								this.code = res.code;
				    			wx.request({
				    				url:'http://49.234.8.137:9090/user/wx/login',
				    				method:'post',
				    				data:{
				    					code:res.code
				    				},
				    				success:(res)=>{
										console.log(res);
				    					if(res.data.data.token){
				    						wx.setStorage({
				    							key:"token",
				    							data:res.data.data.token
				    						});
				    						wx.getStorage({
				    							key:"token",
				    							success(res){
													console.log(res.data);
													wx.request({
														url:'http://49.234.8.137:9090/user/queryuser?token='+res.data,
														method:'post',
														success:(res)=>{
															wx.setStorage({
																key:"id",
																data:res.data.data.id
															});
															wx.getStorage({
																key:"id",
																success: () => {
																	wx.hideLoading();
																	wx.showToast({
																	  title: '登录成功',
																	  icon: 'success',
																	  duration: 2000
																	});
																	setTimeout(function(){
																		wx.navigateBack({
																			delta:1
																		});
																	},2200);
																},
																fail: () => {
																	wx.hideLoading();
																	wx.showToast({
																	  title: '用户信息设置失败',
																	  icon: 'none',
																	  duration: 2000
																	})
																}
															})
														},
														fail: () => {
															wx.hideLoading();
															wx.showToast({
															  title: '用户信息设置失败',
															  icon: 'none',
															  duration: 2000
															})
														}
													})
				    							},
				    							fail() {
				    								wx.hideLoading();
				    								wx.showToast({
				    								  title: '登录失败',
				    								  icon: 'none',
				    								  duration: 2000
				    								})
				    							}
				    						})
				    					}else{
				    						wx.showToast({
				    						  title: '授权失败',
				    						  icon: 'none',
				    						  duration: 2000
				    						});
				    					}
				    				},
				    				fail:(res)=>{
				    					wx.showToast({
				    					  title: '连接失败',
				    					  icon: 'none',
				    					  duration: 2000,
				    					})
				    				}
				    			})
				    		}else{
				    			wx.showToast({
				    			  title: '登录失败',
				    			  icon: 'none',
				    			  duration: 2000
				    			})
				    		}
				    	}
				    })
				  }
				})
			},
			//手机号登录
			confirm(){
				if(this.input.length !== 6){
					return;
				}
				this.isShow = false;
				wx.request({
					url:'http://49.234.8.137:9090/user/login',
					data:{
						code:this.input,
						phone:this.phone
					},
					success:(res)=>{
						console.log(res)
						wx.setStorage({
							key:"token",
							data:res.data.data.token
						});
						wx.getStorage({
							key:"token",
							success(res){
								wx.request({
									url:'http://49.234.8.137:9090/user/queryuser?token='+res.data,
									method:'post',
									success:(res)=>{
										//设置用户id
										wx.setStorage({
											key:"id",
											data:res.data.data.id
										});
										//检查用户id是否存在
										wx.getStorage({
											key:"id",
											//存在返回登录成功
											success: () => {
												wx.hideLoading();
												wx.showToast({
												  title: '登录成功',
												  icon: 'success',
												  duration: 2000
												});
												setTimeout(function(){
													wx.navigateBack({
														delta:1
													});
												},2200);
											},
											//不存在则返回登录失败
											fail: () => {
												wx.hideLoading();
												wx.showToast({
												  title: '用户信息设置失败',
												  icon: 'none',
												  duration: 2000
												})
											}
										})
									},
									//请求接口失败
									fail: () => {
										wx.hideLoading();
										wx.showToast({
										  title: '用户信息设置失败',
										  icon: 'none',
										  duration: 2000
										})
									}
								})
							},
							fail() {
								wx.hideLoading();
								wx.showToast({
								  title: '登录失败',
								  icon: 'none',
								  duration: 2000
								})
							}
						})
					},
					fail:()=>{
						wx.showToast({
						  title: '连接失败',
						  icon: 'none',
						  duration: 2000
						})
					}
				})
			},
			//获取验证码
			getCode(){
				if(!this.isChecked){
					wx.showModal({
					  title: '提示',
					  content: '请先同意下方协议',
					  showCancel: false,
					});
					return;
				}
				if(this.reg.test(this.phone)){
					wx.showLoading({
					  title: '请稍后',
					})
					wx.request({
						url:'http://49.234.8.137:9090/sms/login',
						data:{
							phone:this.phone
						},
						fail:(res)=>{
							wx.hideLoading();
							wx.showToast({
							  title: '服务器错误',
							  icon: 'none',
							  duration: 2000
							})
						},
						success:(res)=>{
							wx.hideLoading();
							console.log(res)
							if(res.data.code === 0){
								this.isShow = true;
								wx.showToast({
								  title: '验证码已下发',
								  icon: 'success',
								  duration: 1000
								});
							}
						}
					})
				}else{
					wx.showModal({
					  title: '提示',
					  content: '请输入正确的手机号',
					  showCancel: false,
					  success: (res)=> {
					    if (res.confirm) {
					      this.phone='';
					    }
					  }
					})
				}
			},
			//勾选是否同意协议
			changeRadio(){
				this.isChecked = !this.isChecked;
			},
			//用户协议展开
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
		},
		onLoad() {
			// wx.getUserInfo({
			// 	success: (res)=>{
			// 		console.log(res)
			// 	  wx.setStorage({
			// 		key:"img",
			// 		data:res.userInfo.avatarUrl
			// 	});
			// 	wx.setStorage({
			// 		key:"nickname",
			// 		data:res.userInfo.nickName
			// 	});
			// 	},
			// 	bindGetUserInfo(e){
			// 		console.log(e.detail.userInfo)
			// 	}
			// })
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	.info{
		font-size: 26rpx;
		margin-top: 10rpx;
		color: #AAAAAA;
	}
	#app{
		padding: 50rpx;
		position: relative;
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
		margin-top: 140rpx;
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
	.infoModel{
		z-index: 60;
		width: 80%;
		height: 320rpx;
		background-color: #fff;
		position: absolute;
		top: 30%;
		left: 10%;
		margin-top: -160rpx;
		border-radius: 10rpx;
		.hideInput{
			width: 0;
			height: 0;
			position: absolute;
		}
		.inputCode{
			display: flex;
			margin: 20rpx;
			justify-content: space-around;
			>input{
				text-align: center;
				margin-top: 30rpx;
				border-bottom: 1px solid #EF8D34;
			}
		}
		.infoText{
			text-align: center;
			margin-top: 20rpx;
		}
	}
	.layer{
		background-color: rgba(0,0,0,.3);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 50;
	}
	.confirmBtn{
		width:calc(100%-40rpx);
		margin: 50rpx 20rpx;
		border-radius: 10rpx;
		color: #fff;
		text-align: center;
		height: 70rpx;
		line-height: 70rpx;
		transition: background-color .3s linear;
	}
	.pass{
		background-color: #EF8D34;
	}
	.disabled{
		background-color: #808080;
	}
</style>
