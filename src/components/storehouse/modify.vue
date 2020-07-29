<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改仓库</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">仓库地址</label>
		<input type="text" class="form-control" v-model="storehouse.address" >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">仓库容量</label>
		<input type="text" class="form-control" v-model="storehouse.capacity">
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/department/list" class="btn btn-default">取消</router-link>
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
		name:"StorehouseModify",
		data(){
			return {
				storehouse:{
					address:"",
					capacity:"",
					storehouseId:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let storehouseNo=this.$route.params.storehouseId;
			this.getStorehouse(storehouseNo);
			
		},
		methods:{
			getStorehouse(no){
				
				this.axiosJson.get("/storehouse/get?no="+no).then(result=>{
					this.storehouse=result.data.result;
				});
			},
			modify(){
				this.axiosJson.post("/storehouse/modify",this.storehouse).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/storehouse/list"); //编程方式跳转到仓库列表组件
					}
					else{
						alert(result.data.message);
						this.$router.push("/storehouse/list");
					}
				});
			}
		}
	}
</script>

<style>
</style>
