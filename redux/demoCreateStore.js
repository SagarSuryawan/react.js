import {createStore}  from 'redux'

function todoReducer(state= [], action) {

    if(action.type == "add_Todo"){
        const todoText = action.payload.todoText
        return[
            ...state, { 
                todoData:todoText, isFinished:false, id:(state.length == 0) ? 1 : state[state.length -1].id+1

            }
        ]
    }else if(action.type == "delete_todo"){
        const todoid = action.payload.todoid
        return state.filter(t => t.id != todoid)
    }
    else if(action.type == "edit_Text"){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map((t) => {
            if(t.id == todo.id){
                todoData = todoText
            }
            return t;
        })

    }

    else state
    
}


const {response} = createStore(todoReducer, [])

// destructure the response 
const {dispatch, subscribe, getState, replaceReducer} = createStore(todoReducer , [])

subscribe(()=> console.log("Updating",getState()))


dispatch({type: 'add_Todo', payload: {todoText: 'todo 1'}})
dispatch({type: 'add_Todo', payload: {todoText: 'todo 2'}})
// dispatch({type: 'add_Todo', payload: {todoText: 'todo 3'}})
// dispatch({type: 'add_Todo', payload: {todoText: "todo 4"}})

// console.log("for adding",getState())





dispatch({type : "delete_todo" , payload: {todoid: 1}})
// dispatch({type : "delete_todo" , payload: {todoid: 4}})
// console.log("for deleteing",getState())

// console.log("for checking",getState())


