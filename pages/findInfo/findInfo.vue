<template>
	<view class="box">
		<view class="title">{{title}}</view>
		<view class="titleInfo">
			发表于{{time}}  阅读:{{read}}
		</view>
		<view class="video">
			<video :src="video" controls style="width: 100%;"></video>
		</view>
		<view class="comment">
			评论
		</view>
		<view v-if="!arr.length" class="noComment">暂无评论</view>
		<view class="content" :key="i" v-for="(v,i) in arr" v-if="arr.length">
			<view class="left">
				<image :src="v.img" style="width: 50rpx;" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="right-top">
					<view class="right-top-left">
						<view>{{v.name}}</view>
						<view>{{v.time.split(' ')[0]}}</view>
					</view>
					<view class="right-top-right">
						<view>{{v.num}}</view>
						<view class="iconfont icon-dianzan"></view>
					</view>
				</view>
				<view class="right-bottom">
					{{v.content}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[],
				time:'',
				read:'',
				video:'',
				id:-1,
				title:''
			};
		},
		onLoad(option) {
			this.time = option.time.split('.')[0];
			this.read = option.read;
			this.video = option.url;
			this.id = option.id;
			this.title = option.title;
		},
		onShow(){
			wx.request({
				url:'http://106.12.97.151/getComment',
				method:'post',
				data:{
					id:this.id
				},
				success:(res)=>{
					this.arr = res.data.data;
					console.log(this.arr)
				}
			})
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	.noComment{
		margin-top: 50rpx;
		text-align: center;
		color: #AAAAAA;
		font-size: 24rpx;
	}
	.box{
		padding: 10rpx 20rpx;
		.title{
			font-size: 36rpx;
			font-weight: bold;
		}
		.titleInfo{
			margin-top: 10rpx;
			font-size: 24rpx;
			color: #AAAAAA;
		}
		.video{
			margin-top: 20rpx;
		}
		.content{
			margin-top: 30rpx;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #AAAAAA;
			display: flex;
			.left{
				text-align: center;
				flex: 1;
			}
			.right{
				flex: 5;
				font-size: 24rpx;
				display: flex;
				flex-direction: column;
				.right-bottom{
					margin-top: 8rpx;
					font-size: 28rpx;
				}
				.right-top{
					display: flex;
					justify-content: space-between;
					.right-top-right{
						display: flex;
						.icon-dianzan{
							margin-left: 10rpx;
						}
					}
				}
			}
		}
		.content:nth-last-of-type(1){
			border-bottom: 0;
		}
		.comment{
			padding-bottom: 14rpx;
			color: #AAAAAA;
			font-size: 24rpx;
			margin-top: 50rpx;
			border-bottom: 1px solid #AAAAAA;
		}
	}
	
</style>
