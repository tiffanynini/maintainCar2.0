<template>
	<view>
		<view class="body">
			<view @click="testAs1">
				<text>基本资料</text>
				<view class="right">
					<!-- <image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/基本资料/u2106.jpg?token=59bf91e540bd3ac3729d46fdb0f4d35a3a317f2b85cc9a4a4b81d5339b07e7c0" mode="heightFix"></image> -->
					<image :src="photo" mode="widthFix"></image>
					<text class="iconfont icon-jiantou"></text>
				</view>
			</view>
			<view>
				
				<uni-list :border="true">
					<uni-list-item title="昵称" rightText="梁先森123" @click="onClick($event,1)" ></uni-list-item>
					<uni-list-item title="邮箱" link to="/pages/vue/index/index" rightText="123456789@qq.com" @click="onClick($event,1)" ></uni-list-item>
					<uni-list-item title="个性签名" link to="/pages/vue/index/index" rightText="失败乃成功TM" @click="onClick($event,1)" ></uni-list-item>
					<uni-list-item title="生日" link to="/pages/vue/index/index" rightText="1996-07-01" @click="onClick($event,1)" ></uni-list-item>
				    <uni-list-item title="手机号码" rightText="17600000000" @click="onClick($event,1)" ></uni-list-item>
				</uni-list>
			</view>
		</view>
		<!-- 模态框 选择相机或者相册 -->
		<min-action-sheet ref="as">
		</min-action-sheet>
		<uni-icons class="save" type="checkmarkempty" size="40" color="#fff" @click="confirm" v-if="onOff" v-show="!functionSwitch">保存</uni-icons>
		<uni-icons class="take" type="camera" size="50" color="#fff" @click="takePhoto" v-if="onOff" v-show="functionSwitch">拍照</uni-icons>
		<uni-icons class="switchover" type="loop" size="40" color="#fff" @click="camera" v-if="onOff" v-show="functionSwitch">切换</uni-icons>
		<uni-icons class="rephotograph" type="refreshempty" size="40" color="#fff" @click="rephotograph" v-if="onOff" v-show="!functionSwitch">重拍</uni-icons>
		<uni-icons class="shut" type="close" size="40" color="#fff" @click="onOffFn" v-if="onOff" v-show="functionSwitch">关闭</uni-icons>
		<view class="camera" v-if="onOff">
			<camera :device-position="devicePosition" flash="off" @error="error" style="width: 100%; height: 100%;"></camera>
			<!-- 未确定照片 -->
			<image v-if="onOff" class="preview" mode="widthFix" :src="src"></image>
		</view>
	</view>
</template> 

<script>
	// 引入字体图标
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	// 引入模态框
	import minActionSheet from '@/components/min-action-sheet/min-action-sheet'
	export default {
		// 引入模态框
		components: {
		    minActionSheet,
			uniIcons
		},
		data() {
			return {
				//确定的照片
				photo:"http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/基本资料/u2106.jpg?token=59bf91e540bd3ac3729d46fdb0f4d35a3a317f2b85cc9a4a4b81d5339b07e7c0",
				// 未确定的照片
				src:"",
				// 切换前后摄像头
				devicePosition:"front",
				// 显示隐藏相机模块
				onOff:false,
				// 功能开关
				functionSwitch:true
			};
		},
		methods: {
			  // 模态框
			testAs1 () {
				this.$refs.as.handleShow({
					actions: [
						{
							name: '拍照'
						},
						{
							name: '我的相册'
						}
					],
					success: (res) => {
						switch (res.id) {
							// -1代表取消按钮
							case -1:
							  console.log(res);
							  break;
							  // 相机
							case 0:
							  console.log(res,0)
							  this.onOffFn();
							  break;
							  // 相册
							case 1:
							  console.log(res,1);
							  this.a();
							  break;
						}
					}
				})
			},
			//相机模块拍照
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath;
						console.log(res);
						this.functionSwitch=false;
					}
				});
			},
			error(e) {
				console.log(e.detail);
			},
			// 切换
			camera(){
				if(this.devicePosition=="front"){
					this.devicePosition="back";
				}else{
					this.devicePosition="front";
				}
			},
			// 保存
			confirm(){
				if(this.src.length!=0){
					this.photo=this.src;
					this.onOff=!this.onOff;
					this.functionSwitch=!this.functionSwitch;
				}
			},
			// 重拍
			rephotograph(){
				this.src="";
				this.functionSwitch=!this.functionSwitch;
			},
			// 显示隐藏相机
			onOffFn(){
				this.onOff=!this.onOff;
				this.src="";
			},
			a(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album '], //从相册选择
				    success:(res) =>{
				        console.log(JSON.stringify(res.tempFilePaths));
						console.log(res.tempFilePaths[0]);
						this.photo=res.tempFilePaths[0];
				    }
				});
			},
			b(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera '], //从相册选择
				    success:(res) =>{
				        console.log(JSON.stringify(res.tempFilePaths));
						console.log(res.tempFilePaths[0]);
						this.photo=res.tempFilePaths[0];
				    }
				});
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
	.body{
		margin-top: 100rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #D7D7D7;
		view:first-child{
			display: flex;
			flex-direction: row;
			text:first-child{
				padding-left: 30rpx;
				height: 80rpx;
				line-height: 80rpx;
				flex: 1;
				font-size: 28rpx;
			}
			.right{
				line-height: 80rpx;
				display: flex;
				flex-direction: ;
				height: 80rpx;
				padding: 0 20rpx;
				image{
					flex: 1;
					height: 70rpx;
					width: 70rpx;
					margin: 4rpx 10rpx 0 0;
				}
				text{
					color: #BBBECA;
				}
			}
		}
	}
	
	.preview{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
	}
	.camera{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	camera{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
	//保存
	.save{
		position: fixed;
		top: 0;
		right: 0;
		z-index: 4;
		background-color: #828074;
		border-radius: 50%;
	}
	// 拍照
	.take{
		position: fixed;
		bottom: 0;
		left: 50%;
		margin-left: -60rpx;
		z-index: 4;
		background-color: #828074;
		border-radius: 50%;
		padding: 20rpx;
	}
	// 切换
	.switchover{
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 4;
		background-color: #828074;
		border-radius: 50%;
	}
	// 重拍,关闭
	.rephotograph,.shut{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 4;
		border-radius: 50%;
		background-color: #828074;
	}
</style>
