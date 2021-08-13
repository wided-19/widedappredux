import { ADD_TASK, DElETE_TASK, DONE_TASK, EDIT_TASK } from "../Constant/action-type"




const initialState = {
    listTasks :[{
        id:1,
        text:"hello world",
        isDone:false
    }],
}

const  TaskReducer = (state=initialState, {type,payload})=>{
    switch (type) {

        case   ADD_TASK :
            return {...state,listTasks:[...state.listTasks,payload]}
        case  EDIT_TASK :
            return {...state,listTasks: state.listTasks.map((el)=>
                el.id ===payload.id ? {...el, text:payload.newTask}:el)}  
        case DONE_TASK:
            return{...state, 
                listTasks: state.listTasks.map((el)=>el.id===payload? {
                    ...el ,isDone:!el.isDone
                }:el)
            }  
            case DElETE_TASK:
            return{...state,listTasks:  state.listTasks.filter((el)=>el.id !==payload)

            }  
        default:
          return state 
    }
}
export default TaskReducer;