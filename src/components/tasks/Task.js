import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    // Extract if a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // Get the function of the task context
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks, updateTask, saveActualTask } = tasksContext;

    // Extract the project
    const [projectActual] = project;

    // Function that is executed when the delete task button is pressed
    const taskDelete = id => {
        deleteTask(id, projectActual._id);
        getTasks(projectActual.id);
    }

    // Function to modify task state
    const changeState = task => {
        if(task.state) {
            task.state = false;
        } else {
            task.state = true;
        }
        updateTask(task);
    }

    // Add an actual task when the user wants to edit
    const selectTask = task => {
        saveActualTask(task);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>
            <div className="state">
                {task.state
                    ? (<button
                        type="button"
                        className="complete"
                        onClick={() => changeState(task)}
                    >Complete</button>)
                    : (<button
                        type="button"
                        className="incomplete"
                        onClick={() => changeState(task)}
                    >Incomplete</button>)
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => selectTask(task)}
                >Edit</button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => taskDelete(task._id)}>Delete</button>
            </div>
        </li>
    );
}

export default Task;