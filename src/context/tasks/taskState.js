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
    const deleteTask = async (id, project) => {
        try {
            await ClientAxios.delete(`/api/tasks/${id}`, { params: { project } });
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Change the state of each task
    // Edit a task
    const updateTask = async task => {
        try {
            const result = await ClientAxios.put(`/api/tasks/${task._id}`, task);
            dispatch({
                type: UPDATE_TASK,
                payload: result.data.task
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Extract a task to edit
    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
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