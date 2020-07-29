<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看仓库</h3>
</div>
<div class="box-body">
	<table class="table table-bordered">
	  <thead>
		<tr>
		  <th scope="col">编号</th>
		  <th scope="col">地址</th>
		  <th scope="col">容量</th>
		</tr>
	  </thead>
	  <tbody>
		
		  <td>{{storehouse.storehouseId}}</td>
		  <td>{{storehouse.address}}</td>
		  <td>{{storehouse.capacity}}</td>
			
	  </tbody>
	</table>
   <router-link to="/storehouse/list" class="btn btn-default">返回</router-link>
</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"StorhouseView",
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
			}
			
		}
	}
</script>

<style>
</style>
