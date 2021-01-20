<template>
	<view class="box">
		<view class="list">
			<view v-for="(v,i) in arr" @click="change(i)" :class="sel === i?'selected':''" :key="i">{{v}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				arr:["全部(0)","好评(0)","中评(0)","差评(0)","有图(0)"],
				sel:0
			}
		},
		methods:{
			change(i){
				this.sel = i;
			}
		}
	}
</script>

<style lang="less">
	html,body{
		height: 100%;
		background-color: #F4F4F3;
	}
	.box{
		.list{
			display: flex;
			justify-content: space-between;
			font-size: 30rpx;
			background-color: #fff;
			>view.selected{
				border-bottom: 2px solid #FD8F33;
			}
			>view{
				padding: 10rpx 16rpx;
			}
		}
	}
</style>
