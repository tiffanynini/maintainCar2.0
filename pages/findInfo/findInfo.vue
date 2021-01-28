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
				<image :src="v.img === 'undefined'?'http://103.210.21.253/yangchebei/images/default.png':v.img" style="width: 50rpx;" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="right-top">
					<view class="right-top-left">
						<view>{{v.name}}</view>
						<view>{{v.time.split(' ')[0]}}</view>
					</view>
					<!-- <view class="right-top-right">
						<view>{{v.num}}</view>
						<view class="iconfont icon-dianzan"></view>
					</view> -->
				</view>
				<view class="right-bottom">
					{{v.content}}
				</view>
			</view>
		</view>
		<view class="evaInput">  
			<input type="text" maxlength="500" placeholder="发表你的想法" v-model="val"/>
			<text @click="push">发表</text>
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
				title:'',
				val:''
			};
		},
		methods:{
			push(){
				if(this.val === ''){
					wx.showModal({
					  title: '提示',
					  showCancel:false,
					  content: '评论不能为空',
					})
				}else{
					wx.checkSession({
						success:()=>{
							uni.request({
							    url: this.pageUrl.pageUrl+'/userInfo/userInfo',
								 header: {
									 'token': '88318de7a5b44fc0aa43fadf22e1980a'
								 },
								success: (res) => {
									console.log(res)
									wx.request({
										url:'http://106.12.97.151/addComment',
										method:'post',
										data:{
											name:res.data.data.signature,
											img:res.data.data.img,
											content:this.val,
											id:this.id,
											num:0
										},
										success:(res)=>{
											wx.showToast({
											  title: '发布成功',
											  icon: 'success',
											  duration: 2000
											})
										},
										fail:()=>{
											wx.showToast({
											  title: '发布失败',
											  icon: 'none',
											  duration: 2000
											})
										}
									})
							    }
							});
						},
						fail() {
							wx.navigateTo({
								url:'../login/login'
							})
						}
					})
					/* uni.request({
					    url: 'http://172.17.1.203:6067/userInfo/userInfo', 
						 method:'get', 
						 header: {
							 'token': 'efbe8ad0bacb4b68a28080639bade483'
						 },
						success: (res) => {
							this.birthday=res.data.data.birthday.substring(0,10);
							this.email=res.data.data.email;
							if(res.data.data.image!=null){
								this.photo=res.data.data.image;
							}
							this.signature=res.data.data.signature;
					    }
					}); */
				}
			},
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
					console.log(this.id)
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
	.evaInput{
		position: fixed;
		width: 100%;
		height: 100rpx;
		background-color: #DD4A68;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		background-color: #f8f8f8;
		box-sizing: border-box;
		padding: 0 20rpx;
		input{
			flex: 1;
		}
	}
	.box{
		margin-bottom: 100rpx;
		padding: 10rpx 20rpx;
		position: relative;
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
