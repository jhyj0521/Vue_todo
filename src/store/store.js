import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

// global functionality를 사용하고 싶을 때 사용
Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
      todoApp
   }
});