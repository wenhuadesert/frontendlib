import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由管理组件
//首页组件
import HomeMain from "./../components/home/main.vue";
import EmployeeList from "./../components/employee/list.vue";

Vue.use(VueRouter)

const routes = [
	{path:"/", name:"homemain", component:HomeMain},
	{path:"/employee", name:"employeelist", component:EmployeeList}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
