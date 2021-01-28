<template>
	<view class="div1">
		<!-- 搜索框 -->
			<uni-search-bar placeholder="搜索服务、门店等关键词" :radius="100" @confirm="search" clearButton="none" cancelButton="always" :cancelText="cancelText" :value="msg1"  class="search1"></uni-search-bar>
		<!-- 热门搜索-->
		<view class="hotSearch">
			<view class="searchText">热门搜索</view>
			<view class="searchText2">
				<view class="[sel==index?'active':'']" :key="index" v-for="(item,index) in hotArray" @click="hotSearch1(index)">{{item.hotText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1、搜索框
				msg1:'',
				// 取消文字
				cancelText:'取消',
				// 热门
				sel:0,
				hotArray:[
					{
						hotText:'洗车'
					},
					{
						hotText:'打蜡'
					}
				],
				// ip
				ip:'http://172.16.14.29:6067',
				// token
				token:'88318de7a5b44fc0aa43fadf22e1980a'
			};
		},
		methods:{
			// 1、搜索框
			// 回车
			search(e){
				this.msg1=e.value;
				console.log(this.msg1);
			},
			// 2、热门搜索
			hotSearch1(i){
				this.sel=i;
				console.log(this.sel);
			}
			
			
		}
	}
</script>

<style lang="less">
	.div1{
		height: 100%;
		background-color: #F3F4F6;
		// 搜索框
		.search1{
			background-color: #FD8F33;
			color: #fff;
		}
		// 热门搜索
		.hotSearch{
			height: 150rpx;
			background-color:#fff;
			margin-top: 20rpx;
			.searchText{
				height: 70rpx;
				line-height: 70rpx;
				border-bottom: 2rpx solid #ccc;
				padding-left: 10rpx;
			}
			.searchText2{
				height: 80rpx;
				// line-height: 110rpx;
				display: flex;
				align-items: center;
				padding-left: 20rpx;
				view{
					width: 100rpx;
					height: 40rpx;
					border-radius: 10rpx;
					text-align: center;
					font-size: 26rpx;
					line-height: 40rpx;
					border: 1rpx solid #ccc;
					margin-right: 20rpx;
				}
				.active{
					background-color: #FD8F33;
					color: #fff;
					border: 0;
				}
			}
		}
	}
	
</style>
