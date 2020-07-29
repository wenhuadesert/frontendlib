<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看商品</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label for="exampleInputEmail1">商品编号</label>
					<span>	{{goods.goodsId}}</span>

				</div>
				
				<div class="form-group">
					<label for="exampleInputPassword1">商品名称</label>
					<span>	{{goods.goodsTag}}</span>
				</div>
				
				<div class="form-group">
					<label for="exampleInputPassword1">商品价格</label>
					<span>	{{goods.price}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">商品库存</label>
					<span>	{{goods.goodsStock}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">商品品牌</label>
					<span>	{{goods.brand}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">仓库编号</label>
					<span>	{{goods.storehouse.storehouseId}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">品类编号</label>
					<span>	{{goods.category.categoryId}}</span>
				</div>
				<router-link to="/goods/list" class="btn btn-default">返回</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//部门查看组件
	//import axios from "axios";
	export default {
		name: "GoodsView",
		data() {
			return {
				goods: {
					goodsId: "",
					goodsTag: "",
					price: 0,
					goodsStock: 0,
					brand:"",
					storehouse:{
						storehouseId:0,
						address: "",
						capacity: 0
					},
					category:{
						categoryId:0,
						categoryTag: ""
					}
				}
			};
		},
		props: {
			no: {
				required: true
			}
		},
		created() { //组件的创建生命周期函数
			//console.log("???")
			this.getGoods()
		},
		methods: {
			getGoods() {
				this.axiosJson.get("/goods/get" ,{
					params:{
						no:this.no
					}
				}).then(result => {
					this.goods = result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
