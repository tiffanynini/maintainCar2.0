<template>
	<view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#04C4E0"></uni-segmented-control>
		<view class="content content1" v-if="dataEvaluate===true">
			<view v-if="current === 0" class="">
				<view class="total-evaluate" :key="index" v-for="(item,index) in itemCon">
					<!-- 头像 -->
					<view class="head-evaluate">
						<view class="head1"></view>
						<view class="">{{item.username}}</view>
					</view>
					<!-- 评价 -->
					<view class="text-evaluate">
						<view class="">
							{{item.content}}
						</view>
						<view class="">
						</view>

					</view>
				</view>

			</view>
			<view v-if="current === 1"  >
				<view class="total-evaluate"  :key="index" v-for="(item,index) in goodValue">
					<!-- 头像 -->
					<view class="head-evaluate">
						<view class="head1"></view>
						<view class="">{{item.username}}--{{item[index].status}}</view>
					</view>
					<!-- 评价 -->
					<view class="text-evaluate">
						<view class="">
							{{item.content}}
						</view>
						<view class="">
						</view>
				
					</view>
				</view>
				
			</view>
			<view v-if="current === 2">
				
			</view>
		</view>
		<!-- 暂无评价 -->
		<view class="" v-else-if="dataEvaluate===false">
			<view class="noWord1">
				<view class="iconfont icon-zanwushuju noWord"></view>
				评价内容空空如也！
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1、选项卡
				items: ['全部', '好评', '差评'],
				current: 0,
				// 选项卡对应的内容
				itemCon: [{
						name: '张先生',
						word: '这家店非常不错。洗车干净，老板服务好，下次还会再来！'
					},
					{
						name: '王女士',
						word: '已经是老顾客了，这家服务不错！'
					}
				],
				// 商品id
				sId: '',
				// 是否暂无数据
				dataEvaluate:true,
				// 好评
				goodValue:[],
				// ip
				ip:'http://172.16.14.29:6067',
				// token
				token:'88318de7a5b44fc0aa43fadf22e1980a'

			};
		},
		methods: {
			// 1、选项卡
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		},
		onLoad(options) {
			// console.log(options);
			this.sId = options.id;
			// console.log(this.sId);
			uni.request({
				url: this.ip+'/sku/findEvaluateById?goodsId=' + this.sId,
				method: 'post',
				header:{
					token:this.token
				},
				data: {
					goodsId: this.sId
				},
				success: (res) => {
					console.log(res)
					// this.comRes1 = res.data;
					// console.log(res.data);
					this.itemCon = res.data;
					console.log(this.itemCon)
					// 暂无数据
					if(this.itemCon.length==0){
						this.dataEvaluate=false
					}else{
						this.dataEvaluate=true
					}
					let arr1=[];
					for(var i=0;i<this.itemCon.length;i++){
						if(this.itemCon[i].status=='3'){
							arr1.push(this.itemCon[i]);
						}
					}
					this.goodValue=arr1;
					console.log(this.goodValue);
				}
			});

		}
	}
</script>

<style lang="less">
	@import url("../../static/font/iconfont.css");
	// 评价
	.content {
		padding: 10rpx;
	}
	// 暂无评价
	.noWord1{
		height: 800rpx;
		// background-color: pink;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.noWord{
		font-size: 200rpx;
		color: #C0C0C0;
	}
	// 全部
	.total-evaluate {
		// background-color: pink;
		border: 2rpx dashed #ccc;
		margin-bottom: 10rpx;

		// height: 1000rpx;
		// 头像
		.head-evaluate {
			height: 110rpx;
			display: flex;
			align-items: center;

			.head1 {
				width: 90rpx;
				height: 90rpx;
				// background-color: red;
				background: url(../../static/images-index/detai2.png) no-repeat center center;
				border-radius: 50%;
				border: 2rpx solid red;
				margin: 0 20rpx;
			}
		}

		// 文字
		.text-evaluate {
			padding: 16rpx 30rpx;
			// background-color: green;
		}
	}
</style>
