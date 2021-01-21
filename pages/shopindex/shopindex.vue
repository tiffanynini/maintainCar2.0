<template>
	<view>
		<!-- 头部店铺信息栏 -->
		<view class="shophead">
			<!-- 背景图片 -->
			<view class="shopimg">
				<image :src="shopinformation.shopbgimg"></image>
			</view>
			<!-- 内容部分（用的定位，黑色透明度背景） -->
			<view class="shopcontent">
				<!-- 套一层用flex -->
				<view>
					<!-- 店铺头像 -->
					<view class="shopheadimg">
						<image :src="shopinformation.shopimg"></image>
					</view>
					<!-- 店铺简介内容 -->
					<view class="shoptxt">
						<!-- 店铺名和收藏图标 -->
						<view>
							<!-- 店铺名 -->
							<view class="">{{shopinformation.shopname}}</view>
							<!-- 图标 -->
							<view class="collecticon" :class="shopinformation.shopcollect?'':'active'" @click="ifcollect">
								<text class="iconfont icon-xingxing"></text>
							</view>
						</view>
						<!-- 店铺公告 -->
						<view>公告：{{shopinformation.shopnotice}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 中部导航部分 -->
		<view class="middle_nav">
			<view class="middle_nav_content" :class="middleStatus=='1'?'active':''" @click="changeStatus(1)">商品</view>
			<view class="middle_nav_content" :class="middleStatus=='2'?'active':''" @click="changeStatus(2)">评价({{reviewListLength}})</view>
			<view class="middle_nav_content" :class="middleStatus=='3'?'active':''" @click="changeStatus(3)">商家</view>
		</view>
		<!-- 商品卡片部分 -->
		<view class="dhzdeshangpingleibiaokapianxianran" v-show="middleStatus=='1'">
			<view v-if="productlist.length!=0" class="productlist">
				<view v-for="(v,i) in productlist" :key="i">
					<view class="productcard">
						<uni-card :is-shadow="true" @click="skipproduct(i)">
							<view class="prductimg">
								<image :src="v.productimg" mode=""></image>
							</view>
							<view class="productname">{{v.productname}}</view>
							<view class="producttime">{{v.productstarttime}}到{{v.productendtime}}</view>
							<view class="productfooter">
								<view>￥ {{v.productprice}}</view>
								<view>售出: {{v.producednumber}}</view>
							</view>
						</uni-card>
					</view>
				</view>
			</view>
			<view v-if="productlist.length==0">
				<view class="noreview">暂无商品</view>
			</view>
		</view>
		<!-- 店铺评论部分 -->
		<view class="shopreview" v-show="middleStatus=='2'">
			<!-- 评论导航部分 -->
			<view class="review_nav">
				<view class="review_nav_content" :class="reviewStatus=='1'?'active':''" @click="changereview(1)">全部({{reviewListLength}})</view>
				<view class="review_nav_content" :class="reviewStatus=='2'?'active':''" @click="changereview(2)">好评({{reviewListLength2}})</view>
				<view class="review_nav_content" :class="reviewStatus=='3'?'active':''" @click="changereview(3)">中评({{reviewListLength3}})</view>
				<view class="review_nav_content" :class="reviewStatus=='4'?'active':''" @click="changereview(4)">差评({{reviewListLength4}})</view>
			</view>
			<!-- 评论列表渲染部分 -->
			<view class="" v-if="reviewlist.length!=0">
				<view v-for="(v,i) in reviewlist" :key="i">
					<view class="reviewbox">
						<view class="reviewheadbox">
							<view class="userheadimg">
								<image :src="v.userheadimg"></image>
							</view>
							<view class="reviewcontent">
								<view>{{v.username}}</view>
								<view>{{v.productname}}</view>
							</view>
						</view>
						<view class="reviewinform">
							<view>{{v.reviewcontent}}</view>
							<view class="reviewimg">
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
								<image :src="v.reviewimg1"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="reviewlist.length==0">
				<view class="noreview">暂无评价</view>
			</view>
		</view>
		<!-- 商家信息部分 -->
		<view class="shopinform" v-show="middleStatus=='3'">
			<view><text class="iconfont icon-dingwei"></text>{{shopinformation.shopaddress}}</view>
			<view><text class="iconfont icon-09"></text>{{shopinformation.shopphone}}</view>
			<view><text class="iconfont icon-gonggao"></text>{{shopinformation.shopnotice}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 导航栏状态（1为商品/默认，2为评价，3为商家）
				middleStatus: '1',
				// 评论导航状态（1为全部/默认，2为好评，3为中评，4为差评）
				reviewStatus: '1',
				// 店铺消息
				shopinformation: {
					shopid: "",
					shopname: '某某汽车美容店',
					shopimg: 'http://photocdn.sohu.com/20151225/mp50507226_1451010451322_1_th.jpeg',
					shopbgimg: 'http://image.bitauto.com/dealer/news/100037731/a381f373-752b-4984-ac3b-a271c4ed4ead.jpg',
					shopnotice: '暂无公告',
					shopcollect: true,
					shopaddress: '广东省佛山市乐从区某某街道15号',
					shopphone: '17600000000'
				},
				// 商品列表
				productlist: [{
					productid: 1,
					productname: '汽车保养',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productstarttime: '周一',
					productendtime: '周六',
					productprice: '888.00',
					producednumber: 231
				}, {
					productid: 2,
					productname: '汽车保养',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productstarttime: '周一',
					productendtime: '周六',
					productprice: '888.00',
					producednumber: 231
				}, {
					productid: 3,
					productname: '汽车保养',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productstarttime: '周一',
					productendtime: '周六',
					productprice: '888.00',
					producednumber: 231
				}, {
					productid: 4,
					productname: '汽车保养',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productstarttime: '周一',
					productendtime: '周六',
					productprice: '888.00',
					producednumber: 231
				}, {
					productid: 5,
					productname: '汽车保养',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productstarttime: '周一',
					productendtime: '周六',
					productprice: '888.00',
					producednumber: 231
				}, {
					productid: 6,
					productname: '汽车保养',
					productimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					productstarttime: '周一',
					productendtime: '周六',
					productprice: '888.00',
					producednumber: 231
				}],
				// 评论列表渲染数据
				reviewListAll: [{
					reviewid: 1,
					username: 'hahaha',
					productname: '汽车保养',
					userheadimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewcontent: '还不错',
					reviewimg1: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewlevel: '1',
				}, {
					reviewid: 2,
					username: 'hahaha',
					productname: '汽车保养',
					userheadimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewcontent: '还不错',
					reviewimg1: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewlevel: '2',
				}, {
					reviewid: 3,
					username: 'hahaha',
					productname: '汽车保养',
					userheadimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewcontent: '还不错',
					reviewimg1: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewlevel: '3',
				}, {
					reviewid: 4,
					username: 'hahaha',
					productname: '汽车保养',
					userheadimg: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewcontent: '还不错',
					reviewimg1: 'http://p9.itc.cn/images01/20200818/3a5ce8f3069c440f856f74767a76d7ec.jpeg',
					reviewlevel: '4',
				}],
				reviewlist: [],
				reviewContentStatus: '',
				reviewListLength: 0,
				reviewListLength2: 0,
				reviewListLength3: 0,
				reviewListLength4: 0,
			}
		},
		methods: {
			// 点击收藏按钮
			ifcollect() {
				this.shopinformation.shopcollect = !this.shopinformation.shopcollect;
			},
			// 中部导航切换按钮
			changeStatus(val) {
				this.middleStatus = val;
				if (val == '2') {
					this.changereview(1);
				}
			},
			// 评论计数
			reviewCount(){
				this.reviewListLength = 0;
				this.reviewListLength2 = 0;
				this.reviewListLength3 = 0;
				this.reviewListLength4 = 0;
				this.reviewlist = [];
				this.reviewContentStatus = '';
				
				this.reviewListLength = this.reviewListAll.length;
				
				for (let i = 0; i < this.reviewListAll.length; i++) {
					if (this.reviewListAll[i].reviewlevel == '1' || this.reviewListAll[i].reviewlevel == '2') {
						this.reviewContentStatus = '4';
						this.reviewListLength4++;
					} else if (this.reviewListAll[i].reviewlevel == '3' || this.reviewListAll[i].reviewlevel == '4') {
						this.reviewContentStatus = '3';
						this.reviewListLength3++;
					} else if (this.reviewListAll[i].reviewlevel == '5') {
						this.reviewContentStatus = '2';
						this.reviewListLength2++;
					};
					if (this.reviewContentStatus == this.reviewStatus) {
						this.reviewlist.push(this.reviewListAll[i]);
					};
				};
			},
			// 评论导航切换
			changereview(val) {
				this.reviewlist = [];
				this.reviewStatus = val;
				if (this.reviewStatus != '1') {
					this.reviewCount();
				} else {
					this.reviewlist = this.reviewListAll;
				};
			},
			// 跳转商品页
			skipproduct(val){
				wx.navigateTo({
					url: "../productindex/productindex?id='"+val+"'"
				})
			},
		},
		onLoad(option) {
			this.shopinformation.shopid = option;
			this.reviewCount();
		}
	}
</script>

<style lang="less">
	// 字体图标引入
	@import url("../../static/font/iconfont.css");

	// 头部信息栏
	.shophead {
		height: 318rpx;
		position: relative;
	}

	// 背景图片
	.shopimg image {
		width: 100%;
		height: 318rpx;
		vertical-align: middle;
	}

	// 内容定位框(黑色透明层)
	.shopcontent {
		width: 100%;
		height: 158rpx;
		padding-top: 160rpx;
		background-color: rgba(0, 0, 0, 0.35);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	// 内容flex框
	.shopcontent>view {
		display: flex;
	}

	// 店铺头像
	.shopheadimg image {
		margin: 20rpx;
		width: 118rpx;
		height: 118rpx;
		border-radius: 15rpx;
	}

	// 店铺内容
	.shoptxt {
		flex: 1;
		padding-top: 30rpx;
		color: #fff;
	}

	// 店铺名称和icon框
	.shoptxt>view:first-child {
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	// 店铺公告
	.shoptxt>view:last-child {
		font-size: 27rpx;
		line-height: 35rpx;
		height: 35rpx;
	}

	// 收藏按钮
	.collecticon {
		color: #ffffff;
	}

	.collecticon>text {
		font-size: 45rpx;
	}

	.collecticon.active {
		color: #FCE709;
	}

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
		line-height: 88rpx;
		text-align: center;
		border: none;
		color: #B0B0B0;
		box-sizing: border-box;
	}

	.middle_nav_content.active {
		color: #FD8F33;
		transition: all 0.5s;
		border-bottom: 3rpx solid #FD8F33;
	}

	// 商品列表
	.productlist {
		display: flex;
		flex-wrap: wrap;
	}

	// 
	.productcard {
		margin-left: 20rpx;
		width: 345rpx;
	}

	// 商品卡片修改
	.uni-card[data-v-3afcb0a4] {
		margin: 0;
		margin-top: 20rpx;
	}

	// 商品图片框
	.prductimg {
		text-align: center;
		vertical-align: middle;
	}

	// 商品图片
	.prductimg image {
		width: 100%;
		height: 200rpx;
	}

	.productname {
		margin-top: 10rpx;
		font-weight: 600;
	}

	.producttime {
		font-size: 27rpx;
	}

	.productfooter {
		font-size: 27rpx;
		display: flex;
		justify-content: space-between;
		height: 50rpx;
		line-height: 50rpx;
	}

	.productfooter>view:first-child {
		color: #D9001B;
	}

	// 店铺评论页
	.review_nav {
		height: 88rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #B0B0B0;
		border-bottom: 2rpx solid #EEEEEE;
		box-shadow: 1rpx 6rpx 6rpx #dddddd;
	}

	.review_nav_content {
		width: 166rpx;
		height: 44rpx;
		font-size: 27rpx;
		vertical-align: middle;
		line-height: 44rpx;
		text-align: center;
		border-radius: 22rpx;
		background-color: #D9D9D9;
		border: none;
		color: #FFFFFF;
	}

	.review_nav_content.active {
		background-color: #FF5A49;
	}

	// 评论卡片盒子
	// 评论卡片头部
	.reviewheadbox {
		display: flex;
	}

	// 用户头像
	.userheadimg image {
		margin: 20rpx;
		width: 118rpx;
		height: 118rpx;
		border-radius: 15rpx;
	}

	// 用户名和购买物品
	.reviewcontent {
		padding-left: 20rpx;
		letter-spacing: 3rpx;
		flex: 1;
		padding-top: 30rpx;
	}

	.reviewcontent>view:last-child {
		font-size: 24rpx;
	}

	// 评论内容和评论图片
	.reviewinform {
		padding-bottom: 40rpx;
	}

	.reviewinform>view:first-child {
		font-size: 30rpx;
		padding-left: 20rpx;
		margin-bottom: 20rpx;
	}

	.reviewimg {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
	}

	.reviewimg image {
		width: 230rpx;
		height: 200rpx;
		vertical-align: middle;
		margin-left: 15rpx;
		margin-bottom: 20rpx;
	}
	.noreview{
		text-align: center;
		margin-top: 350rpx;
		color: #333333;
		font-size: 38rpx;
	}
	// 商家信息页
	.shopinform {
		padding-left: 20rpx;
		line-height: 100rpx;

	}

	.shopinform>view {
		line-height: 100rpx;
		height: 100rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.shopinform text {
		color: #F98D32;
		font-size: 40rpx;
		padding: 0 20rpx;
	}
</style>
