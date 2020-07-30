<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">增加商品品类</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="add()">
				<div class="form-group">
					<label for="exampleInputPassword1">品类名称</label>
					<input type="text" class="form-control" v-model="category.categoryTag" required>
				</div>
			
				 
				<button type="submit" class="btn btn-primary">确定</button>
				<router-link to="list" class="btn btn-default">取消</router-link>
			</form>

		</div>
		<!-- /.box-body -->
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default {
		name: "CategoryAdd",
		data() {
			return {
				category: {
					categoryId: 0,
					categoryTag: ""
				}
			};
		},
		methods: {
			add() {
				this.axiosJson.post("/category/add", this.category).then(result => {
					if (result.data.status == "ok") {
						alert(result.data.message);
						console.log(result.data.intResult);
						this.$router.push("/employee/category/list"); //编程方式跳转到部门列表组件
						
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
