<template>
	<view>
		<!-- 活动图 -->
		<view class="page">
			<view class="image-list">
				<view class="image-content activity_img">
					<image :mode="activityimg.mode" :src="activityimg.src"></image>
				</view>
			</view>
		</view>
		<!-- 中间导航栏 -->
		<view class="middle_nav">
			<view>综合</view>
			<view>
				人气
				<view class="arrows" :class="arrow1?'active':''" @click="arrowRotate1">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1 "></text>
				</view>
			</view>
			<view>
				距离
				<view class="arrows" :class="arrow2?'active':''" @click="arrowRotate2">
					<!-- 字体图标旋转必须套一层容器，让容器旋转，字体图标本身不能旋转 -->
					<text class="iconfont icon-paixu1 "></text>
				</view>
			</view>
		</view>
		<!-- 店铺列表 -->
		<view class="shoplist">
			<view class="shop">
				<view>
					<image src="shopicon" mode=""></image>
				</view>
				<view>
					<view>
						<view>某某 汽车美容店</view>
						<view>1345.5km</view>
					</view>
					<view>地址：广东省某某市某某区150号</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 人气箭头图标绑定值
				arrow1: true, //true为原始（原型图上的），false为翻转
				// 距离箭头图标绑定值
				arrow2: true,
				// 活动图片处绑定值
				activityimg: {
					src: 'http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E5%95%86%E5%AE%B6/u1646.jpg?token=98b796f1d34e66e630e7febd19d5c522b619545128a6a8ad66489b4551986f17',
				},
				shopicon: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E6%B1%BD%E8%BD%A6%E5%BA%97%E5%9B%BE&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1003150980,2169898863&os=1051421730,2290698046&simid=3563433758,412843510&pn=1&rn=1&di=89430&ln=1574&fr=&fmq=1610951967884_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Ffangzhi.csc86.com%252Fuploadfile%252F2015%252F0305%252F20150305020323727.jpg%26refer%3Dhttp%253A%252F%252Ffangzhi.csc86.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1613543967%26t%3D836d3d4f18328433bf6c1edc6a3cb3ba&rpstart=0&rpnum=0&adpicid=0&force=undefined',

			};
		},
		methods: {
			// 人气箭头图标换向
			arrowRotate1() {
				this.arrow1 = !this.arrow1;
			},
			// 距离箭头图标换向
			arrowRotate2() {
				this.arrow2 = !this.arrow2;
			},
		}
	}
</script>

<style>
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
		border-bottom: 1rpx solid #ccc;
		height: 64rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.middle_nav view {
		font-size: 27rpx;
	}

	.arrows {
		background-color: pink;
		display: inline-block;
		transform: rotate(180deg);
	}

	.arrows.active {
		transform: rotate(0deg);
	}

	/* 店铺列表 */
	.shop {
		height: 150rpx;
		background-color: pink;
		display: flex;
		justify-content: space-between;
	}
	.shop view image {
		height: 150rpx;
		width: 150rpx;
	}
	.shop view view:first-child {
		display: flex;
		justify-content: space-between;
	}
</style>
