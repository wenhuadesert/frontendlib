<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">快递公司管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">名字</th>
				  <th scope="col">电话</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="ec in expresscompanyList" v-bind:key="ec.excid">
				  <td>{{ec.excid}}</td>
				  <td>{{ec.excname}}</td>
				  <td>{{ec.excphone}}</td>
					<td>
					  <router-link v-bind:to="'/employee/expresscompany/modify/'+st.storehouseId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteExpresscompany(st.storehouseId)"  class="btn btn-danger">删除</a> 
					  <router-link v-bind:to="{name:'expresscompanyview', params: {excid:ec.excid}}" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/employee/expresscompany/add" class="btn btn-default">增加快递公司</router-link>
	</div>
	
</template>

<script>
	//import axios from "axios";
	export default {
		name:"ExpresscompanyList",
		data(){
			return {
				expresscompanyList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJson.get("/expresscompany/list/all",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.expresscompanyList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteExpresscompany(no){
				let checkresult=confirm("您确认要删除此快递公司吗么");
				if(checkresult){
					this.axiosJson.get("/expresscompany/delete",{exeid:no}).then(result=>{
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
