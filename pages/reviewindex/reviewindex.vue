<template>
	<view>
		<view class="middle_nav">
			<view class="middle_nav_content" :class="middleStatus=='1'?'active':''" @click="changeStatus(1)">全部({{reviewnumber1}})</view>
			<view class="middle_nav_content" :class="middleStatus=='2'?'active':''" @click="changeStatus(2)">好评({{reviewnumber2}})</view>
			<view class="middle_nav_content" :class="middleStatus=='3'?'active':''" @click="changeStatus(3)">中评({{reviewnumber3}})</view>
			<view class="middle_nav_content" :class="middleStatus=='4'?'active':''" @click="changeStatus(4)">差评({{reviewnumber4}})</view>
			<view class="middle_nav_content" :class="middleStatus=='5'?'active':''" @click="changeStatus(5)">有图({{reviewnumber5}})</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 导航栏状态（1为商品/默认，2为评价，3为商家）
				middleStatus: '1',
				reviewnumber1: 0,
				reviewnumber2: 0,
				reviewnumber3: 0,
				reviewnumber4: 0,
				reviewnumber5: 0,
			}
		},
		methods: {
			// 中部导航切换按钮
			changeStatus(val) {
				this.middleStatus = val;
			},
		},
		onLoad(val) {
			console.log(val);
		}
	}
</script>

<style lang="less">
	// 中部导航栏
	.middle_nav {
		height: 88rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #B0B0B0;
		border-bottom: 1rpx solid #EEEEEE;
	}
	
	.middle_nav_content {
		width: 166rpx;
		height: 88rpx;
		font-size: 27rpx;
		line-height: 88rpx;
		text-align: center;
		border: none;
		color: #7F7F7F;
		// 让border向内挤压，避免直接增加高度导致字体跳动
		box-sizing: border-box;
	}
	
	.middle_nav_content.active {
		color: #000000;
		border-bottom: 3rpx solid #FD8F33;
	}
	

</style>
