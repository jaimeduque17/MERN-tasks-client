import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK } from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose Platform', state: true, projectId: 1 },
            { name: 'Choose Colors', state: false, projectId: 2 },
            { name: 'Choose Ecommerce Platform', state: false, projectId: 3 },
            { name: 'Choose Hosting', state: true, projectId: 4 },
            { name: 'Choose Platform', state: true, projectId: 1 },
            { name: 'Choose Colors', state: false, projectId: 2 },
            { name: 'Choose Ecommerce Platform', state: false, projectId: 3 },
            { name: 'Choose Platform', state: true, projectId: 4 },
            { name: 'Choose Colors', state: false, projectId: 1 },
            { name: 'Choose Ecommerce Platform', state: false, projectId: 2 },
            { name: 'Choose Platform', state: true, projectId: 3 },
            { name: 'Choose Colors', state: false, projectId: 4 },
            { name: 'Choose Ecommerce Platform', state: false, projectId: 3 },
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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                errortask: state.errortask,
                tasksproject: state.tasksproject,
                getTasks,
                addTask,
                validateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;