import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Router.prototype.openPage = function(link, query){
	this.push({
		path: link,
		query: _.assignIn({
			time: new Date().getTime()
		}, query || {})
	})
}
Vue.use(Router)

//创建router对路由进行管理
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },{
    	path: '/home',
    	name: 'home',
    	component(resolve) {
    		require(['@/views/home/index.vue'], resolve)
    	}
    },{
      path: '/classification',
      name: 'classification',
      component(resolve) {
        require(['@/views/classification/index.vue'], resolve)
      }
    },,{
      path: '/shoppingcart',
      name: 'shoppingcart',
      component(resolve) {
        require(['@/views/shoppingcart/index.vue'], resolve)
      }
    },,{
      path: '/mine',
      name: 'mine',
      component(resolve) {
        require(['@/views/mine/index.vue'], resolve)
      }
    }
  ]
})
