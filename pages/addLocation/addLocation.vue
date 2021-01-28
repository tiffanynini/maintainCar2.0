<template>
	<view class="body">
		<view>
			<text>收货人:</text>
			<input class="right" placeholder="请输入收货人姓名" type="text" v-model="receiverName" value="receiverName" />
		</view>
		<view>
			<text>手机号码:</text>
			<input class="right" placeholder="请输入手机号码" type="text" v-model="phone" value="phone" />
		</view>
		<!-- 三级联动地址插件 -->
		<view>
			<view @click="addressShow = true">所在地区:</view>
			<view class="right" @click="addressShow = true">{{address}}
				<pickerAddress v-model="addressShow" @confirm="addresspick" />
			</view>
		</view>
		<view>
			<text>详细地址</text>
			<input class="right" placeholder="请输入详细地址:" type="text" v-model="receiverAddress" value="receiverAddress" />
		</view>
		<!-- <view>
			<label>
				<radio value="defaultLocation" /><text class="right">设置为默认地址</text>
			</label>
		</view> -->
		<button type="primary" @click="status==0?modification():save()">保存</button>
		<button type="warn" v-if="status==0" @click="delete1">删除</button>
	</view>
</template>

<script>
	import pickerAddress from '@/components/liudx-pickerAddress/index.vue'
	    export default {
	        data() {
	            return {
					//三级联动地址插件
	                addressShow: false,
	                form: {
	                    province: '',
	                    city: '',
	                    area: '',
	                },
					//省市区
	                address: '四川省成都市高新区',
					//状态码 0:修改地址,1:添加地址
					status:0,
					// 地址id
					id:0,
					// 用户id
					userId:0,
					//用户电话
					phone:'',
					// 是否为默认地址
					defaultLocation:0,
					//用户姓名
					receiverName:'',
					//详细地址
					receiverAddress:'',
					//用户地址数据
					informationArr:null
	            }
	        },
	        onLoad() {
	
	        },
	        methods: {
				//三级联动地址插件
	            addresspick(obj) {
	                let arr = [ 'province', 'city', 'area'];
	                let place = '';
	                arr.map(key => {
	                    this.form[key] = obj[key].AreaId
	                    place += obj[key].AreaName
	                })
	                this.address = place
	            },
				initialize(){
					switch(this.status){
						//状态码 0:未付款
						case 0:
						this.msg='修改成功';
						uni.setNavigationBarTitle({
						    title: '修改收货地址'
						});
						break;
						//状态码 1:已付款未发货
						case 1:
						this.msg='添加成功';
						uni.setNavigationBarTitle({
						    title: '添加收货地址'
						});
						break;
					}
				},
				//获取用户地址信息
				getInformation(){
					uni.request({
					    url: 'http://172.16.14.29:6067/order/findAllAddress',
						method:'get',
					    data: {
					        'userId':1
					    },
					    header: {
					        'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
					    },
					    success: (res) => {
							// console.log(res,"信息");
							for(let i=0;i<res.data.data.length;i++){
								if(res.data.data[i].id==this.id){
									this.informationArr=res.data.data[i];
									this.receiverAddress=this.informationArr.receiverAddress;
									this.defaultLocation=this.informationArr.def;
									this.address=this.informationArr.receiverCity;
									this.receiverName=this.informationArr.receiverName;
									this.phone=this.informationArr.receiverPhone;
									return;
								}
							}
					    }
					});
				},
				//保存
				save(){
					if(this.receiverAddress!=''&&this.address!=''&&this.receiverName!=''&&this.phone!=''){
						uni.request({
							url:'http://172.16.14.29:6067/order/addAddress',
							method:'post',
							header: {
							    'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
							},
							data:{
								"def": 0,
								  "receiverAddress": this.receiverAddress,
								  "receiverCity": this.address,
								  "receiverName": this.receiverName,
								  "receiverPhone": this.phone,
								  "userId": 1
							},
							success: (res) => {
								// console.log(res,"保存");
								if(res.statusCode==200){
									uni.showToast({
									    title: "添加成功",
									    duration: 1000
									});
									setTimeout(function(){
										uni.navigateTo({
										    url:`../location/location`
										});
									},1000)
									
								}
							}
						})
					}else{
						uni.showToast({
						    title: "请完善所有信息",
						    duration: 1000,
							icon:"none"
						});
					}
				},
				//删除
				delete1(){
					uni.request({
						url:'http://172.16.14.29:6067/order/delete/{id}?id='+this.id,
						method:'get',
						header: {
							'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
						},
						success: (res) => {
							// console.log(res,"删除");
							if(res.statusCode==200){
								uni.showToast({
									title: '删除成功',
									duration: 1000
								});
								setTimeout(function(){
									uni.redirectTo({
										url:`../location/location`
									});
								},1000)
								
							}
						}
					})
				},
				// 修改
				modification(){
					if(this.receiverAddress!=''&&this.address!=''&&this.receiverName!=''&&this.phone!=''){
						uni.request({
							url:'http://172.16.14.29:6067/order/updateAddress',
							method:'post',
							header: {
								'token': '88318de7a5b44fc0aa43fadf22e1980a' //自定义请求头信息
							},
							data:{
								"def": 0,
								'id':this.id,
								"receiverAddress": this.receiverAddress,
								"receiverCity": this.address,
								"receiverName": this.receiverName,
								"receiverPhone": this.phone,
								"userId": 1
							},
							success: (res) => {
								// console.log(res,"修改");
								if(res.statusCode==200){
									uni.showToast({
										title: "修改成功",
										duration: 1000
									});
									setTimeout(function(){
										uni.navigateTo({
											url:`../location/location`
										});
									},1000)
									
								}
							}
						})
					}else{
						uni.showToast({
						    title: "请完善所有信息",
						    duration: 1000,
							icon:"none"
						});
					}
					
				}
	        },
	        components: {
	            pickerAddress
	        },
			onLoad(res){
				//状态码 0:修改地址,1:添加地址
				this.status=res.status;
				this.id=res.id;
				this.userId=res.userId;
				this.initialize();
				
			},
			mounted(){
				this.getInformation()
			}
	    }
</script>

<style lang="less" scoped>
	.body{
		height: 100%;
		background-color: #F4F4F3;
		view{
			background-color: #fff;
			display: flex;
			align-items: center;
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 1rpx solid #D7D7D7;
			padding-left: 10rpx;
			.right{
				margin-left: 20rpx;
			}
		}
	}
</style>
