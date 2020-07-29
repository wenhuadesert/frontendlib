<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加仓库</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  
	  <div class="form-group">
		<label for="exampleInputPassword1">仓库地址</label>
		<input type="text" class="form-control" v-model="storehouse.address" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">仓库容量</label>
	  		<input type="text" class="form-control" v-model="storehouse.capacity" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/storehouse/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	//import axios from "axios";
	export default {
		name:"StorehouseAdd",
		data(){
			return {
				storehouse:{
					storehouseId:"",
					address:"",
					capacity:""
				}
			};
		},
		methods:{
			add(){
				this.axiosJson.post("/storehouse/add",this.storehouse).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/storehouse/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
