<template>
	<view>
		<view class="container">
			<view class="context">
				<view class="header">
					<label class="checkbox">
						<checkbox value="cb" @click="checkChange" :checked="pCheckStatus"/>
						<text>自营店</text>
					</label>
				</view>
				<view class="section">
					<view class="set1-top">
						<label class="checkbox">
							<checkbox value="cb" :checked="cCheckStatus" @click="cCheckChange"/>
						</label>
					</view>
					<view class="set1-middle">
						<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>汽车贴膜（每10CM）</text>
							<image src="../../static/images/del.png"></image>
						</view>
						<text class="set1-p2">汽车类型：轿车  位置：全车</text>
						<view>
							<text>单价：29.9</text>
							<view class="counter">
								<text class="reduce-add" :disabled="true" @click="minusReduce" :data-id="id" :style="{'pointer-events': isPointer}">-</text>
								<text class="amount" v-text="count"></text>
								<text class="reduce-add1" :disabled="true" @click="addReduce" :data-id="id">+</text>
							</view>
						</view>
					</view>
				</view>
				<view class="section">
					<view class="set1-top">
						<label class="checkbox">
							<checkbox value="cb" :checked="cCheckStatus" @click="cCheckChange"/>
						</label>
					</view>
					<view class="set1-middle">
						<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>汽车贴膜（每10CM）</text>
							<image src="../../static/images/del.png"></image>
						</view>
						<text class="set1-p2">汽车类型：轿车  位置：全车</text>
						<view>
							<text>单价：29.9</text>
							<view class="counter">
								<text class="reduce-add" :disabled="true" @click="minusReduce" :data-id="id" :style="{'pointer-events': isPointer}">-</text>
								<text class="amount" v-text="count"></text>
								<text class="reduce-add1" :disabled="true" @click="addReduce" :data-id="id">+</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="context">
				<view class="header">
					<label class="checkbox">
						<checkbox value="cb"/>
						<text>自营店</text>
					</label>
				</view>
				<view class="section">
					<view class="set1-top">
						<label class="checkbox">
							<checkbox value="cb"/>
						</label>
					</view>
					<view class="set1-middle">
						<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=c3b4ff848a61a132357823e9cdfb1a74d38de325077b43e61feb69e9d413f2a9"></image>
					</view>
					<view class="set1-bottom">
						<view>
							<text>汽车贴膜（每10CM）</text>
							<image src="../../static/images/del.png"></image>
						</view>
						<text class="set1-p2">汽车类型：轿车  位置：全车</text>
						<view>
							<text>单价：29.9</text>
							<view class="counter">
								<text class="reduce-add" :disabled="true" @click="minusReduce" :data-id="id" :style="{'pointer-events': isPointer}">-</text>
								<text class="amount" v-text="count"></text>
								<text class="reduce-add1" :disabled="true" @click="addReduce" :data-id="id">+</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bu"></view>
			<view class="footer">
				<text class="footer-font">总额：<text class="money" space="emsp"> xx </text> 元(不含运费)</text>
				<navigator url="../confirmOrder/confirmOrder" open-type="navigate">
				    <view class="footer-btn">去结算</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				count:1,
				pCheckStatus:false,//父级的checkbox
				cCheckStatus:false,//子级的checkbox
				id:1,
				isPointer:"auto"
			}
		},
		methods:{
			//增加
			addReduce() {
				//传递index过来判断对应的数组里面的数量进行修改
				this.isPointer = "auto";
				this.count++;
			},
			//减少
			minusReduce(){
				if(this.count > 1){
					this.count--;
				}else{
					this.isPointer = "none";
				}
			},
			totalMoney(){
				
			},
			//父级的checkbox选中的时候
			checkChange(){
				this.pCheckStatus = !this.pCheckStatus;
				this.cCheckStatus = !this.cCheckStatus;
			},
			//子级的checkbox选中的时候
			cCheckChange(){
				// let count = 0;
				// this.cCheckStatus = !this.cCheckStatus;
				// if(count === 3){
				// 	this.pCheckStatus = !this.pCheckStatus;
				// }
			}
		}
	}
</script>

<style lang="less">
	body,html{
		height: 100%;
	}
	.container{
		background-color: #F4F4F3;
		height: 100%;
		overflow: hidden;
	}
	.context{
		background-color: #fff;
		padding-left: 10rpx;
	}
	checkbox .wx-checkbox-input{
	  border-radius: 50%;/* 圆角 */
	  width: 26rpx; /* 背景的宽 */
	  height: 26rpx; /* 背景的高 */
	}
	/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked{
	  border: 1rpx solid #FF783B;
	  background: #FD8F33;
	}
	/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
	  border-radius: 50%;/* 圆角 */
	  width: 40rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
	  height: 40rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
	  line-height: 40rpx;
	  text-align: center;
	  font-size:30rpx; /* 对勾大小 30rpx */
	  color:#fff; /* 对勾颜色 白色 */
	  background: transparent;
	  transform:translate(-50%, -50%) scale(1);
	  -webkit-transform:translate(-50%, -50%) scale(1);
	}
	
	.header{
		border-bottom: 2px solid #F2F2F2;
		height: 68rpx;
		line-height: 68rpx;
		margin-top: 20rpx;
		text{
			font-size: 32rpx;
		}
	}
	.section{
		display: flex;
		margin-top: 20rpx;
		.set1-top{
			height: 160rpx;
			line-height: 140rpx;
		}
		.set1-middle{
			margin-right: 30rpx;
			image{
				width: 200rpx;
				height: 160rpx;
			}
		}
		.set1-bottom{
			display: flex;
			flex-direction: column;
			font-size: 32rpx;
			width: 100%;
			>view:first-child{
				display: flex;
				justify-content: space-between;
				>text{
					font-size: 30rpx;
				}
				image{
					width: 38rpx;
					height: 40rpx;
					padding-right: 20rpx;
				}
			}
			.set1-p2{
				margin-top: 50rpx;
				color: #AAAAAA;
				font-size: 30rpx;
				line-height: 40rpx;
			}
			>view:last-child{
				display: flex;
				justify-content: space-between;
				>text{
					font-size: 30rpx;
				}
				.counter {
					font-size: 26upx;
					vertical-align: bottom;
					display: inline-block;
					height: 34rpx;
					padding-right: 22rpx;
					display: flex;
					margin-top: 4rpx;
					.reduce-add {
						display: inline-block;
						border: 1px solid #707070;
						width: 40rpx;
						height: 30rpx;
						line-height: 28rpx;
						text-align: center;
						font-size: 30rpx;
						vertical-align: middle;
						border-top-left-radius: 14rpx;
						border-bottom-left-radius: 14rpx;
					}
					.reduce-add1 {
						display: inline-block;
						border: 1px solid #707070;
						width: 40rpx;
						height: 30rpx;
						line-height: 28rpx;
						text-align: center;
						font-size: 30rpx;
						vertical-align: middle;
						border-top-right-radius: 14rpx;
						border-bottom-right-radius: 14rpx;
					}
					.amount {
						display: inline-block;
						width: 60rpx;
						height: 30rpx;
						line-height: 30rpx;
						text-align: center;
						border-top: 1px solid #AAAAAA;
						border-bottom: 1px solid #AAAAAA;
						vertical-align: middle;
						color: #000;
					}
				}
			}
			
		}
	}
	.bu{
		height: 100rpx;
	}
	.footer{
		background-color: #fff;
		font-size: 32rpx;
		position: fixed;
		bottom: 0;
		left: 0rpx;
		padding-left: 20rpx;
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		.footer-font{
			.money{
				color: #F53218;
			}
		}
		navigator{
			.footer-btn{
				width: 140rpx;
				height: 50rpx;
				background-color: #F53218;
				border-radius: 12rpx;
				color: #fff;
				text-align: center;
				line-height: 50rpx;
				margin-right: 40rpx;
				font-size: 30rpx;
			}
		}
	}
	
</style>
