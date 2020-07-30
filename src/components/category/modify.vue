<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改品类</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">

				<div class="form-group">
					<label for="exampleInputEmail1">品类名称</label>
					<input type="text" class="form-control" v-model="category.categoryTag" required>
					<small id="emailHelp" class="form-text text-muted"></small>
				</div>
				



				<button type="submit" class="btn btn-primary">提交</button>
				<router-link to="/employee/category/list" class="btn btn-default">取消</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	//部门修改组件
	export default {
		name: "CategoryModify",
		data() {
			return {
				category: {
					categoryId: 0,
					categoryTag: ""
				}
			};
		},
		props: {
			no: {
				required: true
			}
		},
		created() { //组件的创建生命周期函数
			this.getCategory();

		},
		methods: {
			getCategory() {

				this.axiosJson.get("/category/get", {
						params:{
							no:this.no
						}
					}

				).then(result => {
					this.category = result.data.result;
				});

			},
			modify() {
				this.axiosJson.post("/category/modify", this.category).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						//this.$router.push("/goods/list"); //编程方式跳转到部门列表组件
						this.$router.push("/employee/category/list");
					} else {
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
