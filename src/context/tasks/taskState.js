import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT } from '../../types';

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
        tasksproject: null
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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;