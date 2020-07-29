<template>

	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">购物车</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">编号</th>
						<th scope="col">商品名称</th>
						<th scope="col">价格</th>
						<th scope="col">件数</th>
						<th scope="col">品牌</th>
						<th scope="col">操作</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="client in clientList" v-bind:key="client.goods[0].goodsId">
						<td>{{client.goods[0].goodsId}}</td>
						<td>{{client.goods[0].goodsTag}}</td>
						<td>{{client.goods[0].price}}</td>
						<td>{{client.cacount}}</td>
						<td>{{client.goods[0].brand}}</td>
						<td>
							<router-link v-bind:to="'/goods/modify/'+client.goods[0].goodsId" class="btn btn-default">修改</router-link>

							<a href="#" v-on:click="deleteGoods(client.id, client.goods[0].goodsId)" class="btn btn-danger">删除</a>
							<router-link v-bind:to="'/goods/view/'+client.goods[0].goodsId" class="btn btn-default">查看</router-link>
						</td>
					</tr>

				</tbody>
			</table>

			<router-link to="/goods/add" class="btn btn-default">增加商品</router-link>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "CartList",
		data() {
			return {
				clientList: [],
				page: 1,
				rows: 10,
				count: 0,
				pageCount: 0
			};
		},
		created() { //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJson.get("/client/cart/list/all/page", {
					params: {
						id:1,
						rows: this.rows,
						page: this.page
					}
				}).then(result => {
					this.clientList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
				});
			},
			deleteCart(id, goodsid) {
				let checkresult = confirm("您确认要删除此商品么");
				if (checkresult) {
					this.axiosJson.post("/client/cart/delete", {
						id:(id),
						goid:(goodsid)
					}).then(result => {
						alert(result.data.message);
						if (result.data.status == "ok") {
							this.getList();
						}
					});
				}


			}
		}
	}
</script>

<style>
</style>
