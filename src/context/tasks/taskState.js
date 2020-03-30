import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK, ACTUAL_TASK, UPDATE_TASK, CLEAN_TASK } from '../../types';

import ClientAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        tasksproject: [],
        errortask: false,
        taskselected: null
    }

    // Create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Create the functions


    // Get the tasks of a project
    const getTasks = async project => {
        try {
            const result = await ClientAxios.get('/api/tasks', { params: { project } });
            console.log(result);
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Add a task to the selected project
    const addTask = async task => {
        const result = await ClientAxios.post('/api/tasks', task);
        console.log(result);
        try {
            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
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

    // Extract a task to edit
    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    // Edit a task
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    // Delete the selected task
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <TaskContext.Provider
            value={{
                errortask: state.errortask,
                taskselected: state.taskselected,
                tasksproject: state.tasksproject,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask,
                saveActualTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;