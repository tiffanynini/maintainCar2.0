<template>
	<view class="box">
		<view class="title">
			汽车保养小心这4大陷阱，修车师傅都有小动作，可以多开很多年
		</view>
		<view class="titleInfo">
			发表于2020-10-20 20:17:36  阅读:1238
		</view>
		<view class="video">
			<video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls style="width: 100%;"></video>
		</view>
		<view class="comment">
			评论
		</view>
		<view class="content" :key="i" v-for="(v,i) in arr">
			<view class="left">
				<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E4%BF%9D%E5%85%BB%E5%85%AD%E5%AE%97%E7%BD%AA/u505.svg?token=8a52108a5aa7827263f06213206aec5daa5a2d123982674ad67b26bf88514a29" style="width: 50rpx;" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="right-top">
					<view class="right-top-left">
						<view>无惧</view>
						<view>2019-07-02</view>
					</view>
					<view class="right-top-right">
						<view>5466</view>
						<view class="iconfont icon-dianzan"></view>
					</view>
				</view>
				<view class="right-bottom">
					说得太棒了，get...以后再不用担心胎压过高或者过低的情况了
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:["","","",""]
			};
		},
		created() {
			wx.setNavigationBarTitle({
				title:'标题'
			})
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
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
