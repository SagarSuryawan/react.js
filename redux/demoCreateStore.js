// import {createStore}  from 'redux'

// function todoReducer(state= [], action) {

//     if(action.type == "add_Todo"){
//         const todoText = action.payload.todoText
//         return[
//             ...state, { 
//                 todoData:todoText, isFinished:false, id:(state.length == 0) ? 1 : state[state.length -1].id+1

//             }
//         ]
//     }else if(action.type == "delete_todo"){
//         const todoid = action.payload.todoid
//         return state.filter(t => t.id != todoid)
//     }
//     else if(action.type == "edit_Text"){
//         const todo = action.payload.todo;
//         const todoText = action.payload.todoText;
//         return state.map((t) => {
//             if(t.id == todo.id){
//                 todoData = todoText
//             }
//             return t;
//         })

//     }

//     else state
    
// }


// const {response} = createStore(todoReducer, [])

// // destructure the response 
// const {dispatch, subscribe, getState, replaceReducer} = createStore(todoReducer , [])

// subscribe(()=> console.log("Updating",getState()))


// dispatch({type: 'add_Todo', payload: {todoText: 'todo 1'}})
// dispatch({type: 'add_Todo', payload: {todoText: 'todo 2'}})
// // dispatch({type: 'add_Todo', payload: {todoText: 'todo 3'}})
// // dispatch({type: 'add_Todo', payload: {todoText: "todo 4"}})

// // console.log("for adding",getState())


// dispatch({type : "delete_todo" , payload: {todoid: 1}})
// // dispatch({type : "delete_todo" , payload: {todoid: 4}})
// // console.log("for deleteing",getState())

// // console.log("for checking",getState())


import { createStore, bindActionCreators } from "redux";

function todoReducer(state = [],action) {

    if(action.type == "add_todo"){
        const todoText  = action.payload.todoText;
        return [
            ...state, {
                todoData:todoText, isFinished:false, id: (state.length == 0) ? 1 : state[state.length -1 ].id +1
            }
        ]
    }else if (action.type == "delete_todo"){
        const todoid = action.payload.todoid
        return state.filter(t => t.id != todoid)
    }
    else if(action.type == "edit_Text"){
                const todo= action.payload.todo;   
                const todoText = action.payload.todoText;
                return state.map((t) => {
                    if(t.id == todo.id){
                        t.todoData = todoText
                    }
                    return t;
                })
        
            }
        
            else state
    

}


// const response = createStore(todoReducer, [])


    const{dispatch, replaceReducer, getState, subscribe} = createStore(todoReducer, [])

    // action object convert to actiom method whcih is also called as action creator
    const addTodo = (todoText) => ({type:"add_todo", payload:{todoText}})
    const deleteTodo = (todoid) =>({type:"delete_todo", payload:{todoid}})

    // subscribe method
    subscribe(()=> console.log(getState()))


    // bondActionCreator
    // const actions = bindActionCreators({methods},bind with dispatch)

    const actions = bindActionCreators({addTodo, deleteTodo}, dispatch)


    // add action
    // dispatch(addTodo('task 1'))
    // dispatch(addTodo('task 2'))

    // delete action
    // dispatch(deleteTodo(2))

    actions.addTodo('todo 1')
    actions.addTodo('todo 2')
    

    actions.deleteTodo(2)








