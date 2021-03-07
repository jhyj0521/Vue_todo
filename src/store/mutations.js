const addOneItem = (state, todoItem) => {
   const obj = {completed: false, item: todoItem};
   // 여기서의 this는 현재의 컴포넌트를 가르킨다.
   // 로컬 스토리지에 키, 값으로 저장한다.
   localStorage.setItem(todoItem, JSON.stringify(obj));
   state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
   localStorage.removeItem(payload.todoItem.item);
   state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {     
   state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;  
   localStorage.removeItem(payload.todoItem.item);
   localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
   localStorage.clear();
   state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }