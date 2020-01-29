import React, { Fragment } from 'react';

const NewProject = () => {
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
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project's Name"
                    name="name"
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