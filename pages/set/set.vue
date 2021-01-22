<template>
	<view class="div1">
		<view class="div2"></view>
		<view class="header">
			<navigator url="../basic-information/basic-information" hover-class="none">
				<view>
					<span class="iconfont icon-renyuan font"></span>
				</view>
				<view class="right">
					<text class="text">基本资料</text>
					<text>
						<text class="iconfont icon-jiantou"></text>
					</text>
				</view>
			</navigator>
		</view>
		<view class="body">
			<view>
				<view>
					<span class="iconfont icon-xiaoxitongzhi font"></span>
				</view>
				<view class="right">
					<text class="text">接受消息通知</text>
					<view class="inform">
						<switch :checked="true" @change="msgChange" color="#4BD462"/>
					</view>
				</view>
			</view>
			<view url="" hover-class="none" @click="loading" >
				<view>
					<span class="iconfont icon-gengxin font"></span>
				</view>
				<view class="right">
					<text class="text">检查更新</text>
					<text class="inform">
						<text class="iconfont icon-jiantou"></text>
					</text>
				</view>
			</view>
			<view url="" hover-class="none" @click="setShowCache">
				<view>
					<span class="iconfont icon-lajiqinglifei font"></span>
				</view>
				<view class="right">
					<text class="text">清理缓存</text>
					<text class="inform">
						{{cache}}
						<text class="iconfont icon-jiantou"></text>
					</text>
				</view>
			</view>
		</view>
		<!-- 检查更新模态框 -->
		<view class="update" v-if="showUpdate" @click="setShowUpdate"></view>
		<view class="content" v-if="showUpdate">
			<view class="contentText">温馨提示</view>
			<view class="contentText">您现在的客户端已经是最新版本！</view>
			<view class="contentText" @click="setShowUpdate">确定</view>
		</view>
		<!-- 清除缓存模态框 -->
		<view class="cache" v-if="showCache" @click="setShowCache"></view>
		<view class="content" v-if="showCache">
			<view class="contentText">温馨提示</view>
			<view class="contentText">是否清除客户端缓存</view>
			<view class="contentText">
				<view @click="setShowCache">否</view>
				<view @click="confirmSetShowCache">是</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入模态框
	import kModel from '@/components/k-model/k-model.vue';
	export default{
		data(){
			return{
				// 显示更新模态框
				showUpdate:false,
				//显示缓存模态框
				showCache:false,
				//缓存数据
				cache:"12.566m"
			}
		},
		methods:{
			msgChange: function (e) {
				console.log(e.target.value)
			},
			// 检查版本
			loading(){
				uni.showToast({
				    title: '检查版本中',
				    duration: 2000,
					icon:"loading"
				});
				setTimeout(this.setShowUpdate,2000)
			},
			// 开关更新模态框
			setShowUpdate(){
				this.showUpdate=!this.showUpdate;
			},
			// 开关设置缓存模态框
			setShowCache(){
				this.showCache=!this.showCache;
			},
			confirmSetShowCache(){
				this.cache="0m"
				this.showCache=!this.showCache;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/font/iconfont.css");
	page{
		height: 100%;
		background-color: #F4F4F3;
	}
	.div1{
		height: 100%;
		background-color: #F4F4F3;
	}
	.div2{
		height: 100rpx;
		background-color: #F4F4F3;
	}
	.header{
		background-color: #fff;
		border-bottom: 2rpx solid #D7D7D7;
		border-top: 2rpx solid #D7D7D7;
		navigator:first-child{
			display: flex;
			view:first-child{
				.font{
					margin-right: 30rpx;
					line-height: 80rpx;
					color: #ADADAD;
					height: 80rpx;
					font-size: 50rpx;
				}
			}
			.right{
				line-height: 80rpx;
				display: flex;
				flex: 1;
				justify-content: space-between;
				// border-bottom: 2rpx solid #D7D7D7;
				height: 80rpx;
			}
			
		}
	}
	.body{
		margin-top: 60rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #D7D7D7;
		border-top: 2rpx solid #D7D7D7;
		view:first-child{
			display: flex;
			view:first-child{
				.font{
					margin-right: 30rpx;
					line-height: 80rpx;
					color: #ADADAD;
					height: 80rpx;
					font-size: 50rpx;
				}
			}
			.right{
				line-height: 80rpx;
				display: flex;
				flex: 1;
				justify-content: space-between;
				border-bottom: 2rpx solid #D7D7D7;
				height: 80rpx;
			}
		}
		view:nth-child(2){
			display: flex;
			view:first-child{
				.font{
					margin-right: 30rpx;
					line-height: 80rpx;
					color: #ADADAD;
					height: 80rpx;
					font-size: 50rpx;
				}
			}
			.right{
				line-height: 80rpx;
				display: flex;
				flex: 1;
				justify-content: space-between;
				border-bottom: 2rpx solid #D7D7D7;
				height: 80rpx;
			}
		}
		view:nth-child(3){
			display: flex;
			view:first-child{
				.font{
					margin-right: 30rpx;
					line-height: 80rpx;
					color: #ADADAD;
					height: 80rpx;
					font-size: 50rpx;
				}
			}
			.right{
				line-height: 80rpx;
				display: flex;
				flex: 1;
				justify-content: space-between;
				height: 80rpx;
			}
		}
		
	}
	.update,.cache{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(146,146,146,.7);
	}
	.content{
		position: fixed;
		left: 50%;
		top: 50%;
		margin-top: -150rpx;
		margin-left: -250rpx;
		flex-wrap: wrap;
		width: 500rpx;
		height: 300rpx;
		background-color: #fff;
		display: flex;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		z-index: 1;
		.contentText{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			border-bottom: 1rpx solid #D7D7D7;
			display: flex;
			justify-content: space-around;
			view{
				flex: 1;
			}
		}
	}
</style>
