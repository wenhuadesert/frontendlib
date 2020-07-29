<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">仓库管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">地址</th>
				  <th scope="col">容量</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="st in storehouseList" v-bind:key="st.storehouseId">
				  <td>{{st.storehouseId}}</td>
				  <td>{{st.address}}</td>
				  <td>{{st.capacity}}</td>
					<td>
					  <router-link v-bind:to="'/employee/storehouse/modify/'+st.storehouseId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteStorehouse(st.storehouseId)"  class="btn btn-danger">删除</a> 
					 <router-link v-bind:to="{name:'storehouseview', params: {storehouseid:st.storehouseId}}" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<div class="row">
			<div class="col-md-6">
			个数:<span>{{count}}</span>	页数:<span>{{page}}</span>/<span>{{pageCount}}</span>
			</div>
			<div class="col-md-6 text-right">
				<nav>
				  <ul class="pagination justify-content-end">
					<li class="page-item"><a class="page-link" href="#" v-on:click="toFirstPage()">首页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toPreviousPage()">上页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toNextPage()">下页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toLastPage()">末页</a></li>
				  </ul>
				</nav>
			</div>
		</div> 
		<!-- /.box-body -->
		<router-link to="/employee/storehouse/add" class="btn btn-default">增加仓库</router-link>
	</div>
	
</template>

<script>
	//import axios from "axios";
	export default {
		name:"StorehouseList",
		data(){
			return {
				storehouseList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJson.get("/storehouse/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.storehouseList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteStorehouse(no){
				let checkresult=confirm("您确认要删除此仓库么");
				if(checkresult){
					this.axiosJson.post("/storehouse/delete",{storehouseId:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
							this.$router.push("/storehouse/list");
						}
					});
				}
			},
			toFirstPage(){
				this.page=1;
				this.getList();
			},
			toPreviousPage(){
				if(this.page>1){
					this.page--;
					this.getList();
				}
				
			},
			toNextPage(){
				if(this.page<this.pageCount){
					this.page++;
					this.getList();
				}
			},
			toLastPage(){
				this.page=this.pageCount;
				this.getList();
			}
		}
	}
</script>

<style>
</style>
