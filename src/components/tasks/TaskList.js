import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/projectContext';

const TaskList = () => {
    
    // Extract projects of the initial state
    const projectsContext = useContext(ProjectContext);
    const { project, deleteProject } = projectsContext;

    // if doesn't selected project
    if(!project) return <h2>Select a project</h2>;

    // Array destructuring to extract the actual project
    const [actualProject] = project;

    const tasksProject = [
        { name: 'Choose Platform', state: true },
        { name: 'Choose Colors', state: false },
        { name: 'Choose Ecommerce Platform', state: false },
        { name: 'Choose Hosting', state: true }
    ];

    // Delete a project
    const onClickDelete = () => {
        deleteProject(actualProject.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {actualProject.name}</h2>
            <ul className="list-tasks">
                {tasksProject.length === 0
                    ? (<li className="task"><p>There are no tasks</p></li>)
                    : (tasksProject.map(task => (
                        <Task
                            task={task}
                        />
                    )))
                }
                <button
                    type="button"
                    className="btn btn-delete"
                    onClick={onClickDelete}
                >Delete Project &times;</button>
            </ul>
        </Fragment>
    );
}

export default TaskList;