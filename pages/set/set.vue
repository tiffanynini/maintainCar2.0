<template>
	<view>
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
			<navigator url="" hover-class="none">
				<view>
					<span class="iconfont icon-change_password font"></span>
				</view>
				<view class="right">
					<text class="text">修改密码</text>
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
			<navigator url="" hover-class="none">
				<view>
					<span class="iconfont icon-gengxin font"></span>
				</view>
				<view class="right">
					<text class="text">检查更新</text>
					<text class="inform">
						<text class="iconfont icon-jiantou"></text>
					</text>
				</view>
			</navigator>
			<navigator url="" hover-class="none">
				<view>
					<span class="iconfont icon-lajiqinglifei font"></span>
				</view>
				<view class="right">
					<text class="text">清理缓存</text>
					<text class="inform">
						12.566 m<text class="iconfont icon-jiantou"></text>
					</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			msgChange: function (e) {
				console.log(e.target.value)
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/font/iconfont.css");
	page{
		height: 100%;
		background-color: #F4F4F3;
	}
	.header{
		margin-top: 100rpx;
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
				border-bottom: 2rpx solid #D7D7D7;
				height: 80rpx;
			}
			
		}
		navigator:last-child{
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
	.body{
		margin-top: 100rpx;
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
		navigator:nth-child(2){
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
		navigator:nth-child(3){
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
</style>
