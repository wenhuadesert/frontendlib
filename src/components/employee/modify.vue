<template>

      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">修改员工信息</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
          	<form method = "post" v-on:submit.prevent="modify()">
			  <div class="form-group">
			    <label for="exampleInputEmail1">员工姓名</label>
			    <input type="text" class="form-control" v-model="employee.name">
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工性别</label>
			    <input type="text" class="form-control" v-model="employee.sex">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">员工用户名</label>
			    <input type="text" class="form-control" v-model="employee.username">
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工密码</label>
			    <input type="text" class="form-control" v-model="employee.password">
			  </div>
			  <input type="hidden" name="no" value="">
			  <button type="submit" class="btn btn-primary">修改</button>
			  <router-link to="/employee/list" class="btn btn-default">取消</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default{
		name:"EmployeeModify",
		data(){
			return{
				employee:{
					id:"",
					name:"",
					sex:"",
					username:"",
					password:""
				}
			};
		},
		created(){
			let employeeId=this.$route.params.id;
			this.getEmployee(employeeId);
		},
		methods:{
			getEmployee(id){
				axios.get("http://localhost:8081/employee/get?id="+id).then(result=>{
					this.employee=result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8081/employee/modify",this.employee).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/employee/list");
					}else{
						alert(result.data.message);	
					}
				});				
			}
		}
	}
</script>

<style>
</style>
