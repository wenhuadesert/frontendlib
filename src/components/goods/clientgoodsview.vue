<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看商品</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modifyCart()">
				<div class="form-group">
					<label for="exampleInputEmail1">商品编号</label>
					<span> {{goods.goodsId}}</span>

				</div>

				<div class="form-group">
					<label for="exampleInputPassword1">商品名称</label>
					<span> {{goods.goodsTag}}</span>
				</div>

				<div class="form-group">
					<label for="exampleInputPassword1">商品价格</label>
					<span> {{goods.price}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">商品库存</label>
					<span> {{goods.goodsStock}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">商品品牌</label>
					<span> {{goods.brand}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">仓库地址</label>
					<span> {{goods.storehouse.address}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">品类名称</label>
					<span> {{goods.category.categoryTag}}</span>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">购买数量</label>
					<input type="text" class="form-control" v-model="num">
				</div>
				<button type="submit" class="btn btn-primary">添加购物车</button>
				<router-link to="/client/goods/list" class="btn btn-default">返回</router-link>
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
		name: "GoodsClientView",
		data() {
			return {
				goods: {
					goodsId: "",
					goodsTag: "",
					price: 0,
					goodsStock: 0,
					brand: "",
					storehouse: {
						storehouseId: 0,
						address: "",
						capacity: 0
					},
					category: {
						categoryId: 0,
						categoryTag: ""
					}
				},
				num: 0
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
				this.axiosJson.get("/goods/get", {
					params: {
						no: this.no
					}
				}).then(result => {
					this.goods = result.data.result;
				});
			},

			modifyCart(id) {
				let checkresult = confirm("您确认要添加么");
				console.log(this.num);
				console.log(this.goods.goodsId);
				if (checkresult) {
					this.axiosJson.post("/client/cart/add", {
						id: id,
						goods: [{
							goodsId: this.goods.goodsId
						}],
						cacount: this.num
					}).then(result => {
						if (result.data.status == "ok") {
							alert(result.data.message);
							//this.getList();
						} else {
							alert(result.data.message);
						}
					});
					this.goods.goodsStock-=this.num;
					this.axiosJson.post("/goods/modify", this.goods).then(result => {
						if (result.data.status == "ok") {
							alert(result.data.message);
							//this.$router.push("/goods/list"); //编程方式跳转到部门列表组件
							//this.$router.push("/employee/goods/add/photo/"+this.no);
						} else {
							alert(result.data.message);
						}
					});
				}
			}
		}

	}
	
</script>

<style>
</style>
