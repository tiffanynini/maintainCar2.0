<template>
	<view class="list">
		<view class="box" @click="jump" v-for="(v,i) in arrList" :key="i">
			<view class="desc">
				<image style="width: 100%;" :src=v.thumbnail mode="widthFix"></image>
				<p>{{v.title}}</p>
			</view>
			<view class="flex box_footer">
				<view class="flex">
					<i class="iconfont icon-pinglun logo"></i>
					<view class="number">{{v.msg}}</view>
					<i class="iconfont icon-caidan1 logo"></i>
					<view class="number">{{v.watch}}</view>
				</view>
				<view>
					{{v.time.substring(0,10)}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onShow() {
			wx.request({
				url:'http://106.12.97.151/getVideoList',
				method:'post',
				success:(res)=>{
					this.arrList = res.data.data;
				}
			})
		},
		data() {
			return {
				arrList:[]
			};
		},
		methods:{
			jump(){
				wx.navigateTo({
					url:'../findInfo/findInfo'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("@/static/font/iconfont.css");
	.list{
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #F3F4F6;
	}
	.flex{
		display: flex;
		flex-wrap: wrap;
	}
	.box{
		flex-wrap: wrap;
		background-color: #fff;
		margin: 24rpx;
		padding: 20rpx;
		>view{
			display: flex;
			flex-wrap: wrap;
		}
		.desc{
			>p{
				font-size: 36rpx;
				font-weight: bold;
				margin-top: 20rpx;
			}
		}
		.box_footer{
			margin-top: 28rpx;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
			.flex{
				align-items: center;
			}
			.number{
				margin: 0 20rpx 0 14rpx;
				
			}
		}
	}
</style>