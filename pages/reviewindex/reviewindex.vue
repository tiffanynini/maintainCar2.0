<template>
	<view>
		<view class="middle_nav">
			<view class="middle_nav_content" :class="reviewStatus=='1'?'active':''" @click="changeStatus(1)">全部({{reviewListLength}})</view>
			<view class="middle_nav_content" :class="reviewStatus=='2'?'active':''" @click="changeStatus(2)">好评({{reviewListLength2}})</view>
			<view class="middle_nav_content" :class="reviewStatus=='3'?'active':''" @click="changeStatus(3)">中评({{reviewListLength3}})</view>
			<view class="middle_nav_content" :class="reviewStatus=='4'?'active':''" @click="changeStatus(4)">差评({{reviewListLength4}})</view>
			<!-- <view class="middle_nav_content" :class="reviewContentStatus=='5'?'active':''" @click="changeStatus(5)">有图({{reviewnumber5}})</view> -->
		</view>
		<view class="shopreview">
			<view class="" v-if="reviewlist.length!=0">
				<view v-for="(v,i) in reviewlist" :key="i">
					<view class="reviewbox">
						<view class="reviewheadbox">
							<view class="userheadimg">
								<image :src="v.image"></image>
							</view>
							<view class="reviewcontent">
								<view>{{v.username}}</view>
								<view>所购商品：{{v.name}}</view>
							</view>
						</view>
						<view class="reviewinform">
							<view>{{v.content}}</view>
							<!-- <view class="reviewimg">
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
							</view> -->
						</view>
					</view>
				</view>
			</view>
			<view v-if="reviewlist.length==0">
				<view class="noreview">暂无评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 端口号
				host: "http://172.16.14.29:6067",
				// 请求头
				token: "88318de7a5b44fc0aa43fadf22e1980a",
				// 导航栏状态（1为商品/默认，2为评价，3为商家）
				reviewStatus: '1',
				// 评论数据计数转接
				reviewListAll: [],
				reviewlist: [],
				reviewListLength: 0,
				reviewListLength2: 0,
				reviewListLength3: 0,
				reviewListLength4: 0,
			}
		},
		methods: {
			// 中部导航切换按钮
			changeStatus(val) {
				this.reviewlist = [];
				this.reviewStatus = val;
				if (this.reviewStatus != '1') {
					this.reviewCount();
				} else {
					this.reviewlist = this.reviewListAll;
				};
			},
			// 评论计数
			reviewCount() {
				this.reviewListLength = 0;
				this.reviewListLength2 = 0;
				this.reviewListLength3 = 0;
				this.reviewListLength4 = 0;
				this.reviewlist = [];
				this.reviewContentStatus = '';
			
				this.reviewListLength = this.reviewListAll.length;
			
				let review;
				// console.log(this.reviewListAll.length);
				// console.log(this.reviewStatus);
				for (let i = 0; i < this.reviewListAll.length; i++) {
					review = this.reviewListAll[i].status;
					username = this.reviewListAll[i].username;
					switch (review) {
						case "1":
							this.reviewListLength2 = this.reviewListLength2 + 1;
							break;
						case "2":
							this.reviewListLength3 = this.reviewListLength3 + 1;
							break;
						case "3":
							this.reviewListLength4 = this.reviewListLength4 + 1;
							break;
					}
					if (this.reviewStatus !== "1") {
						if (parseInt(review) + 1 === parseInt(this.reviewStatus)) {
							this.reviewlist.push(this.reviewListAll[i]);
						};
					} else {
						this.reviewlist = this.reviewListAll;
					}
				}
			
				// 判定用户名超出15个字符后面的都会变成省略号
				let username;
				for (let i = 0; i < this.reviewlist.length; i++) {
					username = this.reviewlist[i].username;
					if (username.length > 15) {
						username = username.substring(0, 15) + "...";
					}
					this.reviewlist[i].username = username;
				}
			},
		},
		onLoad(val) {
			console.log(val.id);
			let shopid = val.id;
			// 根据商品id查商品评价信息
			wx.request({
				url: this.pageUrl.pageUrl + "/sku/findEvaluateByBelong?belong=" + shopid,
				header: {
					'token': this.token //自定义请求头信息
				},
				method: "post",
				success: (res) => {
					this.reviewListAll = res.data;
					this.reviewCount();
				},
			})
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
	// 评论卡片
	// 评论卡片盒子
	.reviewbox {
		margin: 30rpx 30rpx;
		border-radius: 8rpx;
		box-shadow: 0 0 8rpx #dddddd;
	}
	
	// 评论卡片头部
	.reviewheadbox {
		display: flex;
	}
	
	// 用户头像
	.userheadimg image {
		margin: 20rpx 18rpx;
		width: 118rpx;
		height: 118rpx;
		border-radius: 15rpx;
	}
	
	// 用户名和购买物品
	.reviewcontent {
		padding-left: 20rpx;
		// font-size: 40rpx;
		letter-spacing: 3rpx;
		flex: 1;
		padding-top: 30rpx;
	
	}
	
	.reviewcontent>view:first-child {
		width: 500rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.reviewcontent>view:last-child {
		width: 500rpx;
		font-size: 28rpx;
		color: #AAAAAA;
	}
	
	// 评论内容和评论图片
	// 评论图片最外层框
	.reviewinform {
		padding-bottom: 10rpx;
	}
	
	// 评论文字内容
	.reviewinform>view:first-child {
		font-size: 30rpx;
		padding: 0 18rpx;
		margin-bottom: 20rpx;
	}
	
	// 评论图片内容
	.reviewimg {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
	}
	
	.reviewimg image {
		width: 206rpx;
		height: 200rpx;
		vertical-align: middle;
		margin-left: 18rpx;
		margin-bottom: 20rpx;
	}
	
	.noreview {
		text-align: center;
		margin-top: 350rpx;
		color: #333333;
		font-size: 38rpx;
	}
	
</style>
