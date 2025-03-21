import {createStore}  from redux

function todoReducer(state, action) {

    if(action.type == "add_Todo"){
        const todoData = action.payload.todoText
        return[
            ...state, { 
                todoData:todoText,
                isFinished:false,
                id:(state.length == 0) ? 1 : state([state.length -1].id+1)

            }
        ]
    }else if(action.type == "delete_todo"){
        const todo = action.payload.todo
        return state.filter(t => t.id != todo.id)
    }
    else if(action.type == "edit_Text"){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map((t) => {
            if(t.id == todo.id){
                todoData = todoText
            }
        })

        return t;
    }
    else state
}


const response = createStore(todoReducer, [])