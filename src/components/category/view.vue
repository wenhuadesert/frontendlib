<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">查看品类</h3>
		</div>
		<div class="box-body">
			<form method="post">
				<div class="form-group">
					<label for="exampleInputEmail1">品类编号</label>
					<span>	{{category.categoryId}}</span>

				</div>
				
				<div class="form-group">
					<label for="exampleInputPassword1">品类名称</label>
					<span>	{{category.categoryTag}}</span>
				</div>
				
				
				<router-link to="/employee/category/list" class="btn btn-default">返回</router-link>
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
		name: "CategoryView",
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
			//console.log("???")
			this.getCategory()
		},
		methods: {
			getCategory() {
				this.axiosJson.get("/category/get" ,{
					params:{
						no:this.no
					}
				}).then(result => {
					this.category = result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
