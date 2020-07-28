<template>

	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">Title</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">编号</th>
						<th scope="col">商品名称</th>
						<th scope="col">价格</th>
						<th scope="col">库存</th>
						<th scope="col">品牌</th>
						<th scope="col">操作</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="gm in goodsList" v-bind:key="gm.goodsId">
						<td>{{gm.goodsId}}</td>
						<td>{{gm.goodsTag}}</td>
						<td>{{gm.price}}</td>
						<td>{{gm.goodsStock}}</td>
						<td>{{gm.brand}}</td>
						<td>
							<router-link v-bind:to="'/goods/modify/'+gm.goodsId" class="btn btn-default">修改</router-link>

							<a href="#" v-on:click="deleteGoods(gm.goodsId)" class="btn btn-danger">删除</a>
							<router-link v-bind:to="'/goods/view/'+gm.goodsId" class="btn btn-default">查看</router-link>
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
	import axios from "axios";
	export default {
		name: "GoodsList",
		data() {
			return {
				goodsList: [],
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
				axios.get("http://localhost:8080/goods/list/all/page", {
					params: {
						rows: this.rows,
						page: this.page
					}
				}).then(result => {
					this.goodsList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
				});
			},
			deleteGoods(no) {
				let checkresult = confirm("您确认要删除此商品么");
				if (checkresult) {
					console.log(no);
					axios.post("http://localhost:8080/goods/delete", {
						goodsId:(no)
					}).then(result => {
						alert(result.data.message);
						if (result.data.status == "ok") {
							this.getList();
						}
					});
					console.log(no);
				}


			}
		}
	}
</script>

<style>
</style>
