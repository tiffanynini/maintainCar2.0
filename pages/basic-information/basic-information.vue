<template>
	<view class="body">
		<view class="">
			
		</view>
		<view class="content">
			<view @click="testAs1">
				<text>基本资料</text>
				<view class="right">
					<image :src="photo" mode="widthFix"></image>
					<text class="iconfont icon-jiantou"></text>
				</view>
			</view>
			<view>
				<uni-list :border="true">
					<uni-list-item title="昵称" :rightText="name"></uni-list-item>
					<uni-list-item title="邮箱" link clickable=false :rightText="mail" @click="openMail"></uni-list-item>
					<uni-list-item title="个性签名" link :rightText="signature" @click="openSignature"></uni-list-item>
					<uni-list-item title="生日" link :rightText="birthday" @click="openBirthday"></uni-list-item>
				    <uni-list-item title="手机号码" rightText="17600000000"></uni-list-item>
				</uni-list>
			</view>
		</view>
		<!-- 模态框 选择相机或者相册 -->
		<min-action-sheet ref="as">
		</min-action-sheet>
		
		<!-- 模态框 修改邮箱 -->
		<neil-modal 
		    :show="mailStatus"
		    title="修改邮箱" 
		    @cancel="cancelMail" 
			@confirm="saveMail">
			<view style="min-height: 90upx;padding: 32upx 24upx;">
				<input type="text" v-model="uncertainMail" value="uncertainMail"/>
			</view>
		</neil-modal>
		
		<!-- 模态框 修改个性签名 -->
		<neil-modal 
		    :show="signatureStatus"
		    title="个性签名" 
		    @cancel="cancelSignature" 
			@confirm="saveSignature">
			<view style="min-height: 90upx;padding: 32upx 24upx;">
				<input type="text" v-model="uncertainSignature" value="uncertainSignature"/>
			</view>
		</neil-modal>
		
		<!-- 模态框 修改生日 -->
		<neil-modal 
		    :show="birthdayStatus"
		    title="修改生日" 
		    @cancel="cancelBirthday" 
			@confirm="saveBirthday">
			<view style="min-height: 90upx;padding: 32upx 24upx;">
				<!-- 时间选择器 -->
				<view class="date">
				  <picker mode="date" :end="endDate" @change="dateChange">{{uncertainBirthday}}</picker>
				</view>
			</view>
		</neil-modal>
		
	</view>
</template> 

<script>
	// 引入字体图标
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	// 引入模态框
	import minActionSheet from '@/components/min-action-sheet/min-action-sheet';
	import neilModal from '@/components/neil-modal/neil-modal';
	// 引入时间选择器
	import timeSelector from '@/components/wing-time-selector/wing-time-selector';
	export default {
		// 引入模态框
		components: {
			// 模态框
		    minActionSheet,
			// 字体图标
			uniIcons,
			// 模态框
			neilModal,
			// 时间选择器
			timeSelector
		},
		data() {
			return { 
				//头像图片路径
				photo:"../../static/neil-modal/logo.png",
				//用户昵称
				name:"温故知新",
				// 邮箱开关
				mailStatus:false,
				//用户邮箱
				mail:"未设置",
				//未点击保存的邮箱表单内容
				uncertainMail:"",
				// 个性签名开关
				signatureStatus:false,
				//用户个性签名
				signature:"未设置",
				//未点击保存的个性签名表单内容
				uncertainSignature:"",
				// 生日开关
				birthdayStatus:false,
				//用户生日
				birthday:"未设置",
				//未点击保存的生日签名表单内容
				uncertainBirthday:"",
				// 时间选择结束范围
				endDate:"2020-11-01",
				//token
				token:'',
				//用户id
				id:1
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
							  break;
							  // 相机
							case 0:
							  // this.onOffFn();
							  this.camera();
							  break;
							  // 相册
							case 1:
							  this.album();
							  break;
						}
					}
				})
			},
			// 相机
			camera(){
				uni.chooseImage({
				    count: 1, //默认9张
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera'], //从相机选择
				    success:(res) =>{
						// 上传头像
						uni.uploadFile({
						    url: 'http://8.135.26.228:9090/upload/cos', 
							method:'get', 
							filePath: res.tempFiles[0].path,
							name: 'file',
							header: {
							    'token': wx.getStorageSync('token')
							},
							formData: {
								'folder': 'photo'
							},
						    success: (res) => {
								this.photo=res.data; //更改头像地址
								this.setInformation(); //设置信息
								this.getInformation(); //更新界面用户信息
								this.feedback("修改成功"); //交互反馈
						    }
						});
				    }
				});
			},
			// 相册
			album(){
				uni.chooseImage({
				    count: 1, //默认9张
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:(res) =>{
						// 上传头像
						uni.uploadFile({
						    url: 'http://8.135.26.228:9090/upload/cos', 
							method:'get', 
							filePath: res.tempFiles[0].path,
							name: 'file',
							header: {
							    'token': wx.getStorageSync('token')
							},
							formData: {
								'folder': 'photo'
							},
						    success: (res) => {
								console.log(res)
								this.photo=res.data; //更改头像地址
								this.setInformation(); //设置信息
								this.getInformation(); //更新界面用户信息
								this.feedback("修改成功"); //交互反馈3
						    }
						});
				    }
				});
			},
			// 交互反馈
			feedback(v){
				uni.showToast({
					title:v,
					icon:"none"
				})
			},
			//打开修改邮箱
			openMail(){
				this.mailStatus=true;
			},
			// 取消邮箱修改
			cancelMail(){
				this.uncertainMail="";
				this.mailStatus=false;
			},
			// 保存邮箱修改
			saveMail(){
				this.mail=this.uncertainMail;
				this.uncertainMail="";
				this.mailStatus=false;
				this.setInformation();
			},
			//打开修改个性签名
			openSignature(){
				this.signatureStatus=true;
			},
			// 取消个性签名修改
			cancelSignature(){
				this.uncertainSignature="";
				this.signatureStatus=false;
			},
			// 保存个性签名修改
			saveSignature(){
				this.signature=this.uncertainSignature;
				this.uncertainSignature="";
				this.signatureStatus=false;
				this.setInformation();
			},
			//打开修改生日
			openBirthday(){
				this.uncertainBirthday=this.birthday;
				this.birthdayStatus=true;
			},
			// 取消生日修改
			cancelBirthday(){
				this.uncertainBirthday="";
				this.birthdayStatus=false;
			},
			// 保存生日修改
			saveBirthday(){
				this.birthday=this.uncertainBirthday;
				this.uncertainBirthday="";
				this.birthdayStatus=false;
				this.feedback("修改成功");
			},
			// 时间选择器改变事件，参数为ev
			dateChange(ev){
				this.uncertainBirthday=ev.detail.value.toString();
			},
			//初始化时间选择器最大值
			setEndDate(){
				let d=new Date();
				d=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
				this.endDate=d;
			},
			// 请求服务器获取用户信息
			getInformation(){
				uni.request({
				    url: this.pageUrl.pageUrl+'/userInfo/userInfo', 
					method:'get', 
					header: {
					    'token': wx.getStorageSync('token')
					},
				    success: (res) => {
						// console.log(res);
						this.birthday=res.data.data.birthday.substring(0,10);
						this.mail=res.data.data.email;
						if(res.data.data.image!=null){
							this.photo=res.data.data.image;
						}
						this.signature=res.data.data.signature;
				    }
				});
			},
			// 修改用户信息并上传
			setInformation(){
				uni.request({
				    url: this.pageUrl.pageUrl+'/userInfo/update', 
					method:'post', 
					header: {
					    'token': wx.getStorageSync('token')
					},
					data:{
						'id':wx.getStorage('id'),
						'birthday':this.birthday,
						'email':this.mail,
						'image':this.photo,
						'signature':this.signature
					},
				    success: (res) => {
						this.getInformation();
						this.feedback("修改成功");
				    }
				});
			}
		},
		onLoad(res) {
			this.id=wx.getStorageSync('id');
		},
		mounted(){
			// 页面加载获取时间
			this.setEndDate();
			// 页面加载请求服务器获取用户信息
			this.getInformation();
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/font/iconfont.css");
	page{
		height: 100%;
	}
	.body{
		height: 100%;
		background-color: #F4F4F3;
		view:first-child{
			height: 100rpx;
		}
	}
	.content{
		background-color: #fff;
		border-bottom: 2rpx solid #D7D7D7;
		border-top: 2rpx solid #D7D7D7;
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
					margin: 8rpx 10rpx 0 0;
				}
				text{
					color: #BBBECA;
				}
			}
		}
	}
	.date{
		text-align: center;
	}
</style>
