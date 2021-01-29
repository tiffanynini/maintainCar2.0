<template>
	<view class="container">
		<view class="context">
			<view class="inputContent">
				<label for="address.receiverName">收货人</label>
				<input v-model="address.receiverName" placeholder="请输入收货人" id="receiverName" />
			</view>
			<view class="inputContent">
				<label for="receiverPhone"> 手机号码</label>
				<input v-model="address.receiverPhone" placeholder="请输入手机号码" id="receiverPhone" @change="checkPhone"/>
			</view>
			<view class="inputContent">
				<label for="region">所在地区</label>
				<picker mode="region" value="region" @change="bindRegionChange">
				    <view class="picker">
						{{region[0]}}/{{region[1]}}/{{region[2]}}
				    </view>
				</picker>
			</view>
			<view class="inputContent">
				<label for="receiverAddress">详细地址</label>
				<input v-model="address.receiverAddress" placeholder="请输入详细地址" id="receiverAddress" />
			</view>
			<view class="inputBottom">
				 <label class="radio"><radio value="r1" :checked="checkTip" @click="changeRadio"/>设置默认地址</label>
			</view>
		</view>
		<view class="footer">	
			<view class="footer-content">
				<view @click="baoCun">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				address:{
					receiverName:'',
					receiverPhone:'',
					receiverProvince:'广东省',
					receiverCity:'广州市',
					receiverTown:'海珠区',
					receiverAddress:'',
					def:'0',//0是未选中，1是选中,
					userId:'1'
				},
				region: ['广东省', '广州市', '海珠区'],
				//默认地址是否选中
				checkTip:false
			}
		},
		methods:{
			bindRegionChange(e){
				this.region = e.detail.value;
				this.address.receiverProvince = this.region[0];
				this.address.receiverCity = this.region[1];
				this.address.receiverTown = this.region[2];
			},
			//改变radio状态
			changeRadio(){
				this.checkTip = !this.checkTip;
				if(this.checkTip){
					this.address.def = '1';
				}else{
					this.address.def = '0';
				}
			},
			//正则验证手机号码
			checkPhone(){
				let reg = /^1[3-9]\d{9}$/;
				if(!reg.test(this.address.receiverPhone)){
					wx.showToast({
						title:"手机号格式错误!",
						icon:"none",
						duration:1000
					})
				}
			},
			baoCun(){
				//数据的合法性判断
				if(!this.address.receiverName || !this.address.receiverPhone || !this.address.receiverAddress){
					wx.showToast({
						title: '以上信息不能为空！',
						icon:'none',
						duration:1000
					});
					return;
				}else{
					//正则验证
					let reg = /^1[3-9]\d{9}$/;
					if(!reg.test(this.address.receiverPhone)){
						wx.showToast({
							title:"手机号格式错误!",
							icon:"none",
							duration:1000
						})
					}else{
						wx.request({
							url:this.pageUrl.pageUrl+'/order/addAddress',
							method:'post',
							header:{
								token: wx.getStorageSync('token')
							},
							data:this.address,
							success: (res) => {
								if(res.statusCode === 200){
									wx.showToast({
										title:"添加成功!",
										icon:"success",
										duration:1000,
										success() {
											setTimeout(function(){
												//跳转回地址管理页面
												wx.navigateBack({
													delta:1
												})
											},1000);
										}
									})
								}
								//清除输入
								this.address.receiverName = '';
								this.address.receiverPhone = '';
								this.address.receiverAddress = '';
							},
							fail: (err) => {
								console.log(err);
							}
						})
					}
				}
			}
		}
	}
</script>

<style lang="less">
	body,html{
		height: 100%;
	}
	.container{
		color:#333333;
		background-color: #F4F4F3;
		height: 100%;
		.context{
			background-color: #fff;
			padding-left: 10rpx;
			.inputContent{
				border-bottom: 1px #D7D7D7 solid;
				display: flex;
				align-items: center;
				font-size: 34rpx;
				height: 70rpx;
				width: 98%;
				input{
					flex: 1;
				}
				label{
					margin-right: 20rpx;
					display: block;
					width: 140rpx;
					margin-left: 12rpx;
				}
			}
			.inputBottom{
				display: flex;
				align-items: center;
				font-size: 34rpx;
				height: 70rpx;
				label{
					font-size: 32rpx;
					line-height: 70rpx;
					radio{
						transform: scale(0.6);
						margin-left: -10rpx;
					}
				}
			}
			
		}
	}
	.footer{
		display: flex;
		justify-content: center;
		.footer-content{
			background-color: #FD8F33;
			border-radius: 40rpx;
			height: 80rpx;
			margin: 50rpx 12rpx;
			text-align: center;
			width: 94%;
			>view{
				font-size: 36rpx;
				display: block;
				line-height: 80rpx;
				color: #fff;
			}
		}
	}
</style>
