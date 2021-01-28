<template>
	<view>
		<uni-list>
		    <uni-list :border="true">
		        <uni-list-chat clickable="true" @click="feedback('暂无消息')" title="系统消息" avatar="../../static/images-msg/systemMsg.png" note="暂无消息" badge-positon="left" ></uni-list-chat>
		        <uni-list-chat clickable="true" @click="feedback('暂无消息')" title="咨询消息" avatar="../../static/images-msg/consultMsg.png" note="暂无消息" badge-positon="left"></uni-list-chat>
				<uni-list-chat clickable="true" @click="skip" title="客服消息" avatar="../../static/images-msg/serviceMsg.png" note="您收到一条新的消息" badge-positon="left" badge-text="dot"></uni-list-chat>
		    </uni-list>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			// 交互反馈
			feedback(v){
				uni.showToast({
					title:v,
					icon:"none"
				})
			},
			//跳转客服消息
			skip(){
				wx.navigateTo({
				    url:'../index-connect/index-connect'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>
