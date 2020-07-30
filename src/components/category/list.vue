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
						<th scope="col">品类编号</th>
						<th scope="col">品类名称</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="category in categoryList" v-bind:key="category.categoryId">
						<td>{{category.categoryId}}</td>
						<td>{{category.categoryTag}}</td>
						<td>
							<router-link v-bind:to="'modify/'+category.categoryId" class="btn btn-default">修改</router-link>
							<a href="#" v-on:click="deleteCategory(category.categoryId)" class="btn btn-danger">删除</a>
							<router-link v-bind:to="'view/'+category.categoryId" class="btn btn-default">查看</router-link>
						</td>
					</tr>

				</tbody>
			</table>

			<router-link to="add" class="btn btn-default">增加品类</router-link>
		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "CategoryList",
		data() {
			return {
				categoryList: [],
				page: 1,
				rows: 10,
				count: 0,
				pageCount: 0,
			};
		},
		created() { //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods: {
			getList() {
				this.axiosJson.get("/category/list/all/page", {
					params: {
						rows: this.rows,
						page: this.page
					}
				}).then(result => {
					this.categoryList = result.data.list;
					this.count = result.data.count;
					this.pageCount = result.data.pageCount;
				});
			},
			deleteCategory(no) {
				let checkresult = confirm("您确认要删除此商品类别么");
				if (checkresult) {
					console.log(no);
					this.axiosJson.post("/category/delete", {
						categoryId:(no)
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
