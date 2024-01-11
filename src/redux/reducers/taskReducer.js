import { ADD_TASK, DELETE_TASK, EDIT_TASK} from "../contants/taskTypes";


const initialState=[]

export const taskReducer=(state=initialState,{type,payload})=>{

switch (type) {
    case ADD_TASK:
        return [...state,payload]
    case EDIT_TASK:
        return   state.map((task)=>task.id==payload.id?task=payload:task )
    case DELETE_TASK:
        return state.filter((task)=>task.id!=payload)
    default:
        break;
}

}