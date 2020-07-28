import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由管理组件
//首页组件
import HomeMain from "./../components/home/main.vue";
import EmployeeLogin from "./../components/employee/login.vue";
import EmployeeList from "./../components/employee/list.vue";

//仓库路由
import StorehouseMain from "./../components/storehouse/main.vue";
import StorehouseList  from "./../components/storehouse/list.vue";
import StorehouseAdd  from "./../components/storehouse/add.vue";
import StorehouseModify  from "./../components/storehouse/modify.vue";
import StorehouseView  from "./../components/storehouse/view.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/", name:"homemain", component:HomeMain},
	{path:"/employee/login", name:"employeelogin", component:EmployeeLogin},
	{path:"/employee", name:"employeelist", component:EmployeeList},
	{path:"/storehouse", name:"storehousemain", component:StorehouseMain,children:[
		{path:"list",name:"storehouselist",component:StorehouseList},
		{path:"add",name:"storehouseadd",component:StorehouseAdd},
		{path:"modify/:storehouseId",name:"storehousemodify",component:StorehouseModify},
		{path:"view/:storehouseId",name:"storehouseview",component:StorehouseView},
		{path:"", redirect: "list" }
	]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
