import { ADD_TASK, DELETE_TASK, EDIT_TASK} from "../contants/taskTypes"


export const addTask=(payload)=>{
    return{
        type:ADD_TASK,
        payload
    }
} 

export const editTask=(payload)=>{
    return{
        type:EDIT_TASK,
        payload
    }
}

export const deleteTask=(payload)=>{
    console.log(payload)
    return{
        type:DELETE_TASK,
        payload
    }
}