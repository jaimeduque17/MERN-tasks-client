import React, { Fragment, useState } from 'react';

const NewProject = () => {

    // Project's state
    const [project, saveProject] = useState({
        name: ''
    });

    // Extract project's name
    const { name } = project;

    // Read input's content
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    // When the user send a project
    const onSubmitProject = e => {
        e.preventDefault();

        // Validate the project


        // Add to the state


        // Restart the form

    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
                New Project
        </button>
            <form
                className="form-new-project"
                onSubmit={onSubmitProject}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project's Name"
                    name="name"
                    value={name}
                    onChange={onChangeProject}
                />
                <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Add Project"
                />
            </form>
        </Fragment>
    );
}

export default NewProject;