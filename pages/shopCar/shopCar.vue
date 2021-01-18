<template>
	<view class="container">
		<view class="context">
			<view class="header">
				<label class="checkbox">
					<checkbox value="cb" checked="true" />
					<text>自营店</text>
				</label>
			</view>
			<view class="section">
				<view class="set1-top">
					<label class="checkbox">
						<checkbox value="cb" checked="true" />
					</label>
				</view>
				<view class="set1-middle">
					<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=ed2c33fc3f37644f09247f0de49812ec563ceab3e7d8ec4c251f4a1ca413d8a1"></image>
				</view>
				<view class="set1-bottom">
					<text>汽车贴膜（每10CM）</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<view>
						<text>单价：29.9</text>
						<view class="counter">
							<text class="reduce-add" @click="addReduce(0)">-</text>
							<text class="amount" v-text="count"></text>
							<text class="reduce-add" @click="addReduce(1)">+</text>	
						</view>
					</view>
				</view>
			</view>
			<view class="section">
				<view class="set1-top">
					<label class="checkbox">
						<checkbox value="cb" checked="true" />
					</label>
				</view>
				<view class="set1-middle">
					<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=ed2c33fc3f37644f09247f0de49812ec563ceab3e7d8ec4c251f4a1ca413d8a1"></image>
				</view>
				<view class="set1-bottom">
					<text>汽车贴膜（每10CM）</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<view>
						<text>单价：29.9</text>
						<view class="counter">
							<text class="reduce-add" @click="addReduce(0)">-</text>
							<text class="amount" v-text="count"></text>
							<text class="reduce-add" @click="addReduce(1)">+</text>	
						</view>
					</view>
				</view>
			</view>
			<view class="section">
				<view class="set1-top">
					<label class="checkbox">
						<checkbox value="cb" checked="true" />
					</label>
				</view>
				<view class="set1-middle">
					<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=ed2c33fc3f37644f09247f0de49812ec563ceab3e7d8ec4c251f4a1ca413d8a1"></image>
				</view>
				<view class="set1-bottom">
					<text>汽车贴膜（每10CM）</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<view>
						<text>单价：29.9</text>
						<view class="counter">
							<text class="reduce-add" @click="addReduce(0)">-</text>
							<text class="amount" v-text="count"></text>
							<text class="reduce-add" @click="addReduce(1)">+</text>	
						</view>
					</view>
				</view>
			</view>
			<view class="section">
				<view class="set1-top">
					<label class="checkbox">
						<checkbox value="cb" checked="true" />
					</label>
				</view>
				<view class="set1-middle">
					<image src="http://cloud.axureshop.com/gsc/9VEHLV/09/35/c2/0935c276df9445ff87848efc94e49e75/images/%E6%B1%BD%E8%BD%A6%E8%B4%B4%E8%86%9C/u1041.jpg?token=ed2c33fc3f37644f09247f0de49812ec563ceab3e7d8ec4c251f4a1ca413d8a1"></image>
				</view>
				<view class="set1-bottom">
					<text>汽车贴膜（每10CM）</text>
					<text class="set1-p2">汽车类型：轿车  位置：全车</text>
					<view>
						<text>单价：29.9</text>
						<view class="counter">
							<text class="reduce-add" @click="addReduce(0)">-</text>
							<text class="amount" v-text="count"></text>
							<text class="reduce-add" @click="addReduce(1)">+</text>	
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
</template>

<script>
	
	export default {
		components: {
			
		},
		data() {
			return {
				count:0
			};
		},
		methods:{
			// 增加,减少按钮 id为0减少，为1增加
			addReduce(id) {
				if(id === 0) {
					if(this.count > 1) {
						this.count--;
					}
				}else {
					this.count++
				}
			},
			totalMoney(){
				
			},
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
		.context{
			background-color: #fff;
			padding-left: 10rpx;
		}
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
			
			.set1-p2{
				margin-top: 50rpx;
				color: #AAAAAA;
				font-size: 30rpx;
				line-height: 40rpx;
			}
			>view{
				display: flex;
				justify-content: space-between;
				>text{
					font-size: 30rpx;
				}
				.counter {
					font-size: 26upx;
					vertical-align: bottom;
					display: inline-block;
					height: 55rpx;
					padding-right: 22rpx;
					.reduce-add {
						display: inline-block;
						border: 1px solid #707070;
						width: 40rpx;
						height: 30rpx;
						line-height: 28rpx;
						text-align: center;
						font-size: 32rpx;
						vertical-align: middle;
					}
					.amount {
						display: inline-block;
						width: 60rpx;
						height: 30rpx;
						line-height: 30rpx;
						text-align: center;
						border-top: 1px solid #707070;
						border-bottom: 1px solid #707070;
						vertical-align: middle;
						color: #000;
					}
				}
			}
			
		}
	}
	.bu{
		height: 70rpx;
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
