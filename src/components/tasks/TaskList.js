import React, { Fragment } from 'react';
import Task from './Task';

const TaskList = () => {

    const tasksProject = [
        { name: 'Choose Platform', state: true },
        { name: 'Choose Colors', state: false },
        { name: 'Choose Ecommerce Platform', state: false },
        { name: 'Choose Hosting', state: true }
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
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
                >Delete Project &times;</button>
            </ul>
        </Fragment>
    );
}

export default TaskList;