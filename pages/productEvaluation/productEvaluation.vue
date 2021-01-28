<template>
	<view class="content">
		<view class="box">
			<view class="list">
				<view v-for="(v,i) in arr" @click="change(i)" :class="sel === i?'selected':''" :key="i">{{arrText[i]}}{{v}}</view>
			</view>
		</view>
		<view class="empty" v-if="isEmpty">暂无评价</view>
		<view class="evaluation" v-for="(v,i) in dataArr" :key="i" v-if="v.status == sel+1 || sel === 0">
			<view class="left">
				<image :src="v.image"></image>
				<view>{{v.username}}</view>
			</view>
			<view class="context">
				{{v.content}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				arrText:['全部','好评','中评','差评','有图'],
				arr:[0,0,0,0,0],
				sel:0,
				src:"http://103.210.21.253/yangchebei/images/default.png",
				dataArr:[],
				isEmpty:false
			}
		},
		methods:{
			change(i){
				this.sel = i;
			}
		},
		onLoad(option) {
			wx.request({
				url:'http://172.16.14.29:6067/sku/findEvaluateById?goodsId='+option.id,
				method:'post',
				header: {
					'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
				},
				success:(res)=>{
					if(res.data.length === 0){
						this.isEmpty = true;
					}else{
						this.dataArr = res.data;
						console.log(this.dataArr)
						for(let i=0;i<this.dataArr.length;i++){
							switch(this.dataArr[i].status){
								case "1":
									this.arr[2]++;
									this.arr[0]++;
									break;
								case "2":
									this.arr[1]++;
									this.arr[0]++;
									break;
								case "3":
									this.arr[3]++;
									this.arr[0]++;
									break;
								case "4":
									this.arr[4]++;
									this.arr[0]++;
									break;
								case "5":
									this.arr[0]++;
									break;
							}
						}
					}
				}
			})
		}
	}
</script>

<style lang="less">
	html,body{
		height: 100%;
		background-color: #F4F4F3;
	}
	.empty{
		text-align: center;
		margin-top: 20rpx;
	}
	.evaluation{
		display: flex;
		align-items: center;
		min-height: 150rpx;
		padding: 10rpx 16rpx;
		background-color: #fff;
		padding-top: 6rpx;
		border-top: 1px solid #CCCCCC;
		.left{
			display: flex;
			align-items: center;
			image{
				width: 50rpx;
				height:50rpx;
			}
			>view{
				margin-left: 20rpx;
			}
		}
		.context{
			margin-left: 30rpx;
		}
	}
	.box{
		.list{
			display: flex;
			justify-content: space-between;
			font-size: 30rpx;
			background-color: #fff;
			>view.selected{
				border-bottom: 2px solid #FD8F33;
			}
			>view{
				padding: 10rpx 16rpx;
			}
		}
	}
</style>
