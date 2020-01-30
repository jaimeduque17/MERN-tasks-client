import React, {useReducer} from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        form: false
    }

    // Dispatch to execute the actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Functions for the project CRUD

    return (
        <projectContext.Provider
        value={{
            form: state.form
        }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;