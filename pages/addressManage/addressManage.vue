<template>
	<view>
		<view class="container">
			<view class="header">
				<navigator url="../addAddress/addAddress" open-type="navigate">添加收货地址</navigator>
			</view>
			<view class="section" v-for="(v,i) in addressMsg" :key="i">
				<view class="defauleMsg" v-show="i===0&&showDefault">
					<image src="../../static/images/default.png"></image>
				</view>
				<view class="head-header">
					<text class="iconfont icon-dingwei1 header-icon1"></text>
				</view>
				<view class="head-middle">
					<text space="emsp">{{v.receiverName}} {{v.receiverPhone}}</text>
					<text space="emsp">{{v.receiverProvince}}{{v.receiverCity}}{{v.receiverTown}}{{v.receiverAddress}}</text>
				</view>
				<view class="head-footer">
					<navigator :url="'../editAddress/editAddress?id='+v.id" open-type="navigate">
						<image src="../../static/images/edit.png"></image>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				addressMsg:[],
				showDefault:false
			}
		},
		methods:{
			init(){
				//初始化渲染页面
				wx.request({
					url:this.pageUrl.pageUrl+"/order/findAllAddress?userId="+wx.getStorageSync('userId'),
					method:'get',
					header:{
						token: wx.getStorageSync('token')
					},
					success: (res) => {
						if(res.statusCode === 200 ){
							if(res.data.data.length > 0){
								this.addressMsg = res.data.data;
								//取第一条的数据def，判断是否为1
								if(res.data.data[0].def === 1){
									this.showDefault=true;
								}
							}
						}
					},
					fail:(err)=>{
						console.log(err);
					}
				})
			},
		},
		mounted() {
			this.init();
		},
		//监听页面显示
		onShow() {
			this.init();
			this.showDefault = false;
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
		overflow: hidden;
	}
	.header{
		background-color: #fff;
		border: 1px #eee solid;
		border-radius: 24rpx;
		height: 80rpx;
		margin: 24rpx 12rpx;
		navigator{
			font-size: 36rpx;
			text-align: center;
			display: block;
			line-height: 80rpx;
		}
	}
	.section{
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		background: #fff;
		margin-bottom: 24rpx;
		position: relative;
		.defauleMsg{
			image{
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				opacity: 0.8;
				right: 0;
				top: 0;
			}
		}
		.head-header{
			margin-top: 20rpx;
			width: 10%;
			text-align: center;
			.header-icon1{
				color: #FD8F33;
				line-height: 80rpx;
				font-size: 66rpx;
			}
		}
		.head-middle{
			display: flex;
			flex-direction: column;
			font-size: 32rpx;
			margin-top: 20rpx;
			width: 80%;
			text:last-child{
				font-size: 28rpx;
				line-height: 44rpx;
			}
		}
		.head-footer{
			margin-top: 40rpx;
			width: 10%;
			navigator{
				width: 50rpx;
				height: 50rpx;
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			
		}
	}
</style>
