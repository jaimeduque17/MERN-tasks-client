import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK, ACTUAL_TASK, UPDATE_TASK, CLEAN_TASK } from '../../types';

export default (state, action) => {
    switch(action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksproject: state.tasksproject.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasksproject: [action.payload, ...state.tasksproject],
                errortask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errortask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.filter(task => task.id !== action.payload)
            }
        case UPDATE_TASK:
        case STATE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case ACTUAL_TASK:
            return {
                ...state,
                taskselected: action.payload
            }
        case CLEAN_TASK:
            return {
                ...state,
                taskselected: null
            }
        default:
            return state;
    }
}