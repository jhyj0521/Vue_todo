import Vue from 'vue'
import Vuex from 'vuex'

// global functionality를 사용하고 싶을 때 사용
Vue.use(Vuex);

const storage = {
   fetch() {
      const arr = [];
      if(localStorage.length > 0) {
         for (let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
               arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
         }
      }
      return arr;
   }
}

export const store = new Vuex.Store({
   state: {
      todoItems: storage.fetch()
   },
   getters: {
      storedTodoItems(state) {
         return state.todoItems;
      }  
   },
   mutations: {
      addOneItem(state, todoItem) {
         const obj = {completed: false, item: todoItem};
         // 여기서의 this는 현재의 컴포넌트를 가르킨다.
         // 로컬 스토리지에 키, 값으로 저장한다.
         localStorage.setItem(todoItem, JSON.stringify(obj));
         state.todoItems.push(obj);
      },
      removeOneItem(state, payload) {
         localStorage.removeItem(payload.todoItem.item);
         state.todoItems.splice(payload.index, 1);
      },
      toggleOneItem(state, payload) {     
         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;  
         localStorage.removeItem(payload.todoItem.item);
         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
      },
      clearAllItems(state) {
         localStorage.clear();
         state.todoItems = [];
      }
   }
});