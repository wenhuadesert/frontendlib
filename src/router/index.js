import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由管理组件
import AdminLogin from "./../components/admin/login.vue";
//子App组件
import EmployeeApp from "./../components/employeeApp.vue";
import ClientApp from "./../components/clientApp.vue";
//首页组件
import HomeMain from "./../components/home/main.vue";
//员工组件路由
import EmployeeList from "./../components/employee/list.vue";
import EmployeeLogin from "./../components/employee/login.vue";
import EmployeeAdd from "./../components/employee/add.vue";
import EmployeeModify from "./../components/employee/modify.vue";
import EmployeeView from "./../components/employee/view.vue";
import EmployeeMain from "./../components/employee/main.vue";
//客户组件路由
import ClientList from "./../components/client/list.vue";
import ClientLogin from "./../components/client/login.vue";
import ClientAdd from "./../components/client/add.vue";
import ClientModify from "./../components/client/modify.vue";
import ClientView from "./../components/client/view.vue";
import ClientSelfModify from "./../components/client/selfModify.vue";
import ClientSelfView from "./../components/client/selfView.vue";
import ClientMain from "./../components/client/main.vue";
//仓库路由
import StorehouseMain from "./../components/storehouse/main.vue";
import StorehouseList  from "./../components/storehouse/list.vue";
import StorehouseAdd  from "./../components/storehouse/add.vue";
import StorehouseModify  from "./../components/storehouse/modify.vue";
import StorehouseView  from "./../components/storehouse/view.vue";
//快递公司路由
import EcMain from "./../components/expresscompany/main.vue";
import EcList from "./../components/expresscompany/list.vue";
import EcAdd from "./../components/expresscompany/add.vue";
import EcModify from "./../components/expresscompany/modify.vue";
import EcView from "./../components/expresscompany/view.vue";
//商品
import GoodsMain from "./../components/goods/main.vue"
import GoodsList from "./../components/goods/list.vue"
import GoodsAdd from "./../components/goods/add.vue"
import GoodsModify from "./../components/goods/modify.vue"
import GoodsView from "./../components/goods/view.vue"
import GoodsAddPhoto from "./../components/goods/addphoto.vue"
import GoodsClientList from "./../components/goods/clientgoodslist.vue"
import GoodsClientView from "./../components/goods/clientgoodsview.vue"
//购物车路由
import CartList from "./../components/cart/list.vue"
import CartMain from "./../components/cart/main.vue"
//商品类别
import CategoryMain from "./../components/category/main.vue"
import CategoryList from "./../components/category/list.vue"
import CategoryAdd from "./../components/category/add.vue"
import CategoryModify from "./../components/category/modify.vue"
import CategoryView from "./../components/category/view.vue"
//快递路由
import ExpressMain from "./../components/express/main.vue"
import ExpressList from "./../components/express/list.vue"
import ExpressAdd from "./../components/express/add.vue"
import ExpressModify from "./../components/express/modify.vue"
import ExpressView from "./../components/express/view.vue"
Vue.use(VueRouter)

const routes = [
	//{path:"/", name:"homeapp", component:HomeApp},
	
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/client", name:"clientapp", component:ClientApp, children:[
		{path:"cart", name:"cartmain", component:CartMain, children:[
			{path:"list/:cliid",name:"cartlist", component:CartList},
			{path:"", redirect: "list/1" }
		]},
		{path:"client", name:"clientmain", component:ClientMain, children:[
			{path:"modify/:cliid",name:"clientselfmodify", component:ClientSelfModify},
			{path:"view/:cliid",name:"clientselfview",component:ClientSelfView},
		]},
		{path:"goods", name:"goodsmain", component:GoodsMain,children:[
			{path:"list",name:"goodsclientlist",component:GoodsClientList},
			{path:"view/:no",name:"goodsclientview",component:GoodsClientView,props:true},
		]},
		{path:"", redirect: "goods/list"},
		
	]},

	{path:"/employee", name:"employeeapp", component:EmployeeApp, children:[
		{path:"storehouse", name:"storehousemain", component:StorehouseMain,children:[
			{path:"list",name:"storehouselist",component:StorehouseList},
			{path:"add",name:"storehouseadd",component:StorehouseAdd},
			{path:"modify/:storehouseId",name:"storehousemodify",component:StorehouseModify},
			{path:"view/:storehouseId",name:"storehouseview",component:StorehouseView,props:true},
			{path:"", redirect: "list" }
		]},
		{path:"goods", name:"goodsmain", component:GoodsMain,children:[
			{path:"list",name:"goodslist",component:GoodsList},
			{path:"add",name:"goodsadd",component:GoodsAdd},
			{path:"add/photo/:no",name:"goodsaddphoto",component:GoodsAddPhoto,props:true},
			{path:"modify/:no",name:"goodsmodify",component:GoodsModify,props:true},
			{path:"view/:no",name:"goodsview",component:GoodsView,props:true},
			{path:"",redirect:"list"},
		]},
		{path:"category", name:"categorymain", component:CategoryMain,children:[
			{path:"list",name:"categorylist",component:CategoryList},
			{path:"add",name:"categoryadd",component:CategoryAdd},
			{path:"modify/:no",name:"categorymodify",component:CategoryModify,props:true},
			{path:"view/:no",name:"categoryview",component:CategoryView,props:true},
			{path:"",redirect:"list"},
		]},
		{path:"employee", name:"employeemain", component:EmployeeMain, children:[
			{path:"list",name:"employeelist", component:EmployeeList},
			{path:"add",name:"employeeadd", component:EmployeeAdd},
			{path:"modify/:empid",name:"employeemodify", component:EmployeeModify},
			{path:"login",name:"employeelogin",component:EmployeeLogin},
			{path:"view/:empid",name:"employeeview",component:EmployeeView},
			{path:"", redirect:"list"},
		]},
		{path:"client", name:"clientmain", component:ClientMain, children:[
			{path:"list",name:"clientlist", component:ClientList},
			{path:"add",name:"clientadd", component:ClientAdd},
			{path:"modify/:cliid",name:"clientmodify", component:ClientModify},
			{path:"login",name:"clientlogin",component:ClientLogin},
			{path:"view/:cliid",name:"clientview",component:ClientView},
			{path:"", redirect:"list"},
		]},
		{path:"expresscompany", name:"expresscompanymain", component:EcMain,children:[
			{path:"list",name:"expresscompanylist",component:EcList},
			{path:"add",name:"expresscompanyadd",component:EcAdd},
			{path:"modify/:excid",name:"expresscompanymodify",component:EcModify},
			{path:"view/:excid",name:"expresscompanyview",component:EcView,props:true},
			{path:"", redirect: "list" }
		]},
		{path:"express", name:"expressmain", component:ExpressMain,children:[
			{path:"list",name:"expresslist",component:ExpressList},
			{path:"add",name:"expressadd",component:ExpressAdd},
			{path:"modify/:id",name:"expressmodify",component:ExpressModify,props:true},
			{path:"view/:id",name:"expressview",component:ExpressView,props:true},
			{path:"",redirect:"list"},
		]},
		{path:"/", component:HomeMain} 
	]}


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
