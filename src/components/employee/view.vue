<template>
      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">查看员工信息</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
          	<form>
			  <div class="form-group">
			    <label for="exampleInputEmail1">员工姓名：</label>
			    <span v-text="employee.name">  </span>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工性别：</label>
			    <span v-text="employee.sex"></span>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">员工用户名：</label>
			    <span v-text="employee.username"> </span>
			    <small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">员工密码：	</label>
			    <span v-text="employee.password">  </span>
			  </div>
			  <input type="hidden" name="no" value="">
			  <router-link to="/employee/employee/list" class="btn btn-primary">返回</router-link>
			</form>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"EmployeeView",
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
			let employeeId=this.$route.params.empid;
			this.getEmployee(employeeId);
		},
		methods:{
			getEmployee(id){
				this.axiosJson.get("/employee/get?id="+id).then(result=>{
					this.employee=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
