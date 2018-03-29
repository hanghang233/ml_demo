/**
 * Created by HP on 2018/1/7.
 */
//store基本上就是一个容器，它包含着你的应用中大部分的状态
//1、vuex的状态存储是响应式的，当vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应的得到高效更新
//2、改变store中的状态的唯一途径是显式提交，这样使得我们方便跟踪每一个状态的变化
import Vue from 'vue'
import Vuex from 'vuex'
import ShopCarTool from '../util/shop-car-tool'

let shopCar = new ShopCarTool()

Vue.use(Vuex)


const AppLoading = { // 路由状态
  state: {
    nowStatus: 'loading'
  },
  mutations: {
    nowStatus (state, data) {
      state.nowStatus = data
    }
  },
  getters: {
    nowStatus: state => {
      return state.nowStatus
    }
  }
}


const ShopCar = { // 购物车
  state: {
    length: shopCar.length()
  },
  mutations: {
    setShopCarLength (state, length) {
      state.length = length
    }
  },
  getters: {
    getShopCarLength: state => {
      return state.length
    }
  }
}

export default new Vuex.Store({
  modules: {
    AppLoading,
    ShopCar
  }
})
