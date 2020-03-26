import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types';

import ClientAxios from '../../config/axios';

const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        errorform: false,
        project: null
    }

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Functions for the project CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    // Get projects
    const getProjects = async () => {
        try {
            const result = await ClientAxios.get('/api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projects
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Add new project
    const addProject = async project => {
        try {
            const result = await ClientAxios.post('/api/projects', project);
            console.log(result);
            // Insert the project in the state
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Validate form
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Select the project that the user clicked
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }

    // Delete a project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;