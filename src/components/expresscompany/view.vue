<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看部门</h3>
</div>
<div class="box-body">
	<table class="table table-bordered">
	  <thead>
	  		<tr>
	  		  <th scope="col">名字</th>
	  		  <th scope="col">电话</th>
	  		</tr>
	  </thead>
	  <tbody>	
	  	<td>{{expresscompany.excname}}</td>
	  	<td>{{expresscompany.excphone}}</td>
	  		  	  			
	  </tbody>
	  <router-link to="/employee/expresscompany/list" class="btn btn-default">返回</router-link>
	</table>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"ExpressCompanView",
		data(){
			return {
				expresscompany:{
					excname:"",
					excphone:"",
					excid:0
				}
			};
		},
		props:{
			excId:{required:true}
		},
		created(){ //组件的创建生命周期函数
			this.getExpresscompany();
		},
		methods:{
			getExpresscompany(){
				this.axiosJson.get("/expresscompany/get",{
					params:{
						id:this.excId				
					}
				}).then(result=>{
					this.expresscompany=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
