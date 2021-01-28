<template>
	<view>
		<!-- 活动图 -->
		<view class="page">
			<view class="image-list" @click="shopindex(0)">
				<view class="image-content activity_img">
					<image :src="activityimg"></image>
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
				<view class="arrows" :class="arrow1%2==0&&arrow1>0?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1"></text>
				</view>
			</view>
			<view @click="arrowRotate2">
				<text class="middle_nav_child" :class="text3?'active':''">距离</text>
				<view class="arrows" :class="arrow2%2==0&&arrow2>0?'active':''">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1 "></text>
				</view>
			</view>
		</view>
		<!-- 店铺列表 -->
		<view class="shoplist" v-for="(v,i) in shoplist" :key="i">
			<view class="shop" @click="shopindex(i)">
				<view class="shopimg">
					<image :src="v.logo"></image>
				</view>
				<view class="shopcontent">
					<view class="shoptit">
						<view>{{v.name}}</view>
						<view>{{v.distance}} km</view>
					</view>
					<view class="shopaddress">地址：{{v.address}}</view>
				</view>
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
				text1: true,
				text2: false,
				text3: false,
				// 人气箭头图标绑定值
				arrow1: 0, //true为原始（从大到小），false为翻转
				// 距离箭头图标绑定值
				arrow2: 0,
				// 活动图片处绑定值
				activityimg: '',
				// http://image.bitauto.com/dealer/news/100037731/a381f373-752b-4984-ac3b-a271c4ed4ead.jpg
				// 商家列表渲染数据
				shoplist: [],
				/* [{
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
				}] */
				// 试验
				trylist: [],
				// 当前位置的经度
				lon1: 0,
				// 当前位置的纬度
				lat1: 0,
			};
		},
		methods: {
			// 点击综合按id排序
			arrowRotate() {
				let arr = this.shoplist;
				this.text1 = true;
				this.text2 = false;
				this.text3 = false;
				this.arrow1 = 0;
				this.arrow2 = 0;
				arr.sort(function(a, b) {
					return a.id - b.id
				})
			},
			// 人气排序
			arrowRotate1() {
				let arr1 = this.shoplist;
				this.text1 = false;
				this.text2 = true;
				this.text3 = false;
				this.arrow1 = this.arrow1 + 1;
				this.arrow2 = 0;
				if (this.arrow1 % 2 != 0) {
					arr1.sort(function(a, b) {
						return a.popularity - b.popularity
					})
				} else {
					arr1.sort(function(a, b) {
						return b.popularity - a.popularity
					})
				}
			},
			// 距离排序
			arrowRotate2() {
				let arr2 = this.shoplist;
				this.text1 = false;
				this.text2 = false;
				this.text3 = true;
				this.arrow2 = this.arrow2 + 1;
				this.arrow1 = 0;
				if (this.arrow2 % 2 != 0) {
					arr2.sort(function(a, b) {
						return a.distance - b.distance
					})
				} else {
					arr2.sort(function(a, b) {
						return b.distance - a.distance
					})
				};
			},
			// 点击跳转店铺详情页
			shopindex(val) {
				let shopid = this.shoplist[val].id;
				wx.navigateTo({
					url: "../shopindex/shopindex?id=" + shopid
				})
			},
			// 获取当前位置的经纬度
			getlaandlo() {
				uni.getLocation({
					type: 'wgs84',
					success: (res) => {
						this.lon1 = res.longitude;
						this.lat1 = res.latitude;
						// 这个调用不能再生命周期函数内调用，会调不到for内的内容，也不能在getLocation外面调用，会因为异步问题跳过getLocation。
						this.getspace();
					}
				});
			},
			// 循环获取距离
			getspace() {
				for (let i = 0; i < this.shoplist.length; i++) {
					let lon1 = this.lon1; // 经度1
					let lat1 = this.lat1; // 纬度1
					let lon2 = 0; // 经度2
					let lat2 = 0; // 纬度2
					let dist = 0;
					// console.log(bbbbb);
					lon2 = this.shoplist[i].shoplongitude;
					lat2 = this.shoplist[i].shoplatitude;
					// console.log(lat1, lon1);
					// console.log(lat2, lon2);
					dist = this.getDistance(lat1, lon1, lat2, lon2);
					// console.log(dist.toFixed(2));
					this.shoplist[i].distance = dist.toFixed(2);
					// console.log(this.shoplist[i].distance);
				}
			},
			// 经纬度转换成三角函数中度分表形式。
			rad(d) {
				return d * Math.PI / 180.0;
			},
			// 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
			getDistance(lat1, lng1, lat2, lng2) {
				let radLat1 = this.rad(lat1);
				let radLat2 = this.rad(lat2);
				let a = radLat1 - radLat2;
				// console.log(a,1);
				let b = this.rad(lng1) - this.rad(lng2);
				// console.log(b,2);
				let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
					Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
				s = s * 6378.137; // EARTH_RADIUS;
				s = Math.round(s * 10000) / 10000; //输出为公里

				let distance = s;
				let distance_str = "";

				if (parseInt(distance) >= 1) {
					distance_str = distance.toFixed(1) + "km";
				} else {
					distance_str = distance * 1000 + "m";
				}

				//s=s.toFixed(4);

				// console.info('lyj 距离是', s);
				// console.info('lyj 距离是', distance_str);
				return s;
			},
		},
		onLoad() {
			// 数据清空
			this.shoplist = [];

			// 店铺全信息接口调用
			wx.request({
				url: this.pageUrl.pageUrl + "/sku/findAll",
				header: {
					'token': this.token //自定义请求头信息
				},
				method: "get",
				success: (res) => {
					this.shoplist = res.data;
					// console.log(this.shoplist);

					// 头部活动图设置为id为1的店铺背景图
					this.activityimg = this.shoplist[0].backgroundImage;
					// 距离
					this.getlaandlo();
				}
			})
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
		padding: 0 20rpx 0 10rpx;
		border-bottom: 2rpx solid #ececec;
		display: flex;
		justify-content: space-between;
	}

	.shopimg {
		padding-left: 10rpx;
	}

	.shopcontent {
		padding-top: 30rpx;
		padding-left: 20rpx;
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
