import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK } from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: 'Choose Platform', state: true, projectId: 1 },
            { id: 2, name: 'Choose Colors', state: false, projectId: 2 },
            { id: 3, name: 'Choose Ecommerce Platform', state: false, projectId: 3 },
            { id: 4, name: 'Choose Hosting', state: true, projectId: 4 },
            { id: 5, name: 'Choose Platform', state: true, projectId: 1 },
            { id: 6, name: 'Choose Colors', state: false, projectId: 2 },
            { id: 7, name: 'Choose Ecommerce Platform', state: false, projectId: 3 },
            { id: 8, name: 'Choose Platform', state: true, projectId: 4 },
            { id: 9, name: 'Choose Colors', state: false, projectId: 1 },
            { id: 10, name: 'Choose Ecommerce Platform', state: false, projectId: 2 },
            { id: 11, name: 'Choose Platform', state: true, projectId: 3 },
            { id: 12, name: 'Choose Colors', state: false, projectId: 4 },
            { id: 13, name: 'Choose Ecommerce Platform', state: false, projectId: 3 },
        ],
        tasksproject: null,
        errortask: false
    }

    // Create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Create the functions


    // Get the tasks of a project
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    // Add a task to the selected project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Validate and show an error if is necessary
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    // Delete task by Id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    // Change the state of each task
    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                errortask: state.errortask,
                tasksproject: state.tasksproject,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;