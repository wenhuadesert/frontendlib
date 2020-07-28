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
			            <th scope="col">编号</th>
			            <th scope="col">姓名</th>
			            <th scope="col">性别</th>
			            <th scope="col">员工账号</th>
			            <th scope="col">员工密码</th>
			            <th scope="col">操作</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr v-for="em in employeeList" v-bind:key="em.id">
			            <td>{{em.id}}</td>
			            <td>{{em.name}}</td>
			            <td>{{em.sex}}</td>
			            <td>{{em.username}}</td>
			            <td>{{em.password}}</td>
			            <td><router-link v-bind:to="'/employee/modify/'+em.id" class="btn btn-primary">修改</router-link>
			            	<a href="#" v-on:click="deleteEmployee(em.id)" class="btn btn-danger">删除</a> 
			            	<router-link v-bind:to="'/employee/view/'+em.id" class="btn btn-info">查看</router-link>  
			            </td>
			        </tr>
			      </tbody>
			    </table>
			    
	        	<router-link to="/employee/add" class="btn btn-default">增加新部门</router-link>
	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default {
		name:"EmployeeList",
		data(){
			return{
				employeeList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){//当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8081/employee/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.employeeList=result.data.list;
					this.cout=result.count;
					this.pageCount=result.pageCount;
				});
			},
			deleteEmployee(id){
				let checkresult=confirm("您确认要解雇该员工吗");
				if (checkresult){
					axios.post("http://localhost:8081/employee/delete",{id:id}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
			}
		}
	}
</script>

<style>
</style>
