import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = () => {

    // Extract projects of the initial state
    const projectsContext = useContext(ProjectContext);
    const { project, deleteProject } = projectsContext;

    // Get the project tasks
    const tasksContext = useContext(taskContext);
    const { tasksproject } = tasksContext;

    // if doesn't selected project
    if (!project) return <h2>Select a project</h2>;

    // Array destructuring to extract the actual project
    const [actualProject] = project;

    // Delete a project
    const onClickDelete = () => {
        deleteProject(actualProject.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {actualProject.name}</h2>
            <ul className="list-tasks">
                {tasksproject.length === 0
                    ? (<li className="task"><p>There are no tasks</p></li>)
                    : <TransitionGroup>
                        {(tasksproject.map(task => (
                            <CSSTransition
                                key={task.id}
                                timeout={200}
                                classNames="task">
                                <Task
                                    task={task}
                                />
                            </CSSTransition>
                        )))}
                    </TransitionGroup>
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