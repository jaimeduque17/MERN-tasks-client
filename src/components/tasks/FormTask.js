import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    // Extract if a project is active
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    // Get the function of the task context
    const tasksContext = useContext(taskContext);
    const { taskselected, errortask, addTask, validateTask, getTasks } = tasksContext;

    // Effect for a selected task
    useEffect(() => {
        if(taskselected !== null) {
            saveTask(taskselected)
        } else {
            saveTask({
                name: ''
            })
        }
    }, [taskselected])

    // Form state
    const [task, saveTask] = useState({
        name: '',
    });

    // Extract the project name
    const { name } = task;

    // if doesn't selected project
    if (!project) return null;

    // Array destructuring to extract the actual project
    const [actualProject] = project;

    // Read the form values
    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validate
        if(name.trim() === '') {
            validateTask();
            return;
        }

        // Pass the validation

        // Add the new task to the task state
        task.projectId = actualProject.id;
        task.state = false;
        addTask(task);

        // Get and filter the actual project tasks
        getTasks(actualProject.id);

        // Restart the form
        saveTask({
            name: ''
        })
    }

    return (
        <div className="form">
            <form
                onSubmit={onSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task's Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value={taskselected ? 'Edit Task' : 'Add Task'}
                    />
                </div>
            </form>
            {errortask ? <p className="message error">The task name is obligatory</p> : null}
        </div>
    );
}

export default FormTask;