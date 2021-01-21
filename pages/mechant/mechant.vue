<template>
	<view>
		<!-- 活动图 -->
		<view class="page">
			<view class="image-list" @click="shopindex(2)">
				<view class="image-content activity_img">
					<image :mode="activityimg.mode" :src="activityimg.src"></image>
				</view>
			</view>
		</view>
		<!-- 中间导航栏 -->
		<view class="middle_nav">
			<view @click="arrowRotate">
				<text class="middle_nav_child" :class="text1?'active':''">综合</text>
			</view>
			<view @click="arrowRotate1">
				<text class="middle_nav_child" :class="text2?'active':''">人气</text>
				<view class="arrows" :class="arrow1?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1"></text>
				</view>
			</view>
			<view @click="arrowRotate2">
				<text class="middle_nav_child" :class="text3?'active':''">距离</text>
				<view class="arrows" :class="arrow2?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1 "></text>
				</view>
			</view>
		</view>
		<!-- 店铺列表 -->
		<view class="shoplist" v-for="(v,i) in shoplist" :key="i">
			<view class="shop" @click="shopindex(i)">
				<view class="shopimg">
					<image :src="v.shopheadimg"></image>
				</view>
				<view class="shopcontent">
					<view class="shoptit">
						<view>{{v.shoptitle}}</view>
						<view>{{v.shopdistance}}</view>
					</view>
					<view class="shopaddress">地址：{{v.shopaddress}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text1: true,
				text2: false,
				text3: false,
				// 人气箭头图标绑定值
				arrow1: true, //true为原始（从大到小），false为翻转
				// 距离箭头图标绑定值
				arrow2: true,
				// 活动图片处绑定值
				activityimg: {
					src: 'http://image.bitauto.com/dealer/news/100037731/a381f373-752b-4984-ac3b-a271c4ed4ead.jpg',
				},
				// 商家列表渲染数据
				shoplist: [{
					shopid: 1,
					shoptitle: '某某汽车美容店',
					shopaddress: '广东省某某市某某区150号',
					shopdistance: '134.5km',
					popular: 11,
					shopheadimg: 'http://photocdn.sohu.com/20151225/mp50507226_1451010451322_1_th.jpeg',
				}, {
					shopid: 2,
					shoptitle: '某某汽车美容店',
					shopaddress: '广东省某某市某某区150号',
					shopdistance: '1345.5km',
					popular: 44,
					shopheadimg: 'http://photocdn.sohu.com/20151225/mp50507226_1451010451322_1_th.jpeg',
				}, {
					shopid: 3,
					shoptitle: '某某汽车美容店',
					shopaddress: '广东省某某市某某区150号',
					shopdistance: '13.5km',
					popular: 22,
					shopheadimg: 'http://photocdn.sohu.com/20151225/mp50507226_1451010451322_1_th.jpeg',
				}, {
					shopid: 4,
					shoptitle: '某某汽车美容店',
					shopaddress: '广东省某某市某某区150号',
					shopdistance: '1.5km',
					popular: 33,
					shopheadimg: 'http://photocdn.sohu.com/20151225/mp50507226_1451010451322_1_th.jpeg',
				}, {
					shopid: 5,
					shoptitle: '某某汽车美容店',
					shopaddress: '广东省某某市某某区150号',
					shopdistance: '1345km',
					popular: 55,
					shopheadimg: 'http://photocdn.sohu.com/20151225/mp50507226_1451010451322_1_th.jpeg',
				}],
			};
		},
		methods: {
			// 点击综合按id排序
			arrowRotate(){
				let arr = this.shoplist;
				this.text1=true;
				this.text2=false;
				this.text3=false;
				arr.sort(function(a,b){
					return a.shopid-b.shopid
				})
			},
			// 人气排序
			arrowRotate1() {
				let arr1 = this.shoplist;
				this.text1=false;
				this.text2=true;
				this.text3=false;
				this.arrow1 = !this.arrow1;
				if(this.arrow1){
					arr1.sort(function(a,b){
						return a.popular-b.popular
					})
				}else{
					arr1.sort(function(a,b){
						return b.popular-a.popular
					})
				}
			},
			// 距离排序
			arrowRotate2() {
				let arr2 = this.shoplist;
				this.text1=false;
				this.text2=false;
				this.text3=true;
				this.arrow2 = !this.arrow2;
				
				arr2.map(function(v){
					v.shopdistance = parseFloat(v.shopdistance)
					return v.shopdistance;
				});
				if(this.arrow2){
					arr2.sort(function(a,b){
						return a.shopdistance-b.shopdistance
					})
				}else{
					arr2.sort(function(a,b){
						return b.shopdistance-a.shopdistance
					})
				};
				arr2.map(function(v){
					v.shopdistance = v.shopdistance+"km"
					return v.shopdistance;
				});
			},
			// 点击跳转店铺详情页
			shopindex(val) {
				wx.navigateTo({
					url: "../shopindex/shopindex?id='" + val + "'"
				})
			},
		},
		onLoad() {
			
		},
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");

	/* 活动图 */
	.activity_img image {
		margin: 0;
		width: 100%;
		height: 240rpx;
		/* 图片是行内元素，会有上偏移，需要让它居中 */
		vertical-align: middle;
	}

	/* 中部导航栏 */
	.middle_nav {
		padding: 0 80rpx;
		border-bottom: 2rpx solid #ececec;
		height: 64rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.middle_nav view {
		font-size: 27rpx;
	}

	.middle_nav_child {
		color: #000000;
	}

	.middle_nav_child.active {
		color: #04C4E0;
	}

	.arrows {
		display: inline-block;
		transform: rotate(180deg);
	}

	.arrows.active {
		transform: rotate(0deg);
	}

	/* 店铺列表 */
	.shop {
		height: 150rpx;
		border-bottom: 2rpx solid #ececec;
		display: flex;
		justify-content: space-between;
	}

	.shopimg {
		padding-left: 10rpx;
	}

	.shopcontent {
		padding-top: 30rpx;
		padding-left: 10rpx;
		flex: 1;
	}

	.shopimg>image {
		padding: 20rpx 0;
		height: 110rpx;
		width: 150rpx;
	}

	.shoptit {
		font-size: 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.shoptit>view:last-child {
		font-size: 26rpx;
		color: #aaa;
	}

	.shopaddress {
		font-size: 26rpx;
		line-height: 50rpx;
		height: 50rpx;
		color: #aaa;
	}
</style>
